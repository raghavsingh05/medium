import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";


export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading || !blog) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}