import photoProfil from '../../assets/profile.png'

type Cardproperties = {
    label: string
    title: string
    picture?: string
}

const Card = ({label = '', title = '', picture = photoProfil} : Cardproperties)=>{
    return(
        <div
        style={
            {
                display: 'flex',
                flexDirection: 'column',
                padding: 15
            }
        }>
            <span>{title}</span>
            <img src={picture} alt="freelance" width={80} height={80}/>
            <span>{label}</span>
        </div>
    )
}

export default Card