import { IoSend } from "react-icons/io5";
import { Context } from './Context/Context';
import { useContext } from "react";

const Search = () => {

  const {input, onSent, setInput, mode} = useContext(Context)

  return (
    <div className={`flex flex-col justify-center items-center fixed w-full bottom-0  z-10 ${!mode ? " bg-secondryl" : "bg-secondryd"}`}>

      <div className="flex justify-center items-center w-full h-full">
        <input type="text" placeholder="message gyana" className={`m-2 outline-none pl-2 py-2 rounded-lg w-4/6 md:w-2/5 ${!mode ? "bg-primaryl" : "bg-primaryd"} ${!mode ? "text-fntl" : "text-fntd"}`} onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							/>
        <div className={`rounded-lg ${!mode ? "bg-primaryl" : "bg-primaryd"} `}>
          <IoSend className={`text-2xl m-2 ${!mode ? "text-fntl" : "text-fntd"}`} onClick={() => {
									onSent();
								}}/>
        </div>
      </div>

      <p className={`text-sm ${!mode ? "text-fntl" : "text-fntd"}`}>gyana can make mistakes, check important info.</p>

    </div>
  )
}

export default Search
