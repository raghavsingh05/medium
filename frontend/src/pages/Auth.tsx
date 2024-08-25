import { SignupInput } from "@raghavsingh05/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";
import  axios  from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
    async function sendRequests(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup"? "signup": "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");

        } catch(err){

        }
    }
    return <div className=" h-screen flex justify-center flex-col">
        <div className=" text-center">
            <div className=" flex justify-center">
                <div className="max-w-lg">
                    <div className="max-w-lg  text-4xl font-bold">
                        Create an account
                    </div>
                    <div className="max-w-lg  text-xl font-normal">
                       {type === "signin"? "Don't have an account?": "Already have an account?"}  <Link className="pt-2 underline " to={type === "signin"? "/signup": "/signin" }> {type === "signin"? "Signup":"Signin"}</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="min-w-96">
                {type === "signup"? <LableInput label="Username" placeholder="Raghav" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} />: null }
                <LableInput label="Email" placeholder="Raghav@gmail.xom" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }} />
                
                <LableInput label="Password" type="password" placeholder="12345" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequests} type="submit" className="text-white min-w-96 mt-5 bg-slate-900 hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">{type === "signup" ? "Sign Up" : " Sign In"}</button>
                </div>
            </div>
        </div>
    </div>

}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LableInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="text-left mt-4 block mb-2 text-sm font-semibold text-gray-900 dark:text-black">{label}</label>
        <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}