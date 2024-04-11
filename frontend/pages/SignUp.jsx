import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import {Button} from "../components/Button"
import {BottomWarning } from "../components/BottomWarning"

export const SignUp = () => {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-full p-4 text-center">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox label={"First Name"} placeholder={"Amulya"} />
            <InputBox label={"Last Name"} placeholder={"Reddy"} />
            <InputBox label={"Email"} placeholder={"amulyar45@gmail.com"} />
            <InputBox label={"Password"} placeholder={"123qwe"} />
            <div className="pt-4">
                <Button label={"Sign Up"} />
            </div>
            <BottomWarning className=""
              label={"Already have an Account?"}
              buttonText={"Sign In"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
