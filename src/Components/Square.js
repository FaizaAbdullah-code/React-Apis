import React, { Component } from 'react'

export class Square extends Component {
  render() {
    return (
      <div>
        <button className="btn">
            {this.props.value}
        </button>

      </div>
    )
  }
}
