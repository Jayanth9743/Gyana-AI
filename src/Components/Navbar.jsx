import { IoMenu } from "react-icons/io5";
import { Context } from "./Context/Context";
import { useContext } from "react";

const Navbar = () => {
    const {openToggler,mode} = useContext(Context)
  return (
    <div className={`fixed top-0  flex justify-end items-center w-full h-10 bg-orange-600 text-2xl font-medium text-white z-50 ${!mode ? "bg-primaryl" : "bg-primaryd"}`} >
        <IoMenu className={`absolute top-0 left-0 text-3xl ml- my-1 ${!mode ? "text-fntl" : "text-fntd"} cursor-pointer lg:hidden`} onClick={openToggler}/>
      <div className={`mr-10 font-bold ${!mode ? "text-fntl" : "text-fntd"}`}>
        GYANA
      </div>
    </div>
  )
}

export default Navbar
