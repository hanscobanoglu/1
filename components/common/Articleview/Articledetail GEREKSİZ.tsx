import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import backicon from "../../../public/arrow.png";
import { blogdata } from "../../data/blogdata";

function Articledetail() {
  const router = useRouter();
  const { index } = router.query;
  console.log(index);
  console.log(blogdata[index]);

  const gelendata = blogdata[index];

  console.log("gelen data", gelendata);
  return (
    <div className="detail-cotainer">
      <div className="detail-button">
      <Link  href="/blogsite"><img src={backicon.src} alt="back" className="detail-left"></img></Link>
      </div>
      <div className="detail-wrapper-left">
        <img src={blogdata[index].img} alt="logo" className="detail-left-img" />
      </div>
      <div className="detail-wrapper-right">
      <div className="detail-comp">
      <div className="detail title">{blogdata[index].title}</div>
      <div className="detail author">{blogdata[index].author}</div>
      <div className="detail category">{blogdata[index].category}</div>
      <div className="detail aricle">{blogdata[index].atricle}</div>
      </div>
     </div>
     <div className="detail-button">
     <Link  href='`/detail${}`'><img src={backicon.src} alt="back" className="detail-right"></img></Link>
     </div>
     <Link  href="/blogsite"><img src={backicon.src} alt="back" className="detail-backicon"></img></Link>
    </div>
  );
}

export default Articledetail;
