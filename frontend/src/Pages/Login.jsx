import TopComponent from "../Components/TopComponent"
import Footer from "../Components/Footer"
import { useNavigate } from "react-router"



const Login = ()=>{
    const navigate= useNavigate();
    
    
    
    
    const handleSignUp=()=>{
        navigate('/')

    }
    return(
        <div>
            <TopComponent/>
            <div className="ml-7 mb-4 text-2xl font-semibold">
                
                <span className="text-purple">Log </span>
                <span>In </span>
            </div>
            <div className="ml-7 mr-6">
            <form className="flex flex-col">
                <div >
                    <p className="text-xl mb-2">Name</p>
                    <input type="text" placeholder="Betty" className=" w-full border-b border-lightpurple text-xl"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Password</p>
                    <input type="password" placeholder="Password" className="w-full border-b border-lightpurple"></input>
                </div>
                <input type="submit" value="Enter" className="w-24 h-8 bg-purple rounded-full mt-10 place-self-center"/>
                <div className="place-self-center mt-4">
                    <span> Don't have an account?</span>
                    <span className="text-purple cursor-pointer" onClick={handleSignUp}> Sign up</span>
                </div>

                 

        </form>
            </div>
            <Footer/>
        </div>
    )

}
export default Login