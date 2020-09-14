import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Input } from '../../components/UIKIT'
import Button from '../../components/UIKIT/Button/Button';
import Header from '../../containers/Header'
import { register, registerFailed, registerSuccess } from '../../redux/register/action';
import axios from 'axios';
import '../auth.scss';

export default function Register() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const onsubmit = (e) =>{
        e.preventDefault()
        dispatch(register({email , password}))
        doRegisterRequest();
    }
    async function doRegisterRequest(e){
        
        try{
            const data = await axios({
                url: 'https://reqres.in/api/register',
                method: 'post',
                data: { email, password }
            })
            dispatch(registerSuccess(data.data));
            window.localStorage.setItem('register token' , data.data.token)
            setTimeout(function(){history.push('/dashboard')},3000)
    
        }catch{
            dispatch(registerFailed(e.response.data.error));
        }
    }
    return (
        <>
            <Header/>
            <form onSubmit={onsubmit}>
                <Input value={email} label="email" onChange={setEmail}></Input>
                <Input value={password} label="password" type="password" onChange={setPassword}></Input>
                <Button>Submit</Button>
            </form>
        </>
    )
}
