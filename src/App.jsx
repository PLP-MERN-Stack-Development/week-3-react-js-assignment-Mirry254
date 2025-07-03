import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input])
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add
          </button>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App