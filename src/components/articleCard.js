import React from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useRoute } from 'hooks/useRoute';

const ArticleCard = ({ article }) => {
  const { setItem } = useLocalStorage('article');
  // I have checked the available apis but did'nt found any api to fetch single article
  const handleCard = (article) => {
    setItem(article);
    useRoute('/article-details');
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
