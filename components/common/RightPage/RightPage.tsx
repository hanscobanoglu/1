import React, { FunctionComponent } from "react";
import { data } from "../../data/data";

interface Props {
  data: {
      title: string;
      title2: string;
      subtext1: string;
      subtext2: string;
      textAlign: string;
      img: string;
  }
}

const LbPage: FunctionComponent<Props> = (props: Props) => {
  const { data } = props;
  return (
    <div className="rightpage-container">
      <div className="rightpage-wrapper"> 
        <h1 className="rightpage-title">{data.title}</h1>
        <h5 className="rightpage-title">{data.title2}</h5>
        <div className="rightpage-subtext">{data.subtext1}{data.subtext2}</div>
        <div className="rightpage-aligin">{data.textAlign}</div>
      </div>
    </div>
  );
};

export default LbPage;
