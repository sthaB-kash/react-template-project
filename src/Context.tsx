import { createContext, useContext } from "react";

interface User {
  name: string;
  address: string;
}

const UserContext = createContext<User[]>([]);

const ThemeContext = createContext("dark");

const UseContext = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      Theme:<strong> {theme}</strong>
      <hr />
    </div>
  );
};

const UserList = () => {
  const users = useContext(UserContext);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
const Context = () => {
  return (
    <ThemeContext.Provider value="dark">
      <h1>Context</h1>
      <UseContext />
      <UserContext.Provider
        value={[
          { name: "user1", address: "address1" },

          { name: "user2", address: "address2" },
        ]}
      >
        <UserList />
      </UserContext.Provider>
      <hr />
    </ThemeContext.Provider>
  );
};

export default Context;
