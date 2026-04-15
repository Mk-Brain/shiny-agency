import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/styles/colors"
import { Loader } from "../../utils/Atoms"
import { SurveyContext } from "../../utils/contex/context"
import { useFetch } from "../../utils/hooks"

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
const ReplyBox = styled.button<{isSelected : boolean}>`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
    const { questionNumber } = useParams<{ questionNumber: string }>()
    
    const questionNumberInt = !questionNumber ? 1: parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    
   // const [surveyData, setSurveyData] = useState<question>({ surveyData: {}})
    //const [isDataLoading, setDataLoading] = useState(false)
    const { answers, saveAnswers } = useContext(SurveyContext)


  function saveReply(answer: boolean) {
    
    saveAnswers({ [questionNumberInt]: answer })
  }

  const { data, loading, error } = useFetch(`http://localhost:8000/survey`)

  const  {surveyData}  = data  


//console.log({ questionNumber: answers })
    return (
        <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {loading ? <Loader/> : error ? 
      <QuestionContent>Oups 🤦‍♂️😒! Probleme de connexion à l'API; actualisez la page</QuestionContent> : 
      <QuestionContent>{surveyData && surveyData[questionNumber]}</QuestionContent>}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
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