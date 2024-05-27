import { useState } from "react";
import { Button } from "../components/Button";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter , setFilter] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter).then((response) => {
      setUsers(response.data.user);
    });
  }, [filter]);

  return (
    <div className="mt-6 ml-[250px]">
      <div className="text-xl font-bold">Users</div>
      <div className="mt-4">
        <input
          type="text"
          onChange={e => {setFilter(e.target.value)}}
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
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-10/12">
      <div className="flex mt-4">
        <div className="rounded-full bg-slate-200 h-12 w-12">
          <div className="flex justify-center font-semibold text-xl mt-2">
            {user.firstName[0]}
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg mx-4 my-2">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={(e) => {navigate("/send?id=" + user._id + "&name=" + user.firstName)}}
        label={"Send Money"} />
      </div>
    </div>
  );
};
