import { useState } from 'react'
import './App.css'
import UseReducerHook from './UseReducerHook';
import UseMemoAndUseCallback from './UseMemoAndUseCallback';
import UseEffect from './UseEffect';
import UseRef from './UseRef';

const list = ['user1', 'user2'];

function App() {
  const [users, setUsers] = useState(list);
  const [name, setName] = useState('');

  const handleAddUser = () => {
    setUsers([...users, name]);
    setName('');

  }

  return (
    <>
    <UseRef/>
    <UseEffect/>
    <UseMemoAndUseCallback/>
    <UseReducerHook/>
    <hr/>
      <h1>Vite + React</h1>
      <ul className="card">
        {
          users.map( user =>(
              <li key={user}>{user}</li>
          ) )
        }
      </ul>
      <input type="text" value={name} style={{ padding: '10px' }} onChange={ e => setName(e.target.value)}/>
      <button onClick={handleAddUser}>Add User</button>
    </>
  )
}

export default App
