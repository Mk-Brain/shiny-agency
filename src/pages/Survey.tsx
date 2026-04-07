import { useParams } from "react-router-dom"


function Survey() {
    const {questionnumber} = useParams()
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionnumber}</h2>
        </div>
    )
}

export default Survey