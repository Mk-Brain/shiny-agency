import styled from 'styled-components'
import Profile from '../../assets/profile.png'
import Card from '../../components/Card'

const freelanceProfiles = [
    {
        name: 'John Doe',
        jobTitle: 'Devops',
        picture: Profile
    },
    {
        name: 'Jane Doe',
        jobTitle: 'admin  System',
        picture: Profile
    },
    {
        name: 'D.Doe',
        jobTitle: 'developpeur Frontend',
        picture: Profile
    },
]

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
                freelanceProfiles.map((freelance, index)=>(
                    <Card key={`${index}-${freelance.name}`}
                    title={freelance.name}
                    label={freelance.jobTitle}
                    picture={freelance.picture}/>
                ))
            }
            </CardsContainer>
        </GlobalContainer>
    )
}

export default Freelance