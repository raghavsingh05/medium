
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
        <div className=" flex my-4"  >
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} />
            </div>
            <div className=" font-normal text-slate-900 mr-2"> 
                {authorName}
            </div>
            <div className="flex justify-center flex-col pr-2">
                <Circle />
            </div>
            <div className="font-extralight text-slate-500">
                {publishedDate}
            </div> 
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

function Circle (){
    return <div className=" h-1 w-1 rounded-full bg-slate-400">

    </div>
}

function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-200 rounded-full mx-2">
        <span className="font-normal  text-gray-600">{name[0]}</span>
    </div>
}