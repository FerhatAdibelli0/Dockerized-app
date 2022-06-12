import React, { useState,Fragment } from "react";
import AppUser from "./components/Users/AddUser";
import AddListItem from "./components/Users/AddListItem";

function App() {
  const [usersList, setUsersList] = useState([]);

  const enteredDataHandler = (item) => {
    setUsersList((previous) => {
      return [...previous, item];
    });
  };
  
  return (
    <Fragment>
      <AppUser onAddUser={enteredDataHandler} />
      <AddListItem items={usersList} />
    </Fragment>
  );
}

export default App;
