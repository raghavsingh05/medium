import { Link } from "react-router-dom"


export const Appbar = () => {
    return <div className=" border-b flex justify-between px-10 py-3">
        <Link to={'/'}>
            <div className=" text-xl flex justify-center flex-col mt-3 cursor-pointer ">
                Medium
            </div>
        </Link>
        <div className="flex"><Link to={`/publish`}>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8 cursor-pointer" >Add New</button>
        </Link>

        <AvatarComp />
        </div>
    </div>
}
function AvatarComp(){
    return <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
}