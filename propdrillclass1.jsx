import { createContext, useState } from "react"
import RegionalOffice from "./propdrillclass2";
export const Comp1 = createContext();

function CompanyBudget() {
    const [companybudget, setCompanybudget] = useState(5000);
    
    return <>
        <Comp1.Provider value="Brandon Agaba">
            <h3>Our Tracked Budget</h3>
            <p>Our Current Budget is: {companybudget}</p>
            <RegionalOffice />
        </Comp1.Provider></>
}
export default CompanyBudget