import TopComponent from "../Components/TopComponent"
import Footer from "../Components/Footer"

const FamilyPlanning = ()=>{
    return(
        <div>
            <TopComponent/>
            <div className="ml-7 mb-4 text-2xl font-semibold">
                <span>Family </span>
                <span className="text-purple">Planning</span>
            </div>
            <div className="ml-7 mr-6">
            <form className="flex flex-col">
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
                        <option value="Breast Cancer">Breast Cancer</option>
                    </select>

                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Children Interval</p>
                    <input type="text" placeholder="Every 2 years" className="w-full border-b border-lightpurple"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Sex partners</p>
                    <input type="number" placeholder="1" className="w-full border-b border-lightpurple"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">STD protection</p>
                    <input type="number" placeholder="2" className="w-full border-b border-lightpurple"></input>
                </div>
                <div className="mt-4">
                    <p className="text-xl mb-2">Accurate Use</p>
                    <input type="number" placeholder="1" className="w-full border-b border-lightpurple"></input>
                </div>
                <input type="submit" value="Enter" className="w-24 h-8 bg-purple rounded-full mt-6 place-self-center"/>
                 

        </form>
            </div>
            <Footer/>
        </div>
    )

}
export default FamilyPlanning