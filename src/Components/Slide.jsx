import AddBoxIcon from '@mui/icons-material/AddBox';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IoSettingsOutline } from "react-icons/io5";
// import HelpIcon from '@mui/icons-material/Help';
import { GoQuestion } from "react-icons/go";
import { useContext } from 'react';
import { Context } from './Context/Context';
import { Switch } from '@mui/material';
// import { IoMenu } from "react-icons/io5";



const Slide = () => {
 
const {open,onSent, prevPrompts, setRecentPrompt, newChat, mode, Themehandle} = useContext(Context)

const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
};

  return (
    <div className={`fixed top-0 h-full transition-transform duration-1000 flex w-40  justify-between flex-col ${open ? "-translate-x-0" : "-translate-x-full"} z-30 ${!mode ? "bg-primaryl" : "bg-primaryd"} lg:translate-x-0`}>
    
        <div className='flex flex-col flex-shrink-0 w-full h-20 gap-2 mt-10'>

            <div className={`flex  items-center gap-2 w-11/12 ${!mode ? "bg-secondryl" : "bg-fntbgd"} mt-4 mx-auto rounded cursor-pointer`}  onClick={()=>{
                        newChat()
                    }}>
                <AddBoxIcon className={`ml-1 ${!mode ? "text-fntl" : "text-fntd"} cursor-pointer`}/>
                <div className={`ml-1 ${!mode ? "text-fntl" : "text-fntd"}`}>
                    new chat
                </div>
            </div>

            <p className={`ml-3 font-bold  ${!mode ? "text-fntl" : "text-fntd"}`}>Recent</p>

        </div>

        <div className='flex flex-col flex-grow w-full h-20 gap-1 overflow-y-auto '>

            {prevPrompts.map((item) => {
                return(
                    <div className={`flex  items-center gap-2 w-11/12 ${!mode ? "bg-secondryl" : "bg-fntbgd"}  mx-auto rounded cursor-pointer`} onClick={()=>{loadPreviousPrompt(item)}} >
                        <ChatBubbleIcon className={`ml-1 ${!mode ? "text-fntl" : "text-fntd"}`}/>
                        <div className={` ${!mode ? "text-fntl" : "text-fntd"}`}>
                            {item.slice(0, 10)}...
                        </div>
                    </div>

                );
            })}

        </div>

        <div className='flex flex-col flex-shrink-0 w-full gap-2 h-1/5 '>

            <div className='flex items-center w-11/12 gap-2 mx-auto mt-1 rounded'>
                <GoQuestion className={`ml-1 text-xl ${!mode ? "text-fntl" : "text-fntd"} cursor-pointer`}/>
                <div className={`ml-1 ${!mode ? "text-fntl" : "text-fntd"}`}>
                  help
                </div>
            </div>
            <div className='flex items-center w-11/12 gap-2 mx-auto mt-1 rounded'>
                <IoSettingsOutline className={`ml-1 text-xl ${!mode ? "text-fntl" : "text-fntd"} cursor-pointer`}/>
                <div className={`ml-1 ${!mode ? "text-fntl" : "text-fntd"}`}>
                  settings
                </div>
            </div>
          
            <div className='flex items-center w-11/12 mx-auto'>
                <Switch className='' onClick={Themehandle}/>
                <div className={`ml-1 ${!mode ? "text-fntl" : "text-fntd"}`}>dark mode</div>
            </div>
            



        </div>

        

        

    </div>

  )
}

export default Slide
