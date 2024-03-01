/*import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";

function App() {
  const [todos, setTodos] = useState([]); // Array to store todos
  const [newTodo, setNewTodo] = useState({ name: "", description: "" }); // State for new todo
  const [currentStatus, setCurrentStatus] = useState("not completed"); // Selected status
  const [editingTodo, setEditingTodo] = useState(null); // Track currently edited todo

  const handleInputChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleAddTodo = () => {
    if (!newTodo.name || !newTodo.description) {
      alert("Please enter a name and description for the todo.");
      return;
    }

    setTodos([
      ...todos,
      { ...newTodo, status: "not completed", id: Date.now() },
    ]); // Set default status as 'not completed'
    setNewTodo({ name: "", description: "" }); // Clear new todo input
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setNewTodo({ ...todo }); // Set values for editing
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodo.id ? { ...editingTodo } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null); // Clear edited todo state
    setNewTodo({ name: "", description: "" }); // Clear new todo input
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleChangeStatus = (event) => {
    setCurrentStatus(event.target.value);
  };

  const filteredTodos =
    currentStatus === "both"
      ? todos
      : todos.filter((todo) => todo.status === currentStatus);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="new-todo">
        <input
          type="text"
          name="name"
          placeholder="Task name"
          value={newTodo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleInputChange}
        />
        <button
          className="add"
          onClick={editingTodo ? handleUpdateTodo : handleAddTodo}
        >
          {editingTodo ? "Update" : "Add Todo"}
        </button>
      </div>
      <div className="filter">
        <span className="mytodo">My Todo</span>
        <span className="select">
          Status Filter :
          <select value={currentStatus} onChange={handleChangeStatus}>
            <option value="both">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </span>
      </div>
      <div className="row">
        <div className="col-lg-4" id="col">
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                {editingTodo?.id === todo.id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={newTodo.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="description"
                      value={newTodo.description}
                      onChange={handleInputChange}
                    />
                  </>
                ) : (
                  <>
                    <Card style={{ width: "18rem" }}>
                      <Card.Body id="col1">
                        <Card.Title>Name : {todo.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Description : {todo.description}
                        </Card.Subtitle>
                        Status :
                        <select
                          value={todo.status}
                          onChange={(e) =>
                            setTodos((prevTodos) =>
                              prevTodos.map((t) =>
                                t.id === todo.id
                                  ? { ...t, status: e.target.value }
                                  : t
                              )
                            )
                          }
                        >
                          <option value="completed">Completed</option>
                          <option value="not completed">Not Completed</option>
                        </select>
                        <div className="buttons">
                          <button
                            id="btn1"
                            btn1onClick={() => handleEditTodo(todo)}
                          >
                            Edit
                          </button>
                          <button
                            id="btn2"
                            onClick={() => handleDeleteTodo(todo.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
*/
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]); // Array to store todos
  const [newTodo, setNewTodo] = useState({ name: '', description: '' }); // State for new todo
  const [currentStatus, setCurrentStatus] = useState('not completed');
  const [editingTodo, setEditingTodo] = useState(null); // Track currently edited todo

  const handleInputChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleAddTodo = () => {
    if (!newTodo.name || !newTodo.description) {
      alert('Please enter a name and description for the todo.');
      return;
    }

    setTodos([...todos, { ...newTodo, status: 'not completed', id: Date.now() }]); // Set default status as 'not completed'
    setNewTodo({ name: '', description: '' }); // Clear new todo input
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setNewTodo({ ...todo }); // Set values for editing
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodo.id ? { ...editingTodo } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null); // Clear edited todo state
    setNewTodo({ name: '', description: '' }); // Clear new todo input
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleChangeStatus = (event) => {
    setCurrentStatus(event.target.value);
  };

  const filteredTodos =
    currentStatus === 'both'
      ? todos
      : todos.filter((todo) => todo.status === currentStatus);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="new-todo">
        <input
          type="text"
          name="name"
          placeholder="Task name"
          value={newTodo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleInputChange}
        />
        <button onClick={editingTodo ? handleUpdateTodo : handleAddTodo}>
          {editingTodo ? 'Update' : 'Add Todo'}
        </button>
      </div>
      <div className="filter">
      <span className="mytodo">My Todos</span>
      <span className="select">
          Status Filter :
          <select value={currentStatus} onChange={handleChangeStatus}>
            <option value="both">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </span>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li className='list' key={todo.id}>
            {editingTodo?.id === todo.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={newTodo.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="description"
                  value={newTodo.description}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <h3>Name : {todo.name}</h3>
                <p>Descripton : {todo.description}</p>
                Status :
                <select value={todo.status} onChange={(e) => setTodos((prevTodos) => prevTodos.map((t) => (t.id === todo.id ? { ...t, status: e.target.value } : t)))}>
                  <option value="completed">Completed</option>
                  <option value="not completed">Not Completed</option>
                </select>
              </>
            )}
            <div className="buttons">
              <button   id='btn1' onClick={() => handleEditTodo(todo)}>Edit</button>
              <button  id='btn2' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
