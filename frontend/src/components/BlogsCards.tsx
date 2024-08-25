
interface BlogCardsProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}



export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate }: BlogCardsProps
) => {
    return <div>
        <div className=" my-3 font-medium">
            <Avatar name={authorName} />{authorName} . {publishedDate}
        </div>
        <div>
            {title}
        </div>
        <div>
            {`${content.slice(0, 100)} ...`}
        </div>
        <div>
            {`${Math.ceil(content.length / 100)} minutes`}
        </div>
        <div className="bg-slate-300 h-px w-full">

        </div>
    </div>

}

function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-200 rounded-full mx-2">
        <span className="font-normal  text-gray-600">{name[0]}</span>
    </div>
}