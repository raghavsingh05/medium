import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogsCards"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div >
            loading...
        </div>
    }
    return <div>
        <Appbar />

        <div className=" flex justify-center ">
            <div className=" max-w-xl ">
                <BlogCard
                    authorName={"Raghav"}
                    title={"How an Ugly Single-Page website makes $5,000 a Month with affiliate Marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online. — Making money online is the dream for man."}
                    publishedDate={"2nd Feb 2024"}
                />
            </div>
        </div>
    </div>
}
