import React, { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import { Task } from './components/ListItem';


export const App = () => {
  const userEmail: string = "gusm@itu.dk";
  const [tasks, setTasks] = useState<Task[]>([]); // Initialize tasks as null

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
     getData()
    }, []);

  console.log(tasks);

  //Sort tasks
  const sortedTasks: Task[] = tasks.sort((a: Task, b: Task) => new Date(a.date).getTime() - new Date(b.date).getTime());

  
  return (
    <div className={"app"}>
      <ListHeader name={' 🏝️ Holiday tick list'}/>
      {sortedTasks?.map((task) => 
      <ListItem key={task.id} date={task.date} title={task.title} />)}
    </div>
  );
}

export default App;
