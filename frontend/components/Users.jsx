import { useState } from "react";
import { Button } from "../components/Button";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Amulya",
      lastName: "Reddy",
      _id: 1,
    },
    {
        firstName: "Amulya",
        lastName: "Reddy",
        _id: 1,
      },
      {
        firstName: "Amulya",
        lastName: "Reddy",
        _id: 1,
      }
  ]);

  return (
    <div className="mt-6 ml-[250px]">
      <div className="text-xl font-bold">Users</div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search Users"
          className="w-10/12 h-11 px-2 border border-slate-400 rounded-lg text-lg"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div className="flex justify-between w-10/12">
      <div className="flex mt-4">
        <div className="rounded-full bg-slate-200 h-12 w-12">
          <div className="flex justify-center font-semibold text-xl mt-2">{user.firstName[0]}</div>
        </div>
        <div>
          <div className="font-semibold text-lg mx-4 my-2">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
};
