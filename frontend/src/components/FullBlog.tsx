import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogsCards"


export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center ">
            <div className=" grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                <div className="col-span-8 mr-10 md:mr-14">
                    <div className="text-4xl font-bold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd May 2024
                    </div>
                    <div className="">
                        {blog.content}
                    </div>
                </div>
                <div className=" col-span-4">
                    <div className=" text-slate-600 text-lg" >
                        Author
                    </div>
                    <div className="flex w-full"> 
                        <div className="flex flex-col justify-center pr-4">
                            <Avatar name={blog.author.name} size="big" />
                        </div> <div>

                        <div className=" text-xl font-bold">
                            {blog.author.name}
                        </div>
                        <div className=" pt-2 text-slate-500">
                            Random catch phrase about the author's ability to grab user's attention
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}