import { useContext } from "react"
import { SurveyContext } from "../../utils/contex/context"

const Results = ()=>{
    const {answers} = useContext(SurveyContext)
    console.log(answers);
    
    return(
        <div>
            <h1>Resultats</h1>
        </div>
    )
}

export default Results