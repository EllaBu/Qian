import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

import store from '../srore'
import { changeInputAction, addItemAction, deleteItemAction } from '../srore/actionCreators'
// import {ADD_ITEM, DELETE_ITEM} from "../srore/actionTypes";

class TodoList extends Component {
  constructor(props) {
    super(props)
    /*this.state = {
      data: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
      ]
    }*/
    this.state = store.getState()
    console.log(store.getState())

    this.inputChange = this.inputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    store.subscribe(this.storeChange)  // 订阅Redux的状态
  }

  inputChange(e) {
    /*this.setState({
      inputValue: e.target.value
    })*/
    /*const action = {
      type: CHANGE_INPUT,
      value: e.target.value
    }
    store.dispatch(action)*/

    const action = changeInputAction(e.target.value)
    store.dispatch(action)

    console.log(this.state.inputValue)
  //  创建action
  }

  storeChange() {
    this.setState(
      store.getState()
    )
  }

  addItem() {
    /*this.setState({
      list: [...this.state.list, this.state.inputValue]
    })*/
    /*const action = { type: ADD_ITEM }*/
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem (index) {
    console.log(index)
    /*const action = {
      type: DELETE_ITEM,
      index
    }*/
    const action = deleteItemAction(index)
    store.dispatch(action)
  }



  render() {
    return (
      <div>
        <header style={{margin: '10px'}}>
          <Input
            placeholder={this.state.inputValue}
            style={{width: '250px', marginRight: '10px'}}
            onChange={this.inputChange}
          />
          <Button
            type='primary'
            onClick={this.addItem}
          >增加</Button>
        </header>

        <div style={{margin:'10px',width:'300px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index)=>(
              <List.Item
                onClick={this.deleteItem.bind(this, index)}
              >{item}</List.Item>
            )}
          />
        </div>

      </div>
    );
  }
}
export default TodoList
