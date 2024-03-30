
// Write your code here
import './index.css'

const TodoItem = props => {
  const {listItem, deleteTodo} = props
  const {title, id} = listItem
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button onClick={onDeleteTodo} type="button" className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
