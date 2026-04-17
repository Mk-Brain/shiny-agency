import photoProfil from '../../assets/profile.png'
import styled from 'styled-components'
import { CardImage, CardWrapper } from './styles'



type Cardproperties = {
    label: string
    title: string
    picture?: string
}

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    text-align: start;
`



const Card = ({label = '', title = '', picture = photoProfil} : Cardproperties)=>{
    return(
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <span>{title}</span>
        </CardWrapper>
    )
}

export default Card