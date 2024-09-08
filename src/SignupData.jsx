import SocialButtons from "./SocialButtons";
import LoginHeadline from "./LoginHeadline"
import SignupForm from "./SignupForm";

export default function SignupData() {
    return (
        <div className='p-3 text-center w-80 transition duration-800 ease-in-out'>
            <LoginHeadline text={"Sign Up"} />
            <SignupForm/>
            <SocialButtons/>
        </div>
    )
}