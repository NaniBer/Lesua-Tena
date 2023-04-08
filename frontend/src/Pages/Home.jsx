import TopComponent from "../Components/TopComponent";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";
const Home=()=>{
    const navigate= useNavigate();
    const handleFamilyPlanning=()=>{
        navigate('/planning');

    }
    return (
        <div> 
            <TopComponent/>
            <div className="mx-6 ">
            <div >
                <p className="text-5xl">Hello Betty,</p>
                <p className="mt-2">Have a nice Journey</p>
            </div>
            <div className="border-2 border-black mt-6">
                <p className="m-2 ml-3">To get telemedicine services from professionals</p>
                <div className="flex mt-2">
                    <p className="ml-3 mb-3 text-purple ">Check now</p>
                    <img src={require('../Assests/Arrow.png')} className="w-18 h-6"/>
                </div>

            </div>

            <div className="mt-10">
                <p className="text-2xl font-semibold">Resources on</p>
                <div className="grid grid-cols-2 gap-6 place-items-center mt-6">
                    <div className="bg-lightpurple h-24 w-40 rounded-lg text-center flex items-center place-content-center cursor-pointer" onClick={handleFamilyPlanning}><p >Family Planning</p></div>
                    <div className="bg-lightpurple h-24 w-40 rounded-lg text-center flex items-center place-content-center cursor-pointer"><p>Menustration</p> </div>
                    <div className="bg-lightpurple h-24 w-40 rounded-lg text-center flex items-center place-content-center cursor-pointer"><p> Pre and post natal Care</p> </div>
                    <div className="bg-lightpurple h-24 w-40 rounded-lg text-center flex items-center place-content-center cursor-pointer"><p>Breast Cancer</p> </div>
                </div>
            </div>


            </div>
            <Footer/>
            
            
            
        </div>
    )

}
export default Home;