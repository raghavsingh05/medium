import { Quote } from "../components/Quots"
import { Auth } from "./Auth"


export const Signup = () => {
    return <div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">
            <div>
                <Auth type="signup" />
            </div>
            <div className=" hidden lg:block">
                <Quote />
            </div>
        </div>

    </div>
}