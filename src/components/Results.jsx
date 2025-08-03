import { calculateInvestmentResults } from "../util/investment"

export default function Results({ results }) {
    // console.log(results);
    const claculatedResults =calculateInvestmentResults(results);
    console.log(claculatedResults);
    return <p>Results...</p>

}