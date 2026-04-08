import styled from "styled-components"
import colors from "../../utils/styles/colors"
import errorImage from "../../assets/dark-logo.png"
const ErrorComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background-color: ${colors.backgroundLight};
  margin: 0 auto;
  padding: 60px;
`
const ErrorImage = styled.img`
  width: 400px;
  height: 500px;
`

const ErrorPage = ()=>{
    return(
        <ErrorComponent>
            <h1>Oups 🙈 Cette page n'existe pas</h1>
            <ErrorImage src={errorImage} alt="erreur 404"/>
            <h1>Il semblerait qu'il y ait un problème</h1>
        </ErrorComponent>
    )
}

export default ErrorPage