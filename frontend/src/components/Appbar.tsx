import { Avatar } from "./BlogsCards"


export const Appbar = () =>{
    return <div className=" border-b flex justify-between px-10 py-3">

        <div className=" flex justify-center flex-col">
            Medium
        </div>
        <div>
            <Avatar  name="Ragahv" size="big"/>
        </div>
    </div>
}