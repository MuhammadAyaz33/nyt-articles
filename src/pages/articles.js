import React, { useMemo } from 'react';
import { useAxios } from 'hooks/useAxios';
import ArticleCard from 'components/articleCard';

export default function Articles() {
  const { REACT_APP_NYT_MOST_VIEWED_API, REACT_APP_NYT_KEY } = process.env;
  const { data, error, loaded } = useAxios(
    `${REACT_APP_NYT_MOST_VIEWED_API}${REACT_APP_NYT_KEY}`,
    'get'
  );
  const articles = useMemo(() => {
    return data?.results || [];
  }, [data]);

  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <div className="wrapper">
        {articles.map((article) => (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    );
  }
  return <span className="loading">Loading...</span>;
}
