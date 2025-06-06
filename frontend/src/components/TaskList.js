import axios from 'axios';

const TaskList = ({ tasks, refreshTasks }) => {
  const toggleComplete = async (task) => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { completed: !task.completed });
    refreshTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    refreshTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
          <button onClick={() => toggleComplete(task)}>Toggle</button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;