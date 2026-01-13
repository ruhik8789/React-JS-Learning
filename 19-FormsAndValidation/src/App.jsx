import React, {useReducer} from "react";

const App = () => {
  // Controlled Input

  // const [email, setEmail] = React.useState("");
  // console.log(email);
  // return (
  //   <>
  //     <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
  //   </>
  // )

  // Form with Multiple Inputs

  // const [form, setForm] = React.useState({
  //   email: "",
  //   password: "",
  // });
  // return (
  //   <>
  //     <input
  //       type="email"
  //       value={form.email}
  //       onChange={(e) => setForm({ ...form, email: e.target.value })}
  //       placeholder="Email"
  //     />
  //     <br />
  //     <input
  //       type="password"
  //       value={form.password}
  //       onChange={(e) => setForm({ ...form, password: e.target.value })}
  //       placeholder="Password"
  //     />
  //   </>
  // );

  // Submit Handling

  // const [form, setForm] = React.useState({
  //   email: "",
  //   password: ""
  // });
  // const submit = e => {
  //   e.preventDefault();
  //   console.log(form);
  // }
  // return (
  //   <form onSubmit={submit}>
  //     <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email"/>
  //     <br />
  //     <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Password"/>
  //     <button>Submit</button>
  //   </form>
  // )

  // Basic Validation

  // const [email, setEmail] = React.useState("");
  // const [error, setError] = React.useState("");
  // const submit = (e) => {
  //   e.preventDefault();
  //   if (!email.includes("@")) {
  //     setError("Invalid Email Format");
  //   } else {
  //     setError("");
  //     alert("Valid");
  //   }
  // };
  // return (
  //   <form onSubmit={submit} noValidate>
  //     <input
  //       type="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <br />
  //     {error && <span style={{ color: "red" }}>{error}</span>}
  //     <br />
  //     <button>Submit</button>
  //   </form>
  // );

  // useReducer Form

  const initial = { email: "", password: "" };

  

};

export default App;
