import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <nav>
            <Link to={'/'}>Acceuil</Link>
            <Link to={'/Survey/42'}>Questionnaire</Link>
            <Link to={'/Freelance'}>Prestataires Freelance</Link>
        </nav>
    )
}

export default Header