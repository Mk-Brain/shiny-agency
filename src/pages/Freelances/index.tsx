import styled from 'styled-components'
import Card from '../../components/Card'
import { Loader } from '../../utils/Atoms'
import { useFetch } from '../../utils/hooks'


const GlobalContainer = styled.div`
    justify-items: center;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
`

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    width: 80%;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
`


const Freelance = ()=>{
    
    

    const {data, loading, error} = useFetch('http://localhost:8000/freelances')
    console.log(data)
    const {freelancersList} = data
    return(
        <GlobalContainer>
            <h2>Trouvez vos prestataire</h2>
                <p style={{
                    color: 'grey',
                    marginTop: '40px',
                    marginBottom: '40px',
                }}>Chez Shiny agency, nous réunissons les meilleurs profils</p>
            <CardsContainer>
            {
                loading ? <Loader/> : 
                error ? <h2>Oups 🤦‍♂️😒! Probleme de connexion à l'API; actualisez la page</h2> :
                freelancersList.map((freelance)=>(
                    <Card key={`${freelance.id}-${freelance.name}`}
                    title={freelance.name}
                    label={freelance.job}
                    picture={freelance.picture}/>
                ))
            }
            </CardsContainer>
        </GlobalContainer>
    )
}

export default Freelance