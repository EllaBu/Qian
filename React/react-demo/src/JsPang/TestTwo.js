import React, { Component, Fragment } from 'react'
import TestTwoItem from './TestTwoItem'

class TestTwo extends Component {
  constructor(props) {
    super(props)
    this.state= {
      inputValue: '123',
      list: ['学习Vue', '学习React']
    }
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.input.value]
    })
  }

  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (

      <Fragment>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.inputChange}
          //ref的使用
          //关键代码——----------start
          ref={(input)=>{this.input = input}}
          //关键代码------------end
        />
        <button onClick={this.addList}>增加项目</button>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return (
                <TestTwoItem
                  key={index}
                  content={item}
                  index={index}
                  deleteItem = {this.deleteItem}
                />
                // 父子组件传值
                // index传给子组件，编辑删除哪一条数据
                // 把deleteItem方法传递给子组件
              )
            })
          }
        </ul>
      </Fragment>

    )
  }
}

export default TestTwo

