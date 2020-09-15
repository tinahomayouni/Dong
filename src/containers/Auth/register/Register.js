import React, { useState } from 'react';
import Header from '../../Header/Header';
import { useDispatch } from 'react-redux';
import { Input, Button } from '../../../components/UIKIT';
import { register } from '../../../redux/register/action';
import '../auth.scss';

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const onsubmit = e => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };
  // async function doRegisterRequest(e) {
  //   try {
  //     const data = await axios({
  //       url: "https://reqres.in/api/register",
  //       method: "post",
  //       data: { email, password },
  //     });
  //     dispatch(registerSuccess(data.data));
  //     window.localStorage.setItem("register token", data.data.token);
  //     setTimeout(function () {
  //       history.push("/dashboard");
  //     }, 3000);
  //   } catch {
  //     dispatch(registerFailed(e.response.data.error));
  //   }
  // }
  return (
    <>
      <form onSubmit={onsubmit}>
        <Input value={email} label='email' onChange={setEmail}></Input>
        <Input
          value={password}
          label='password'
          type='password'
          onChange={setPassword}
        ></Input>
        <Button>Submit</Button>
      </form>
    </>
  );
}
