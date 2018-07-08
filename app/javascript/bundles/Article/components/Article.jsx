import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  }

  render () {
    const {
      title,
      text
    } = this.props
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
}
