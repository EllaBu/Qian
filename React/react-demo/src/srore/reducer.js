import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
}   // 给Store里增加了两个新的数据。

// state: 是整个项目中需要管理的数据信息


export default ( state = defaultState, action ) => {

  console.log(state,action)

  // state: 指的是原始仓库里的状态。
  // action: 指的是action新传递的状态。

  if(action.type === CHANGE_INPUT) {
    // Reducer里只能接收state，不能改变state
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    newState.list.splice(action.index, 1)
    return newState
  }


  return state
}