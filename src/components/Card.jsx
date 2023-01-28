import React, { Component } from 'react'
// import cardBack from '../assets/cardBack.png';

const cardBack = '';

export default class Card extends Component {

    constructor(props){
        super(props);

    }

  render() {
    const {letter, isHidden} = this.props.cardInfo;
    const imgUrl = `#`;
    //Destructure out the letter and the isHidden property
    return (
      <div className="cardContainer" onClick={(e) => this.props.cardHandler(e, this.props.letter)}>
        {/* className={this.props.cardClass} */}
        {!isHidden && <img src={imgUrl} alt={letter} />}
        {isHidden && <img src={cardBack} />}
      </div>
    )
  }
}
