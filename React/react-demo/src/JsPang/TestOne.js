import React, {Component, Fragment} from 'react'
import './test.css'
// 引入class文件

class TestOne extends Component {

  constructor(props) {
    super(props)
    // 调用父类的构造函数，固定写法
    this.state = {
      inputValue: '123',
      list: ['学习Vue1', '学习React']
    }
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
      // ...这个是ES6的新语法，叫做扩展运算符。意思就是把list数组进行了分解，形成了新的数组，然后再进行组合
    })
  }

  deleteItem(index) {
    let list = this.state.list
    console.log(index)
    // React是禁止直接操作state的
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }


  render() {
    return (
      <Fragment>
        {/*我们在写一个组件的时候，组件的最外层都需要有一个包裹div*/}
        {/*但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作Flex布局的时候,外层还真的不能有包裹元素。这种矛盾其实React16已经有所考虑了，为我们准备了<Fragment>标签*/}
        {/*要想使用<Fragment>，需要先进行引入。*/}
        <div>
          {/*用className定义类名， label的for应该使用htmlFor*/}
          <label htmlFor="addItem">输入项目</label>
          <input type="text" id="addItem" className="input" value={this.state.inputValue} onChange={this.inputChange}/>
          <button onClick={this.addList}>增加项目</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {

              return (
                <li
                  key={index}
                  onClick={() => this.deleteItem(index)}
                >{item}</li>
              // 需要传参数的函数写法
              )
              // 错误缺少key值，就是在用map循环时，需要设置一个不同的值，这个是React的要求

              /*return (
                <li
                  key={index}
                  onClick={() => this.deleteItem(index)}
                  dangerouslySetInnerHTML={{__html: item}}
                ></li>
              )*/
              // 如果想在文本框里输入一个<h1>标签，并进行渲染。默认是不会生效的，只会把<h1>标签打印到页面上，这并不是我想要的。如果工作中有这种需求，可以使用dangerouslySetInnerHTML属性解决
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TestOne