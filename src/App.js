import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Todo List</h1>
          <TodoForm />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
