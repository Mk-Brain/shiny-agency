import colors from '../../utils/styles/colors'
import styled from 'styled-components'
import imgIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background-color: ${colors.backgroundLight};
  margin: 0 auto;
  padding: 60px;
`

const HomeContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const HomeContainerRight = styled.img`
  width: 400px;
  height: 500px;
`

const TestButton = styled.button`
  width: 200px;
  height: 40px;
  color: white;
  background-color: ${colors.primary};
  border: 0px;
  border-radius: 30px;
  font-size: 24px;

`

const HomeText = styled.p`
  font-size: 42px;
  font-weight: bold;
  width: 400px;
`


/*const Ballon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #e20202;
  transform: scale(${
    ({size}) => size
  });
`*/

function App() {


  return (
    <>
      <HomeContainer>
          <HomeContainerLeft>
            <HomeText>
              Repérez vos besoins, on s'occupe du reste avec les meilleurs talents
            </HomeText>
            <TestButton>Faire le test</TestButton>
          </HomeContainerLeft>
          <HomeContainerRight src={imgIllustration}></HomeContainerRight>
      </HomeContainer>
    </>
  )
}

export default App
