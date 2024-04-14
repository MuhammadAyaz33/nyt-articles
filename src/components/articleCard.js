import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => {
  return (
    <div>
      {article && (
        // <div id={article?.id}>
        //   {/* <CardMedia className={classes.media} component="img"
        //             src={article.multimedia?.[0]?.url ?
        //                 `https://nytimes.com/${article.multimedia[0].url}` :
        //                 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
        //             } alt="news-img" /> */}
        //   <div>
        //     <div>
        //       <a
        //         href={article?.uri}
        //         target="_blank"
        //         rel="noreferrer"
        //         style={{ textDecoration: 'none' }}
        //       >
        //         {article?.title}
        //       </a>
        //     </div>
        //     <div>{article?.abstract}</div>
        //     <div>{article?.published_date}</div>
        //   </div>
        // </div>
        <div className="card">
          <div className="card-banner">
            <p className="category-tag popular">Popular</p>
            <img
              className="banner-img"
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
          <div className="card-body">
            <p className="blog-hashtag">#webdevelopment #frontend</p>
            <h2 className="blog-title">What is the future of front end development?</h2>
            <p className="blog-description">
              My thoughts on the future of front end web development
            </p>

            <div className="card-profile">
              <img
                className="profile-img"
                src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="card-profile-info">
                <h3 className="profile-name">Maya Eleanor Peña</h3>
                <p className="profile-followers">1.2k followers</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
