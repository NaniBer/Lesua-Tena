const homeClicked= ()=>{

}
const Footer=()=>{
    return(
        <div className="fixed bottom-0 w-full mb-4 pr-10">
            <div className="flex justify-between">
                <img src={require("../Assests/HomeActive.png")} alt=""  onClick={homeClicked}/>
                <img src={require("../Assests/ChatDeactive.png")} alt="" />
                <img src={require("../Assests/SearchDeactive.png")} alt="" />
            </div>
        </div>
    )

}
export default Footer;