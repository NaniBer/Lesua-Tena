import TopComponent from "../Components/TopComponent"
import Footer from "../Components/Footer"
import { useState } from "react"

const FamilyPlanning = ()=>{
    const [result, setResult]= useState('planning');
    const handleClick= ()=>{
        console.log()
       
    }
    return(
        <div>
            <TopComponent/>
            <div className="ml-7 mb-4 text-2xl font-semibold">
                <span>Family </span>
                <span className="text-purple">Planning</span>
            </div>
            <div className="ml-7">
                <p className="text-xl">Your contraception guide</p>
                <p className="mt-2">1. Reversible Methods of Birth Control</p>
                <p>Intrauterine Contraception</p>
                <p className="mt-2">Levonorgestrel intrauterine system (LNG IUD)—The LNG IUD is a small T-shaped device like the Copper T IUD. It is placed inside the uterus by a doctor. It releases a small amount of progestin each day to keep you from getting pregnant. The LNG IUD stays in your uterus for up to 3 to 8 years, depending on the device. Typical use failure rate: 0.1-0.4%.1

                    <p>Copper T intrauterine device (IUD)—This IUD is a small device that is shaped in the form of a “T.” Your doctor places it inside the uterus to prevent pregnancy. It can stay in your uterus for up to 10 years. Typical use failure rate: 0.8%.1 </p>
                    
                    
                    
                    </p>

            </div>
            
            <div className="ml-7 mr-6 border-2 ">
                <p className="text-xl mt-3 mb-3 text-purple ">Personalized choice </p>
            <form className="flex flex-col ml-3" action={handleClick}>
                <div >
                    <p className="text-xl mb-2">Name</p>
                    <input type="text" placeholder="Betty" className=" w-full border-b border-lightpurple text-xl"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Age</p>
                    <input type="number" placeholder="Betty" className="w-full border-b border-lightpurple"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Health Condition</p>
                    <select className="w-full border-b border-lightpurple">
                        <option value="1">Yes I have health Condition</option>
                        <option value="2">No, I don't have health conditions</option>
                    </select>

                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Children Interval</p>
                    <select className="w-full border-b border-lightpurple">
                        <option value="yes">Yes </option>
                        <option value="none">No</option>
                        <option value="i dont want child">I don't want child</option>
                        
                    </select>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Sex partners</p>
                    <option value="1">1</option>
                    <option value="2">More than 1</option>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">STD protection</p>
                    <input type="number" placeholder="2" className="w-full border-b border-lightpurple"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Accurate Use</p>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </div>
                <input type="submit" value="Enter" className="w-24 h-8 bg-purple rounded-full mt-6 place-self-center" />
                 

        </form>
            </div>
            <Footer/>
        </div>
    )

}
export default FamilyPlanning