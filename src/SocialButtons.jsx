import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginSocialButtons(){
    return (
        <div className='mt-5 mb-2'>
            <p className='text-gray-500'>Create New Account Via</p>
            <button className='mx-3 text-orange-600'><GoogleIcon/></button>
            <button className='mx-3 text-orange-600'><LinkedInIcon/></button>
            <button className='mx-3 text-orange-600'><GitHubIcon/></button>
        </div>
    )
}