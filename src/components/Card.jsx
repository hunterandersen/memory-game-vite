import React, { Component } from 'react'
import cardBack from '../assets/cardBack.webp';


export default class Card extends Component {

    constructor(props){
        super(props);

    }

  render() {
    const {letter, isHidden} = this.props.cardInfo;
    const {outerIndex, innerIndex} = this.props;
    const imgUrl = `#`;
    //Destructure out the letter and the isHidden property
    return (
      <div className="cardContainer" onClick={(e) => this.props.cardHandler(outerIndex, innerIndex)}>
        {/* className={this.props.cardClass} */}
        {!isHidden && <img src={imgUrl} alt={letter} />}
        {isHidden && <img src={cardBack} />}
      </div>
    )
  }
}
