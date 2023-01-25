import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props){
        super(props);

    }

  render() {
    const altText = `${this.props.letter}`;
    const imgUrl = ``;
    return (
      <div className="cardContainer">
        {/* className={this.props.cardClass} */}
        <img src={imgUrl} alt={altText} />
      </div>
    )
  }
}
