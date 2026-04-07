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

const Freelance = ()=>{
    return(
        <div>
            <h1>Freelance 😊😊😊😊😊</h1>
            {
                freelanceProfiles.map((freelance, index)=>(
                    <Card key={`${index}-${freelance.name}`}
                    title={freelance.name}
                    label={freelance.jobTitle}
                    picture={freelance.picture}/>
                ))
            }
        </div>
    )
}

export default Freelance