import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext'
import ListItem from './ListItem';

const TodoList = () => {
  const {todos} = useContext(TodosContext);
  return (
    <ul>
      <h2>Todos</h2>
      {todos.filter(todo => todo.status === false).map(todo => <ListItem todo={todo} key={todo.id}/>)}
    </ul>
  )
}

export default TodoList