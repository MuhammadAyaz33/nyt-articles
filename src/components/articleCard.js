import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => {
  // I have checked the available apis but did'nt found any api to fetch single article
  const handleCard = (article) => {
    localStorage.setItem('article', JSON.stringify(article));
    window.location.replace('/article-details');
  };

  return (
    <div>
      {article && (
        <div className="card" id={article?.id} onClick={() => handleCard(article)}>
          <div className="card-body">
            <h2 className="article-title">{article?.title}</h2>
            <p className="article-description">{article?.abstract}</p>
          </div>
        </div>
      )}
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleCard;
