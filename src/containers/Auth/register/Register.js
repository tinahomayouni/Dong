import React, { useState } from 'react';
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
