import React, { Component } from "react"

class TestTwoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <li onClick={this.handleClick}>{ this.props.content }</li>
    //  父子组件传值
    )
  }
}

export default TestTwoItem