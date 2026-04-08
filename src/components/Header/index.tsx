import { Form, Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import darkLogo from "../../assets/dark-logo.png" 

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; 
        background-color:${colors.primary};`}
`

const Header = ()=>{
    return(
        <NavContainer>
            <Link to={'/'}>
                <HomeLogo src={darkLogo} alt="logo"/>
            </Link>
            <div>
                <StyledLink to={'/'}>Acceuil</StyledLink>
                <StyledLink to={'/Freelances'}>Profil</StyledLink>
                <StyledLink to={'/Survey/1'} $isFullLink> Faire le test</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header