import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

const Article = ({
  title,
  text
}) => {
  return (
    <div>
      <div>
        <b>Title:</b>
        <span>{title}</span>
      </div>
      <div>
        <b>Text:</b>
        <span>{text}</span>
      </div>
    </div>
  )
}

Article.propTypes = propTypes
export default Article
