import React from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const controller = new AbortController();
    console.log(controller);
    const signal = controller.signal;

    axios
      .get("https://jsonplaceholder.typicode.com/users", { signal })
      .then((res) => setUsers(res.data));

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export default App;
