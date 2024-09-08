import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginForm() {
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
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
            />
            <a className='text-blue-500 flex justify-end' href="">Forget Password</a>
            <br /><br />
            <Button type='button' variant="contained" style={{backgroundColor: "orangered"}}>
                Login
            </Button>
        </form>
    )
}