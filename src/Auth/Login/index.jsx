/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyAPI } from '../../middleware/API';
import { MainDiv, Button, Label } from './style';
import './global.css';
function Login() {
  const [loginMethod, setLoginMethod] = useState();
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const LoginAuth = () => {
    MyAPI.post('/auth/sign-in', data).then((response) => {
      if (response.status === 200) {
        localStorage.setItem('LoginData', JSON.stringify(response));
        navigate('/Home');
      }
    });
  };
  console.log('!!!!', data);

  return (
    <MainDiv>
      <Grid
        container
        spacing={2}
        className="muiGrid-container"
        style={{ width: 368, marginLeft: 115 }}
      >
        <Grid item lg={4} style={{ marginBottom: 50 }}>
          <img src="/images/logo.svg" alt="" />
        </Grid>
        <Grid item lg={4}>
          <Label>Books</Label>
        </Grid>
        <Grid item lg={12} xs={12}>
          <TextField
            variant="filled"
            id="email"
            name="email"
            label="Email"
            color="primary"
            value={data.email}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.32)',
              borderRadius: 4,
              width: '100%',
              // eslint-disable-next-line no-restricted-globals
              backdropFilter: blur(4),
            }}
            InputLabelProps={{
              style: { color: '#ffffff' },
            }}
            InputProps={{ disableUnderline: true, style: { color: 'white' } }}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <TextField
            variant="filled"
            id="password"
            name="password"
            label="Senha"
            value={data.password}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.32)',
              borderRadius: 4,
              width: '100%',
              // eslint-disable-next-line no-restricted-globals
              backdropFilter: blur(4),
            }}
            InputLabelProps={{
              style: { color: '#ffffff' },
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: <Button onClick={LoginAuth}>Entrar</Button>,
              style: { color: 'white' },
              type: 'password',
            }}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </MainDiv>
  );
}

export default Login;
