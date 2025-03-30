import React,{useState} from 'react'
import Todos from './Todos'
import {v4 as uuidv4} from "uuid";
import style from "./home.module.css"
import Newtodo from './Newtodo'

const Home = () => {

    const[todos,setTodos]=useState([]);

    const addnewtodo = (todo) =>{
        // console.log(newtodo);
        setTodos((prevTodos)=>{
            return [...prevTodos,{id:uuidv4(),todo}];
        })
        // console.log(todos);
    }

    const removeToDo = (id) =>{
        setTodos((prevTodos)=>{
            const filteredTodos = todos.filter((todo)=>todo.id!=id);
            return filteredTodos;
        });
    }

  return (
    <div className={style.container}>
      <h1 className={style.home_header}>Todo list</h1>
      <Newtodo addnewtodo={addnewtodo}/>
      <Todos todos={todos} removeToDo={removeToDo}/>
    </div>
  )
}

export default Home
