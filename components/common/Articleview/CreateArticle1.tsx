import { useFormik } from "formik";
import React, { FunctionComponent, useMemo} from "react";
import { Button, Form } from "semantic-ui-react";
import * as Yup from 'yup';
import Input from "../Input/Input";



const CreateDeneme: FunctionComponent = () => { 

  const initialValues : any = useMemo(() => {
    return {
      bookName: '',
      authorId: '',
      categoryId: '',
    };
  }, []);

  const shema = useMemo(
    () =>
    Yup.object().shape({
    bookName: Yup.string()
    .required('Bu alan boş bırakılamaz.')
    .max(70),
    authorId: Yup.string(),
    categoryId: Yup.string(),  
    }),
    [],
  );

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log('values', values);
    },
    validationSchema: shema,
  });

  
    return(
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Input 
             formikProps={formik}
             name="bookName"
             value={formik.values.name}
             />
              <Button type='submit'>gonder</Button>
          </Form>
         
        </div>
    );}
export default CreateDeneme;
