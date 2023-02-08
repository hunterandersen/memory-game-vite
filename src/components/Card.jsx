import React, { Component } from "react";
import cardBack from "../assets/cardBack.webp";
import "./CardStyle.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.imageSrc = `/cardImages/${this.props.cardInfo.letter.toUpperCase()}-Black.png`;
  }

  render() {
    const { isHidden, isCurrent } = this.props.cardInfo;
    const { outerIndex, innerIndex } = this.props;

    let card = <></>;
    if (isHidden) {
      card = <img src={cardBack} />;
    } else {
      if (isCurrent) {
        card = <img src={this.imageSrc} className="currentCard" />;
      } else {
        card = <img src={this.imageSrc} className="flipped" />;
      }
    }

    //Destructure out the letter and the isHidden property
    return (
      <div
        className="cardContainer"
        onClick={(e) => this.props.cardHandler(outerIndex, innerIndex)}
      >
        {card}
      </div>
    );
  }
}
