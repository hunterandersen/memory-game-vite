import React, { Component } from "react";
import Card from "./Card";
import { generateShuffledCards } from "../utils";

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    this.cardHandler = this.cardHandler.bind(this);

    this.state = {
      cards: generateShuffledCards(4).map(letters => {
        return letters.map(letter => {
          return {
            letter,
            isHidden: true
          }
        })
      }),
    };
  }

  cardHandler(event) {
    console.log("clicked!");
    console.log(event.target);
  }

  render() {
    console.log(this.state.cards);
    return (
      <>
        {this.state.cards instanceof Array &&
          this.state.cards.map((arr, index) => {
            return (
              <div className="cardRowContainer" key={`cardRow-${index}`}>
                {arr.map((cardInfo, idx) => {
                  return (
                    <Card
                      cardInfo={cardInfo}
                      key={`card-${cardInfo}${index}${idx}`}
                      cardHandler={this.cardHandler}
                    />
                  );
                })}
              </div>
            );
          })}
      </>
    );
  }
}
