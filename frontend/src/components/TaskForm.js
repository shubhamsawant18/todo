import { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await axios.post('http://localhost:5000/api/tasks', { title });
    setTitle('');
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;