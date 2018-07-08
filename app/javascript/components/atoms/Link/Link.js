import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  text: PropTypes.string,
  linkTo: PropTypes.string,
  method: PropTypes.string,
  confirm: PropTypes.string
}

const Link = ({
  text,
  linkTo,
  method,
  confirm
}) => {
  return (
    <a href={linkTo} data-method={method} data-confirm={confirm}>
      {text}
    </a>
  )
}

Link.propTypes = propTypes
export default Link
