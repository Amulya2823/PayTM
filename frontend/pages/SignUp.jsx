import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const navigate = useNavigate()
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div>
      <div className="bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-[1000px] p-4 text-center">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              label={"First Name"}
              placeholder={"John"}
            />
            <InputBox
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder={"Doe"}
            />
            <InputBox
              onChange={(e) => {
                setusername(e.target.value);
              }}
              label={"Email"}
              placeholder={"johndoe45@gmail.com"}
            />
            <InputBox
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              label={"Password"}
              placeholder={"123qwe"}
            />
            <div className="pt-4">
              <Button
                onClick={async() => {
                  const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    firstName,
                    lastName,
                    username,
                    password,
                  });
                  localStorage.setItem("token",response.data.token)
                  navigate("/dashboard")
                }}
                label={"Sign Up"}
              />
            </div>
            <BottomWarning
              className=""
              label={"Already have an Account?"}
              buttonText={"Sign In"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
