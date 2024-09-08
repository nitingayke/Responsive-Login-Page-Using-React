import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignupForm() {
    return (
        <form action="">
            <TextField 
                className='w-full'
                label="Username"
                id="outlined-size-small"
                size="small"
            />
            <br /><br />
            <TextField 
                className='w-full'
                id="outlined-email-input"
                label="Email"
                type="gmail"
                size="small"
            />
            <br /><br />
            <TextField 
                className='w-full'
                id="outlined-password-input"
                label="Create Password"
                type="password"
                autoComplete="current-password"
                size="small"
            />
            <br /><br />
            <Button type='button' variant="contained" style={{backgroundColor: "orangered"}}>
                Sign Up
            </Button>
        </form>
    )
}