import React, { useState } from "react";

const BasicForm = () => {
    const initialValues = '';
  const [email, setEmail] = useState(initialValues);
  const [password, setPassword] = useState(initialValues);

  const [allentry, setAllentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    // if(!newEntry.email === '' && !newEntry.email === '' ) {
    setAllentry([newEntry]);
    console.log(allentry);
    // }
  };

  const resetInputField = () => {
    setPassword("");
    setEmail("");
  };

  return (
    <>
   
      <form action="" onSubmit={submitForm} className="innerForm">
      <div className="header">
        <h1> Welcome to login screen</h1>
    </div>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-input"
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit" onClick={submitForm} className="btn-submit">Submit</button>
        <button onClick={resetInputField} className="btn-reset">Reset</button>
      </form>


      <div className="result">
        {allentry.map((currentElement) => {
          return (
            <div className="show">
              <p>Email id is : <b>{currentElement.email}</b> Password is : <b>{currentElement.password}</b></p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BasicForm;
