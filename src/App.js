import './App.css';
import axios from 'axios';
import {useEffect} from 'react'
import { useState } from 'react';
import User from "./components/User";

function App() {
  const [users,setUsers] = useState()
    useEffect(() => {
      const fetchData = async () => {
        let api = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(api.data);
      }
      fetchData()
    }, [])
    
  return (
    <div className="App">
      <User Users={users}/>
    </div>
  );
}

export default App;
