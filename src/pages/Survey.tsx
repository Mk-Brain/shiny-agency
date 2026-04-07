import { Link, Outlet } from "react-router-dom"

function Survey() {
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Utilisation des Outlets pour afficher differents formulaire</h2>
            <Link to="Client">Questionnaire Client</Link><br />
            <Link to="Freelance">Questionnaire Freelance</Link>
            <Outlet/>
        </div>
    )
}

export default Survey