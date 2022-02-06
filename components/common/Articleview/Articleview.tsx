import React, { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

import ALL_BOOKS, {
  ArticleviewQuery,
} from "./../../../src/__generated__/ArticleviewQuery.graphql";
import {STORE_OR_NETWORK, useQuery } from "relay-hooks";
import CreateArticle from "./CreateArticle";
import CreateDeneme from "./CreateArticle1";
import CreateCategory from "./CreateCategory";
import AuthorList from "./AuthorList";
import CategoryList from "./CategoryList";
import BookArticleList from "./BookArticleList";

const Articleview: FunctionComponent = () => {
  const router = useRouter();
  const { error, data } = useQuery<ArticleviewQuery>(ALL_BOOKS, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  useEffect(() => {
    // Burada data gelmiyorsa yapacağım işlemleri yapacağım.

    

    // Burada datalar yükleniyorsa loading ekranı çıkacak.
  }, [data]);

  return (
    <div className="article-container">
      <div className="article-wrapper">
        <div className="component-container"><BookArticleList /></div>
        
        <div className="component-container"><AuthorList /></div>
       <div className="component-container"><CategoryList /></div>
       
        </div>
    </div>
  );
};

export default Articleview;
/*
{ blogdata.map((item, index) => (
  <div key={index}>
    <div className="article-comp">
      <div className="article-comp-wrapper">
        <img src={item.img} alt="logo" className="article-img" />
        <div className="article-title">{item.title}</div>
        <div className="article-info">
          <div className="article-info author">Yazar:</div>
          <div className="article-info authorname">{item.author}</div>
          <div className="article-info kategori">Tür : {item.category}</div>
        </div>
        <button className="article-button"  onClick={() =>
              router.push({
                pathname: `${
                  router.pathname =
                  '/detail'
                }`,
                query: { index},
              })}>Oku</button>
      </div>
    </div>
  </div>
))}
*/
