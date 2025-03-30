import React from 'react'
import Todo from './Todo'
import style from "./todos.module.css"

const Todos = (props) => {
    // console.log(props.todos)
  return (
    <section className={style.todos}>
        {
            props.todos.map((todo)=><Todo key={todo.id} id={todo.id} todo={todo.todo} removeToDo={props.removeToDo}/>)
        }
    </section>
  )
}

export default Todos
