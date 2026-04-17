import { Component, type ReactNode } from "react";
import { CardImage, CardLabel, CardWrapper } from "./styles";

class Card extends Component<{label: string, picture: string, title: string}>{
    constructor(props : {label: string, picture: string, title: string}){
        super(props)
        this.setIsFavorite = this.setIsFavorite.bind(this)
        this.state = {
            isFavorite : false,
        }
    }
    setIsFavorite = (value : boolean) =>{
        this.setState({isFavorite : !value})
    }
    render(): ReactNode {
        const {label, picture, title} = this.props
        const star = this.state.isFavorite ? '🤩' : ''
        return (
            <CardWrapper onClick={()=>{
                this.setIsFavorite(this.state.isFavorite)
            }}>
                <CardLabel>{star}{label}{star}</CardLabel>
                <CardImage src={picture} alt="freelance"/>
                <span>{star}{title}{star}</span>
            </CardWrapper>
        )
    }
}
export default Card