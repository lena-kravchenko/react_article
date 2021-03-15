import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <div>
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>
    <p>
      {text}
    </p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
