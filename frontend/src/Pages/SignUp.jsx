import TopComponent from "../Components/TopComponent"
import Footer from "../Components/Footer"
import { useNavigate } from "react-router";

const SignUp = ()=>{
    const navigate= useNavigate();
    
    const handleLogin=()=>{
        navigate('/login')

    }
    return(
        <div>
            <TopComponent/>
            <div className="ml-7 mb-4 text-2xl font-semibold">
                
                <span className="text-purple">Sign </span>
                <span>Up </span>
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
                
                <div className="mt-4">
                    <p className="text-xl mb-2">Confirm password</p>
                    <input type="password" placeholder="Confirm Password" className="w-full border-b border-lightpurple"></input>
                </div>
               
                <input type="submit" value="Enter" className="w-24 h-8 bg-purple rounded-full mt-10 place-self-center"/>
                <div className="place-self-center mt-4">
                    <span> Already have an account?</span>
                    <span className="text-purple cursor-pointer" onClick={handleLogin}> Log in</span>
                </div>

                 

        </form>
            </div>
            <Footer/>
        </div>
    )

}
export default SignUp