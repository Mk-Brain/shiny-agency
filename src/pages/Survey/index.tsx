import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/styles/colors"
import { Loader } from "../../utils/Atoms"

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

type question = {
  surveyData : object
}

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = !questionNumber ? 1: parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    
    const [surveyData, setSurveyData] = useState<question>({ surveyData: {}})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState<boolean | null>(null)
/*
    useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/survey`)
    .then((response) => response.json())
    .then((surveyData) => {
    setSurveyData(surveyData)
    setDataLoading(false)
    })
}, [])*/
  useEffect(()=>{
    async function fetchSurvey() {
      setDataLoading(true)
      try{
        const response = await fetch(`http://localhost:8000/survey`)
        const {surveyData} = await response.json()
        setSurveyData(surveyData)
    }catch(err){
      console.log(err)
      setError(true)
    }finally{
      setDataLoading(false)
    }
    }
    fetchSurvey()
  }, [])    


    return (
        <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? <Loader/> : error ? <QuestionContent>Oups 🤦‍♂️😒! Probleme de connexion à l'API; actualisez la page</QuestionContent> : <QuestionContent>{surveyData[questionNumber]}</QuestionContent>}
      <LinkWrapper>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {questionNumberInt === 10 ? (
          <Link to="/Results">Résultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        )}
      </LinkWrapper>
      
    </SurveyContainer>
    )
}

export default Survey