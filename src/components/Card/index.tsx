import photoProfil from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'



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

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: auto;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 200px;
    transition: 200ms;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    };
    
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