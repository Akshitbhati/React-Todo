import React, { useState } from 'react'
import './todos.css'
import {GiCancel} from 'react-icons/gi'
function Todos() {

    const [todos, setTodos] = useState('')
    const [data, setData] = useState([])

    const addTodo = () => {
        setData((data) => {
            const upgradedList = [...data, todos]
            console.log(upgradedList)
            setTodos('')
            return upgradedList
        })
    }
    const removeActivity = (index) => {
        const newList = [...data]
        newList.splice(index,1)
        setData(newList)

    }

    return (
        <div className='wrapper'>
            <h1 className="todo__name">What's the plan for Today</h1>

            <div className="todo__container">
                <center>
                    <input type="text" placeholder='Enter Your Thought...' className='todo__input' value={todos} onChange={(e) => setTodos(e.target.value)} />
                    <button className='todo__btn' onClick={addTodo}>Add Todo</button>
                    {data != [] && data.map((dataList, index) => {
                        return (
                            <div key={index}>
                                <div className="todo__todos">
                                    <p className='todo__dataList'>{dataList}</p>
                                    <GiCancel className='todo__remove' onClick={() => removeActivity(index)} />
                                </div>
                            </div>

                        )
                    })}
                </center>
            </div>

        </div>
    )
}

export default Todos