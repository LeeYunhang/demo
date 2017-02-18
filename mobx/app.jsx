import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

class Todo {
  id = Math.random()
  @observable title = ''
  @observable finished = false

  constructor(title) { this.title = title }
}

class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  add(title) {
    return this.todos.push(new Todo(title))
  }
}


@observer
class TodoListView extends React.Component {
  constructor() {
    super()
    this.state = { title: '' }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
        </ul>
        当前已完成: {this.props.todoList.unfinishedTodoCount}
        <input type="text" onChange={event => this.state.title = event.target.value} />
        <button onClick={() => this.props.todoList.add(this.state.title)}>增加</button>
      </div>
    )
  }
}

const TodoView = observer(({ todo }) => (
  <li>
    <input type="checkbox" checked={todo.finished}
      onClick={() => todo.finished = !todo.finished}
    />
    {todo.title}
  </li>)
)


const list = new TodoList()
list.add('上课')
ReactDOM.render(<TodoListView todoList={list} />, document.getElementById('root'))