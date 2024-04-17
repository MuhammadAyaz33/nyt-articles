import React from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

const ArticleDetails = () => {
  const { getItem } = useLocalStorage('article');
  const article = getItem();

  const bannerImage = article?.media[0]['media-metadata'][0].url;
  return (
    <div className="wrapper">
      {article && (
        <div className="article-details" id={article?.id}>
          <img className="banner-img" src={bannerImage} alt="" />
          <h2 className="title">{article?.title}</h2>
          <p className="description">{article?.abstract}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
