import React, { Component } from "react";
import Card from "./Card";
import { generateShuffledCards } from "../utils";
const gridSize = 4;

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    this.cardHandler = this.cardHandler.bind(this);

    this.state = {
      cards: generateShuffledCards(gridSize).map(letters => {
        return letters.map(letter => {
          return {
            letter,
            isHidden: true
          }
        })
      }),
      flipCount: 0
    };
  }

  cardHandler(outerIndex, innerIndex) {
    console.log("clicked!");

    //If the card is already flipped, then ignore that click
    if (!this.state.cards[outerIndex][innerIndex].isHidden){
      console.log("Click ignored");
      return;
    }
    //Increase the flipCount
    this.setState({
      flipCount: this.flipCount + 1
    });

    //If the flipCount is currently odd, then that means this click is making it even.
      //In other words, two cards are flipped over now.
      //So check if they match
    if (this.flipCount % 2 != 0){

    }

    //Flip the card visually
      //change the state of that card to have the flipped property
    const newCards = this.state.cards.slice(0);
    newCards[outerIndex][innerIndex] = {
      ...newCards[outerIndex][innerIndex],
      isHidden: false
    }
    this.setState({
      cards: newCards
    });

    //Track that it was the last card flipped
    //If prevCard, then check if they match
    //If they don't match, un-flip both and reset both trackers

  }

  render() {
    console.log(this.state.cards);
    return (
      <>
      <h3>Flip Count: {this.flipCount}</h3>
        {!!this.state.cards &&
          this.state.cards.map((arr, index) => {
            return (
              <div className="cardRowContainer" key={`cardRow-${index}`}>
                {arr.map((cardInfo, idx) => {
                  return (
                    <Card
                      outerIndex={index}
                      innerIndex={idx}
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
