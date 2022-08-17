import axios from "axios"
import React, { useState, useEffect } from "react"
import ClassComp from "./ClassExample"
import RemoveAll from "./RemoveAll"


export default function TodoList(){

    // State
    const [newTodoText, setnewTodoText] = useState('')
    const [todoCounter, settodoCounter] = useState(0)
    const [todoList, setTodoList] = useState([])

    /*
    Stages of component - Life cycles
    mounting
    updating
    unmounting
    */

    useEffect(()=>{
        console.log('every time')
    })

    useEffect(()=>{
        console.log('first time')

        axios.post('https://jsonplaceholder.typicode.com/todos', {})
        .then(resp=>resp.data)

        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resp=>resp.data)
        .then(resp=>setTodoList(resp.map(item=>item.title)))        
    }, [])

    useEffect(()=>{
        console.log('state changes')
        settodoCounter(todoList.length)
    }, [todoList])

    // unmounting
    useEffect(()=>{
        return ()=>{
            console.log('unmounting')
        }
    }, [])

    // Click Events
    const addItem = () => {
        setTodoList([
            ...todoList,
            newTodoText
        ])
        setnewTodoText('')
    }

    const deleteItem = (index)=>{
        let newtodoList = [...todoList] // ES6 destructuring
        newtodoList.splice(index, 1);
        setTodoList(newtodoList)
    }

    return <>
    <ClassComp />

    <p>Number of Todo Items: {todoCounter}</p>

    {/* Adding new TODO text */}
    <input type="text" className="inputText" value={newTodoText} onChange={(e)=>{setnewTodoText(e.target.value)}} />
    <button className="btn" onClick={addItem}>Add</button>

    {todoCounter >= 5 && <RemoveAll />}

    {/* Displaying the TODO list */}
    {todoList.map((item,index) => <p><button className="btn" onClick={()=>{deleteItem(index)}}>-</button> {item}</p>)}

    </>}