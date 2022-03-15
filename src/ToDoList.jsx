
import React from 'react'

export default function ToDoList(props) {

  
  return (
    <>
    <div className='todo_style'>
      <button className='btn' onClick={() => {
        props.onSelect(props.id)
      }}>X</button>
      <li>{props.text}</li>
    </div>
    </>
  )
}
