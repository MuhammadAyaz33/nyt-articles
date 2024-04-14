fetchArticles = () => {
  let currentState = this.state.articles;
  fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_KEY}`
  )
    .then((res) => res.json())
    .then((json) => this.setState({ articles: [...currentState, json.response.docs] }));
};
