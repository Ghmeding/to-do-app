import React, { useEffect } from 'react';
import ListHeader from './components/ListHeader';


export const App = () => {

  const getData = async () => {
    const userEmail: string = "gusm@itu.dk";
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => getData, [] )
  
  return (
    <div className={"app"}>
      <ListHeader name={' 🏝️ Holiday tick list'}/>
    </div>
  );
}

export default App;
