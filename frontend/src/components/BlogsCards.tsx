import { Link } from "react-router-dom"

interface BlogCardsProps {
    id:string
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate }: BlogCardsProps
) => {
    return  <Link to={`/blog/${id}`}>
    <div className="  p-4 w-screen max-w-screen-md cursor-pointer">
        <div className=" flex "  >
            <Avatar name={authorName} size="small"/>
            <div className=" font-normal text-slate-900 mr-2 text-sm flex justify-center flex-col"> 
                {authorName}
            </div>
            <div className="flex justify-center flex-col pr-2 ">
                <Circle />
            </div>
            <div className="font-extralight text-slate-500 text-sm flex justify-center flex-col" >
                {publishedDate}
            </div> 
        </div>
        <div className=" text-xl font-semibold pt-2 capitalize">
            {title}
        </div>
        <div className=" text-md font-thin">
            {`${content.slice(0, 100)} ...`}
        </div>
        <div className=" text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
        <div className="bg-slate-200 h-px w-full mt-8">

        </div>
    </div>
    </Link>

}

export function Circle (){
    return <div className=" h-1 w-1 rounded-full bg-slate-400">

    </div>
}

 export function Avatar({ name, size = "small"}: { name: string, size: "small" | "big" }) {
    return <div className= {`relative inline-flex items-center justify-center ${size === "small"? "h-6 w-6":"h-10 w-10" } bg-gray-400 rounded-full mr-2`}>
        <span className={`${size === "small"? "text-xs":"text-xl"} font-normal text-xs  text-gray-300`}>{name[0]}</span>
    </div>
}