import { useContext } from "react";
import { userContext } from "./useContext";
const Component3 = () => {
    const {name,setName,changeName} = useContext(userContext)
  return (
    <>
       <div className="text-3xl text-white font-bold"> my name is{name}
       </div>
       <button onClick={changeName}>change name</button>
    </>
  );
};
export default Component3;
