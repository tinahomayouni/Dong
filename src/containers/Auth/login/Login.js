import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../../components/UIKIT';
import { login } from '../../../redux/login/action';
import '../auth.scss';
import Card from '../../../components/UIKIT/card/card';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const onsubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // async function doLoginRequest(e) {
  //   try {
  //     const data = await axios({
  //       url: "https://reqres.in/api/login",
  //       method: "post",
  //       data: { email, password },
  //     });
  //     dispatch(loginSuccess(data.data));
  //     window.localStorage.setItem("login token", data.data.token);
  //     setTimeout(function () {
  //       history.push("/dashboard");
  //     }, 3000);
  //   } catch (e) {
  //     dispatch(loginFailed(e.response.data.error));
  //   }
  // }

  return (
    <Card>
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
    </Card>
  );
}
