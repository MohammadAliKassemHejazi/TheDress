import React, { useState, useContext } from "react";
import axios from "axios";
import NotificationContext from "../../store/notification-context";

function Signup() {
  const notificatinoCtx = useContext(NotificationContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:4000/auth/signup",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json", // You can add other headers as needed
          },
        }
      );

      if (response.status === 201) {
        console.log(response, "signed up successully");
      } else {
        notificatinoCtx.showNotification({
          title: "error",
          message: "error in register",
          status: "error",
        });
      }
    } catch (error) {
      notificatinoCtx.showNotification({
        title: "error",
        message: "error in register",
        status: "error",
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChangeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChangeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChangeHandler}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={onChangeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
