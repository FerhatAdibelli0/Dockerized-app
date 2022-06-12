import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classy from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AppUser = (props) => {
  const [error, setError] = useState();

  const nameInputValue = useRef();
  const ageInputValue = useRef();

  const AddSubmitHandler = (event) => {
    event.preventDefault();
    let enteredNameRef = nameInputValue.current.value;
    let enteredAgeRef = ageInputValue.current.value;

    if (
      enteredNameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      setError({
        title: "Name incorrect",
        message: "Plese check your name input and correct it",
      });
      return;
    }
    if (+enteredAgeRef < 1) {
      setError({
        title: "Age incorrect",
        message: "Plese check your age and correct it",
      });
      return;
    }

    const enteredData = {
      name: enteredNameRef,
      age: enteredAgeRef,
      id: Math.random().toString(),
    };
    props.onAddUser(enteredData);

    nameInputValue.current.value = "";
    ageInputValue.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classy.input}>
        <form onSubmit={AddSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputValue} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputValue} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AppUser;
