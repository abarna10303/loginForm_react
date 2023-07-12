import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignIn() {
  const[email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if(password==='admin')
    {
      alert('Welcome  '+ email);
      setEmail('');
      setPassword('');
    }
    else
    {
      alert('Password Is Not Correct');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Box sx={{backgroundColor:'#2b6af6',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'white',
            padding:'50px',
            borderRadius:'25px',
            width:'100%',
          }}
        >
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,textTransform:'capitalize'}}
              style={{fontSize:'18px',backgroundColor:'rgba(59,66,251,255)'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{textDecoration:'none',float:'right'}}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
}