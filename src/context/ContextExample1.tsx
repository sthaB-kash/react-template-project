import {useContext} from 'react';
import {UserContext, users} from './ContextData';

const Users = () => {
    const users = useContext(UserContext);
    return(
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}
const ContextExample1 = () => {
  return (
    <UserContext.Provider value={users}>
        <h1>Context Example 1</h1>
        <Users/>
    </UserContext.Provider>
  )
}

export default ContextExample1