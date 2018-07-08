import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  text: PropTypes.string
}

const Link = ({
  text,
  linkTo,
  linkFunc
}) => {
  return (
    <a href={linkFunc ? '' : linkTo} onClick={linkFunc}>
      {text}
    </a>
  )
}

Link.propTypes = propTypes
export default Link
