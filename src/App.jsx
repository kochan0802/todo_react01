import {useState} from 'react';
import { InputForm } from './InputForm';
import { Title } from './Title'
import { TodoList } from './TodoList';


function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;