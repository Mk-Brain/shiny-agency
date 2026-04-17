import { useContext } from "react"
import { SurveyContext } from "../../utils/contex/context"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/Atoms"
import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/styles/colors"
import { useTheme } from "../../utils/hooks"
import EmptyList from "../../components/EmptyList"

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)<{isFullLink : boolean}>`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.isFullLink &&
        `color: white; border-radius: 30px; 
        background-color:${colors.primary};`}
`

function formQueryParams(answers : object){
    const answersNumbers = Object.keys(answers)

    return answersNumbers.reduce((acc: string, answersNumber: string, index)=>{
        const isFirstAnswer = index === 0
        const separator = isFirstAnswer ? '' : "&"
        return `${acc}${separator}a${answersNumber}=${answers[answersNumber as keyof typeof answers]}`
    },"")
}


const Results = ()=>{
    const {theme} = useTheme()
    const {answers }  = useContext(SurveyContext)
    console.log(answers);
    const queryParams = formQueryParams(answers)
    const {data, loading, error} = useFetch(`http://localhost:8000/results/?${queryParams}`)

    console.log("---------data-------",data);
    if(error){
        return <span>Il y a un problème</span>
    }

    const {resultsData} = data
    
    return loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      {
        resultsData?.length !== 0 ? 
        <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {result.title}
              {index === resultsData.length - 1 ? '' : ','}
            </JobTitle>
          ))}
      </ResultsTitle> :
      <EmptyList theme={theme}/>
      }
      
      <StyledLink isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results