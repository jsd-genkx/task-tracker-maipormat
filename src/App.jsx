import React, { useState } from 'react';

function TaskTracker() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const handleAddTask = () => {
    if (taskInput) {
      const newTask = { id: taskId, text: taskInput };

      setTaskList([...taskList, newTask]);

      setTaskInput('');
      setTaskId(taskId + 1);
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;
