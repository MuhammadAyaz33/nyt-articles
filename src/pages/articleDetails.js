import React, { useState } from 'react';

const ArticleDetails = () => {
  const [article] = useState(() => {
    // getting stored values from localstorage (Can use redux to set/get data fro state => best practise)
    return JSON.parse(localStorage.getItem('article'));
  });

  return (
    <div className="wrapper">
      {article && (
        <div className="article-details" id={article?.id}>
          <img className="banner-img" src={article?.media[0]['media-metadata'][0].url} alt="" />
          <h2 className="title">{article?.title}</h2>
          <p className="description">{article?.abstract}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
