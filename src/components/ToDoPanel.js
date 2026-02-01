import React, { useState, useEffect } from "react";

export default function TodoPanel() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("itsyou-tasks")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("itsyou-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <section className="panel todo-panel">
      <h2>To-Do & Notes</h2>
      <div className="todo-input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          placeholder="Ajouter une tâche..."
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul id="taskList">
        {tasks.map((task, i) => (
          <li key={i} className={task.done ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(i)}
            />
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(i)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
