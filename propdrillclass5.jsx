import { useContext} from "react"
import { Comp1 } from "./propdrillclass1";

function ProjectExpenseTracker() {
    const copy = useContext(Comp1);

    return (<><h4>Project Expense Office Reached Finally.</h4>
        <p>Available Current Funds: Ugx.{copy}</p></>)
}
export default ProjectExpenseTracker