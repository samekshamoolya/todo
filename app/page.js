'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [dis, setdis] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHanddler = (e) =>{
    e.preventDefault();
    setmainTask([...mainTask, {title,dis}]);
    settitle("")
    setdis("")
  };
 
  const buttonHanddler = (i) =>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2> No Task Available</h2>
  if (mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return(
        <li key={i}className='flex justify-between items-center mb-8'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h4 className='text-xl font-semibold'>{t.dis}</h4>
        </div>
        <button
        onClick={() => {
          buttonHanddler(i)
        }}
        className='bg-green-400 text-white py-4 px-6 rounded'>Complete</button>
        <button
        onClick={() => {
          buttonHanddler(i)
        }}
        className='bg-red-400 text-white py-4 px-6 rounded'>Delete</button>

        </li>
      )
    })
  }
    
  return (
    <>
    <h1 className='bg-black text-center text-white py-6 text-2xl font-bold'>Shami's Todo List</h1>
    <form onSubmit={submitHanddler}>
      <input type="text" className='border-zinc-800 border-2 m-5 px-5 py-4'
      placeholder='Enter your title'
      value={title}
      onChange={(e) => {
      settitle(e.target.value)
    
      }}/>

      <input type="text" className='border-zinc-800 border-2 m-5 px-5 py-4'
      placeholder='Enter your description'
      value={dis}
      onChange={(e) => {
      setdis(e.target.value)
        }}/>    

      <button className='bg-black text-white py-4 px-4 rounded'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-400'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page;