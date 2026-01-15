import React from "react";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, users: action.payload };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const App = () => {
  // const [users, setUsers] = React.useState([]);
  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data => setUsers(data));
  //   // console.log(users);
  // }, [])
  // return (
  //   <>
  //     {users.map(user => {
  //       return <p key={user.id}>{user.name}</p>
  //     })}
  //   </>
  // )

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, []);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  if (state.error) {
    return <p style={{ color: "red" }}>{state.error}</p>;
  }

  return (
    <>
      {state.users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  )
};

export default App;
