import { BlogCard } from "../components/BlogsCards"

export const Blogs = () => {
    return <div>
    <BlogCard 
        authorName ={"Raghav"}
        title= {"Title of the blog should be avilable in here"}
        content={"This will be the content of the blog which is getting rendered on the all blogs page which is why it is here"}
        publishedDate = {"2nd Feb 2024"}
    />
    </div>
}