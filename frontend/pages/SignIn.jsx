import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";

export const SignIn = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div>
      <div className="bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-[1000px] p-4 text-center">
            <Heading label={"Sign In"} />
            <SubHeading
              label={"Enter your credentials to access your Account"}
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
                label={"Sign In"}
                onClick={async function () {
                  try {
                    const response = await axios({
                      method: "POST",
                      data: {
                        username: email,
                        password: password,
                      },

                      url: "http://localhost:3000/api/v1/user/signin",
                    });
                    const token = response.data.token;
                    localStorage.setItem("token", "Bearer " + token);
                    navigate("/dashboard");
                  } catch {
                    alert("invalid input");
                    console.log(12);
                  }
                }}
              />
            </div>
            <BottomWarning
              className=""
              label={"Don't have an Account?"}
              buttonText={"Sign Up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
