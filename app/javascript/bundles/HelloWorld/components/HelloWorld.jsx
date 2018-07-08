import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

export default class HelloWorld extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  /**
   * @param props - Comes from your rails view.
   */

  state = {
    name: this.props.name
  }

  updateName = (name) => {
    this.setState({ name })
  }

  render () {
    return (
      <Box>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hi to :
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
      </Box>
    )
  }
}

const Box = styled.div`
`
