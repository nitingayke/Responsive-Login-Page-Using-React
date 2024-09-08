import { useState } from "react"
import DataBox from "./DataBox"
import LoginData from "./LoginData"
import SignupData from "./SignUpData"
export default function Login(){
    let [status, setStatus] = useState(true);
    let SetSubmitForm = () => {
        setStatus(!status);
    }
    return (
        <div className="shadow-xl md:flex my-20"> 
            {status && <LoginData/>}
            <DataBox textStatus={status ? "Sign Up" : "Login" } SetSubmitForm={SetSubmitForm}/>
            {!status && <SignupData/>}
        </div>
    )
}