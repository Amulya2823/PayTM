
import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import {Button} from "../components/Button"
import {BottomWarning } from "../components/BottomWarning"

export const SignIn = () => {
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-full p-4 text-center">
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} placeholder={"amulyar45@gmail.com"} />
            <InputBox label={"Password"} placeholder={"123qwe"} />
            <div className="pt-4">
                <Button label={"Sign In"} />
            </div>
            <BottomWarning className=""
              label={"Don't have an Account?"}
              buttonText={"Sign Up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
}

