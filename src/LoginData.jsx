import LoginForm from "./LoginForm";
import SocialButtons from "./SocialButtons";
import LoginHeadline from "./LoginHeadline"

export default function LoginData() {
    return (
        <div className='p-3 text-center w-80'>
            <LoginHeadline text={"Login"} />
            <LoginForm/>
            <SocialButtons/>
        </div>
    )
}