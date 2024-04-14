import React from 'react';
import ArticleCard from 'components/articleCard';
import PropTypes from 'prop-types';

export default function Articles({ articles }) {
  return (
    <>
      <div className="wrapper">
        {articles.map((article) => (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </>
  );
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};
