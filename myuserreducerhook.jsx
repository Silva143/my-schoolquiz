import { useReducer } from "react"
import { useTech } from "./usejsdoc";
function MyUseReducerhook() {
    const [set1,set2]=useTech("HP",500);
    console.log(set1);
    console.log(set2);
    // create a reducerhook to check normal if temp is<37, not normal above 37
    //a person's health status
    const initialstate="Very Sick";

    const calculatehealthstatus = (state,action) => {
        console.log(action);
        // return action
        if(action >39){
            return"You are almost Dead!"
        }
    }

    const [healthstatus, settemperature] = useReducer(calculatehealthstatus, initialstate);
    const tr = () => {
        settemperature(42)
    }
    return (<>
        <p>Health Status:{healthstatus}.</p>
        <input />
        <button onClick={tr}>Click Here to update</button>
        <p>{set1} and {set2}</p></>)
}
export default MyUseReducerhook