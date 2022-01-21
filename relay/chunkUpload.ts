// chunk uploader class

export default class ChunkUpload {
  static chunkSize = 8 * 1024 * 1024;
  static uploadUrl = "http://127.0.0.1:8000/";
  readonly request: XMLHttpRequest;
  readonly file: File;
  readonly name: string;
  currentChunkStartByte: number;
  currentChunkFinalByte: number;
  query: string;
  variables: any;

  constructor(file: File, name: string, query: string, variables: any) {
    this.request = new XMLHttpRequest();
    this.request.overrideMimeType('application/octet-stream');

    this.file = file;
    this.name = name;

    this.query = query;
    this.variables = variables;

    this.currentChunkStartByte = 0;
    this.currentChunkFinalByte =
      ChunkUpload.chunkSize > this.file.size
        ? this.file.size
        : ChunkUpload.chunkSize;
  }

  uploadFile() {
    this.request.open('POST', ChunkUpload.uploadUrl, true);

    const chunk: Blob = this.file.slice(
      this.currentChunkStartByte,
      this.currentChunkFinalByte,
    ); // split the file according to the boundaries
    this.request.setRequestHeader(
      'Content-Range',
      `${this.currentChunkStartByte}-${this.currentChunkFinalByte}/${this.file.size}`,
    );

    this.request.onload = res => {
      // console.log('onload res: ', res);
      const remainingBytes = this.file.size - this.currentChunkFinalByte;

      if (this.currentChunkFinalByte === this.file.size) {
        alert('Ses dosyası başarıyla yüklendi!');
        return;
      } else if (remainingBytes < ChunkUpload.chunkSize) {
        // if the remaining chunk is smaller than the chunk size we defined
        this.currentChunkStartByte = this.currentChunkFinalByte;
        this.currentChunkFinalByte =
          this.currentChunkStartByte + remainingBytes;
      } else {
        // keep chunking
        this.currentChunkStartByte = this.currentChunkFinalByte;
        this.currentChunkFinalByte =
          this.currentChunkStartByte + ChunkUpload.chunkSize;
      }

      this.uploadFile();
    };

    const formData = new FormData();
    formData.append('query', this.query);
    formData.append('variables', JSON.stringify(this.variables));
    formData.append('file', chunk, this.file.name);
    this.request.send(formData); // send it now!
    this.request.onreadystatechange = () => {
      if (this.request.readyState == XMLHttpRequest.DONE) {
        console.log('deneme', JSON.parse(this.request.response));
        return JSON.parse(this.request.response);
      }
    };
  }
}