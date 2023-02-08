import React, { Component } from 'react'
import cardBack from '../assets/cardBack.webp';
import "./CardStyle.css";

export default class Card extends Component {

    constructor(props){
        super(props);

    }

  render() {
    const {letter, isHidden, isCurrent} = this.props.cardInfo;
    const {outerIndex, innerIndex} = this.props;
    const imgUrl = `#`;
    console.log(letter, isHidden);

    let card = <></>;
    if (isHidden){
      card = <img src={cardBack}/>;
    }else {
      if (isCurrent){
        card = <img src={cardBack} className="currentCard"/>;
      }else{
        card = <img src={cardBack} className="flipped"/>;
      }
    }

    //Destructure out the letter and the isHidden property
    return (
      <div className="cardContainer" onClick={(e) => this.props.cardHandler(outerIndex, innerIndex)}>
        {card}
      </div>
    )
  }
}
