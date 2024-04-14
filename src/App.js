import { useMemo } from 'react';
import Articles from 'pages/articles';
import { useAxios } from 'hooks/axios';
import './App.css';

const App = () => {
  const { data, error, loaded } = useAxios(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NYT_KEY}`,
    'get'
  );
  const articles = useMemo(() => {
    return data?.results || [];
  }, [data]);

  if (loaded) {
    return error ? <span>Error: {error}</span> : <Articles articles={articles} />;
  }
  return <span>Loading...</span>;
};

export default App;
