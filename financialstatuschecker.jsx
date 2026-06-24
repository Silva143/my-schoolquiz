import { useReducer } from "react";

function FinancialStatusChecker() {
    const initialStat = {
        salary: 0,
        financialStatus: 'No Income',
    };
    const [salary, financialStatus] = useReducer(FinancialStatusChecker, initialStat);
    const getFinancialStatus = (state,salary) => {
        if (salary === 0) return 'No Income';
        if (salary <= 300000) return 'Struggling';
        if (salary <= 800000) return 'Middle Class';
        return 'Wealthy';
    }

    return (<><h2>Financial Status Tracker</h2>
        <button onClick={() => financialStatus(500000)}>Reset!</button>
        <h3>Current Portfolio</h3>
        <p>Salary: {salary}</p>
        <p>Financial Status:{getFinancialStatus}</p>
    </>)
}
export default FinancialStatusChecker