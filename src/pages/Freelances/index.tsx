import styled from 'styled-components'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/Atoms'


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
type freelance = {
    id: string,
    name: string,
    job: string,
    picture: string
}

const Freelance = ()=>{
    const [freelanceData, setFreelanceData] = useState<freelance[]>([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState<boolean | null>(null)

    useEffect(()=>{
        async function fetchFreelance() {
        setDataLoading(true)
        try {
            const response = await fetch('http://localhost:8000/freelances')
            const {freelancersList} = await response.json()
            setFreelanceData(freelancersList)
        } catch (err) {
            console.log(err)
            setError(true)
        }finally{
            setDataLoading(false)
        }
        }
        fetchFreelance()
    }, [])
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
                isDataLoading ? <Loader/> : 
                error ? <h2>Oups 🤦‍♂️😒! Probleme de connexion à l'API; actualisez la page</h2> :
                freelanceData.map((freelance)=>(
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