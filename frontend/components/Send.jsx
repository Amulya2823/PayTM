import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

export const Send = () => {
  
  const [amount , setAmount] = useState(0)
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const name = searchParams.get("name")

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center ">
        <div className="border text-card-foreground p-8 space-y-8 w-[1000px] bg-white shadow-lg rounded-lg">
          <div className="font-bold text-center text-3xl">Send Money</div>
          <div className="flex">
            <div className="flex w-12 h-12 bg-green-400 rounded-full mt-6">
              <div className="ml-4 mt-2 font-bold text-lg">{name[0].toUpperCase()}</div>
            </div>
            <div className="text-2xl font-bold ml-4 mt-8">{name}</div>
          </div>
          <div
          className="text-xl font-semibold ">Amount (in Rs)</div>
          <div>
            <input onChange={e => {
            setAmount(e.target.value);
          }}
            type="text" placeholder="Enter Amount" className="h-11 w-full px-2 border border-slate-400 rounded-lg text-lg"></input>
          </div>
          <div>
          <button onClick={() => {
            axios.post("http://localhost:3000/api/v1/account/transfer" ,{
              to :id,
              amount 
            },{
              headers : {
                Authorization : "Bearer " + localStorage.getItem("token")
              }
            })
          }}
          type="button" className=" font-semibold text-lg w-full text-white bg-green-500 hover:bg-grren-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-4 mb-2">Initiate Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
};
