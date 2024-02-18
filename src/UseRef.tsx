import {useState, useRef, useEffect} from 'react'

const UseRef = () => {
    
    const idRef = useRef(1);
    const inputRef = useRef(null);
    
    const [users, setUsers] = useState([{
        id: idRef.current++, name: 'Bikash Shrestha'
    }]);

    const addUser = () => {
        console.log(idRef.current);
        setUsers([...users, {
            id: idRef.current++, name: inputRef.current.value
        }]);
    }

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);
  return (
    <div>
        <h1>UseRef</h1>
        <div>
            {users.map(user => (<p>{user.id}. {user.name}</p>))}
        </div>
        <input type="text" ref={inputRef}/>
        <button onClick={addUser}>Add User</button>
        <hr/>
    </div>
  )
}

export default UseRef