import { Quote } from "../components/Quots"
import { Auth } from "./Auth"


export const Signin = () => {
    return <div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">
            <div>
                <Auth type="signin" />
            </div>
            <div className=" hidden lg:block">
                <Quote />
            </div>
        </div>

    </div>
}