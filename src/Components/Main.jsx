import { IoIosCreate } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { useContext, useEffect } from 'react';
import { FaRobot } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Context } from './Context/Context';

const Main = () => {
  const {
    showResults,
    recentPrompt,
    loading,
    resultData,
    setInput,
    mode
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    return () => {
      setInput(promptText);
    };
  };

  useEffect(()=>{
    document.body.className = `${!mode ? "bg-secondryl" : "bg-secondryd"}`
  },[mode])

  return (
    <div className={`flex flex-col justify-start items-start w-full gap-3 sm:w-9/12 sm:mx-auto lg:w-8/12 ${!mode ? " bg-secondryl" : "bg-secondryd"}`}>
      {!showResults ? (
        <>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 mt-24 text-4xl font-medium ml-2 lg:ml-20">Hello,</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 text-4xl font-medium ml-2 lg:ml-20">How can I help you today?</p>

          <div className="flex w-full h-full gap-1 overflow-x-auto hide-scrollbar mt-16 lg:gap-5 lg:ml-20">
            <div className={`flex flex-col justify-start items-start w-44 h-36 ml-2 flex-shrink-0 rounded-md gap-5 ${!mode ? "bg-primaryl" : "bg-primaryd"}`} onClick={handleCardClick("help me write an essay")}>
              <IoIosCreate className={`mx-auto mt-5 text-4xl ${!mode ? "text-fntl" : "text-fntd"}`} />
              <p className={`text-center mx-auto ${!mode ? "text-fntl" : "text-fntd"}`}>Help me write an essay</p>
            </div>
            <div className={`flex flex-col justify-start items-start w-44 h-36 ml-2 flex-shrink-0 rounded-md gap-5 ${!mode ? "bg-primaryl" : "bg-primaryd"}`} onClick={handleCardClick("suggest a good place in Bengaluru")}>
              <FaMapMarkedAlt className={`mx-auto mt-5 text-4xl ${!mode ? "text-fntl" : "text-fntd"}`} />
              <p className={`text-center mx-auto ${!mode ? "text-fntl" : "text-fntd"}`}>Suggest a good place in Bengaluru</p>
            </div>
            <div className={`flex flex-col justify-start items-start w-44 h-36 ml-2 flex-shrink-0 rounded-md gap-5 ${!mode ? "bg-primaryl" : "bg-primaryd"}`} onClick={handleCardClick("Create a Script for the YouTube about coding")}>
              <MdOutlineDescription className={`mx-auto mt-5 text-4xl ${!mode ? "text-fntl" : "text-fntd"}`} />
              <p className={`text-center mx-auto ${!mode ? "text-fntl" : "text-fntd"}`}>Create a script for YouTube about coding</p>
            </div>
            <div className={`flex flex-col justify-start items-start w-44 h-36 ml-2 flex-shrink-0 rounded-md gap-5 ${!mode ? "bg-primaryl" : "bg-primaryd"}`} onClick={handleCardClick("How to create a gyroscope using a disc?")}>
              <FaRegLightbulb className={`mx-auto mt-5 text-4xl ${!mode ? "text-fntl" : "text-fntd"}`} />
              <p className={`text-center mx-auto ${!mode ? "text-fntl" : "text-fntd"}`}>How to create a gyroscope using a disc?</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex justify-end w-full h-full m-14">
            <div className={`w-5/6 h-full rounded-md sm:w-3/5 lg:w-2/6 ${!mode ? "bg-primaryl" : "bg-primaryd"} `}>
              <p className={`m-1 ${!mode ? "text-fntl" : "text-fntd"} `}>{recentPrompt}</p>
            </div>
            <div>
              <FaRegUserCircle className={`text-xl m-2 ${!mode ? "text-fntl" : "text-fntd"}`} />
            </div>
          </div>

          <div className="flex w-full h-full">
            {loading ? (
              <>
                <div>
                  <FaRobot className={`text-xl m-1 ${!mode ? "text-fntl" : "text-fntd"}`} />
                </div>
                <div className={`h-2 w-2 m-1 ${!mode ? "bg-fntl" : "bg-fntd"} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
                <div className={`h-2 w-2 m-1 ${!mode ? "bg-fntl" : "bg-fntd"} rounded-full animate-bounce [animation-delay:-0.17s]`}></div>
                <div className={`h-2 w-2 m-1 ${!mode ? "bg-fntl" : "bg-fntd"} rounded-full animate-bounce`}></div>
              </>
            ) : (
              <>
                <div>
                  <FaRobot className={`text-xl m-1 ${!mode ? "text-fntl" : "text-fntd"}`} />
                </div>
                <div className={`w-5/6 h-full ${!mode ? "bg-primaryl" : "bg-primaryd"} rounded-md mb-20 sm:w-3/5`}>
                  <p className={`m-1 ${!mode ? "text-fntl" : "text-fntd"} `} dangerouslySetInnerHTML={{ __html: resultData }}></p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
