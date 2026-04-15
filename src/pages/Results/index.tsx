import { useContext } from "react"
import { SurveyContext } from "../../utils/contex/context"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/Atoms"

function formQueryParams(answers : object){
    const answersNumbers = Object.keys(answers)

    return answersNumbers.reduce((acc: string, answersNumber: string, index)=>{
        const isFirstAnswer = index === 0
        const separator = isFirstAnswer ? '' : "&"
        return `${acc}${separator}a${answersNumber}=${answers[answersNumber as keyof typeof answers]}`
    },"")
}

const Results = ()=>{
    const {answers} = useContext(SurveyContext)
    //console.log(answers);
    const queryParams = formQueryParams(answers)
    const {data, loading, error} = useFetch(`http://localhost:8000/results/?${queryParams}`)

    console.log("---------data-------",data);
    if(error){
        return <span>Il y a un problème</span>
    }

    const {resultsData} = data
    
    return(
        <div>
            <h1>Resultats</h1>
            {
                loading ? <Loader/>:
                    <ul>        
                            {resultsData?.map((item, index) => {
                                return <li key={index}>{item.title} {item.description}</li>
                            } )}
                    </ul>
            }
        </div>
    )
}

export default Results