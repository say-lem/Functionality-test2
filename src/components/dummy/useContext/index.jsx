import { createContext, useState } from "react";
export const userContext = createContext({})

const UseContextParent =({children})=>{
 const [name,setName] = useState('mary')
 const changeName=()=>{
    setName('Ebere')
 }
 return <userContext.Provider value={{name,setName,changeName}}>{children}</userContext.Provider>
}
export default UseContextParent