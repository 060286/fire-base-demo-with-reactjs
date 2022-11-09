import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';

function App() {
  const [tasks, setTasks] = useState([]);
  const taskCollectionRef = collection(db, "tasks");

  const [newName, setName] = useState('');
  const [newStatus, setStatus] = useState('');


  // Create a Task
  const createTask = async () => {
    await addDoc(taskCollectionRef, {Name: newName, Status: newStatus});


  }


  // Get list of tasks.
  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(taskCollectionRef);
      
      setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getTasks();
  }, [])

  return (
    <div className="App">
      {console.log(tasks)}
      <input placeholder='Name...' onChange={(event) => {setName(event.target.value)}}/>
      <input placeholder='Status...' onChange={(event) => {setStatus(event.target.value)}}/>

      <button onClick={createTask}>Create Task</button>


      {tasks.map((task,index) => {
        return (
          <div key={index}>
            <h1 key={task.id}>Task Name : {task.name}</h1>
            {task.status === "Completed" ? <h2 style={{color: 'green'}}>Status : {task.status}</h2> : <h2 style={{color:'red'}}>Status : {task.status}</h2>}
          </div>
        )
      })}
    </div>
  );
}

export default App;
