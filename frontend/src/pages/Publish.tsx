import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

   return <div>
    <Appbar />
    <div className=" flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" className="-w-full bg-white border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder=" Title" />
            <TextEditor onChange={(e)=>{
                setDescription(e.target.value)
            }} />
            <button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)

        }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm rounded-lg font-medium text-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200"> Publish post</button>
        </div>
    </div>
   </div>
}

function TextEditor ({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=> void}){
    return <div className="mt-2">
    <div className="w-full mb-4">
        <div className=" flex items-center justify-between border rounded-md ">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <label className=" sr-only"> Publish Post</label>
                <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write a blog..." required />
            </div>
        </div>
        
    </div>
</div>
}