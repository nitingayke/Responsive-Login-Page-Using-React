import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

export default function DataBox({textStatus, SetSubmitForm}){
    return (
        <div className=" w-80 bg text-center content-center py-16" style={{backgroundColor: "orangered"}}>
            <h1 className="font-bold text-3xl text-white">Welcome to <br/><span className="text-4xl">{<PersonIcon style={{fontSize: "2.7rem", margin: "-10px 0 0 0"}}/>}JobHelper</span></h1>
            <p className="text-gray-300">Our platform helps you land a job at your dream company.</p>
            <p className="text-gray-100 mt-10">Provide your information to access your account</p>
            <Button onClick={SetSubmitForm} type='button' variant="contained" style={{backgroundColor: "white", color: "gray"}}>
                {textStatus}
            </Button>
        </div>
    )
}