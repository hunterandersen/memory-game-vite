import React, { Component } from "react";
import Card from "./Card";
import { generateShuffledCards } from "../utils";
const gridSize = 6;
 
export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    this.clicksDisabled = false;
    this.cardHandler = this.cardHandler.bind(this);

    this.state = {
      cards: generateShuffledCards(gridSize).map((letters) => {
        return letters.map((letter) => {
          return {
            letter,
            isHidden: true,
            isCurrent: false,
          };
        });
      }),
      prevCard: {},
      flipCount: 0,
      playerScore: 0,
    };
  }

  cardHandler(outerIndex, innerIndex) {
    const clickedCard = this.state.cards[outerIndex][innerIndex];

    //If the card is already flipped, then ignore that click
    if (!clickedCard.isHidden || this.clicksDisabled) {
      console.log("Click ignored");
      return;
    }
    //Increase the flipCount
    this.setState({
      flipCount: this.state.flipCount + 1,
    });

    //Flip the card visually
    //change the state of that card to have the flipped property
    const cardsCopy = [...this.state.cards];
    cardsCopy[outerIndex][innerIndex] = {
      ...cardsCopy[outerIndex][innerIndex],
      isHidden: false,
      isCurrent: true,
    };
    this.setState({
      cards: cardsCopy,
    });

    //If the flipCount is currently odd, then that means this click is making it even.
    //In other words, two cards are flipped over now.
    //So check if they match
    if (this.state.flipCount % 2 != 0) {
      //If previous card matches current card,
      if (clickedCard.letter == this.state.prevCard.letter) {
        //Remove the "isCurrent" flag from the two cards and add the "flipped" flag
        let cardsCopy = [...this.state.cards];
        cardsCopy[outerIndex][innerIndex].isCurrent = false;
        cardsCopy[this.state.prevCard.outerIndex][
          this.state.prevCard.innerIndex
        ].isCurrent = false;
        console.log(
          "Matched Cards",
          cardsCopy[this.state.prevCard.outerIndex][
            this.state.prevCard.innerIndex
          ]
        );
        //Add one to player's score as well
        this.setState({
          cards: cardsCopy,
          playerScore: this.state.playerScore + 1,
        });
        //Set cards to remain faceup and ignored???
      } else {
        this.clicksDisabled = true;
        setTimeout(() => {
          //The cards did not match
          //Find the two that didn't match and revert them back
          let cardsCopy = [...this.state.cards];
          cardsCopy[outerIndex][innerIndex].isHidden = true;
          cardsCopy[outerIndex][innerIndex].isCurrent = false;
          cardsCopy[this.state.prevCard.outerIndex][
            this.state.prevCard.innerIndex
          ].isHidden = true;
          cardsCopy[this.state.prevCard.outerIndex][
            this.state.prevCard.innerIndex
          ].isCurrent = false;

          //Then update the state with that newly reverted array
          //and reset the prevCard to be empty
          this.setState({
            cards: cardsCopy,
            prevCard: {},
          });

          this.clicksDisabled = false;
        }, 1500);
      }
    } else {
      //Change the clicked card to have currentCard: true
      let cardsCopy = [...this.state.cards];
      cardsCopy[outerIndex][innerIndex].isCurrent = true;
      /* if (this.state.prevCard.outerIndex){
        cardsCopy[this.state.prevCard.outerIndex][
          this.state.prevCard.innerIndex
        ].isCurrent = false;
      } */

      this.setState({
        cards: cardsCopy,
        prevCard: {
          ...clickedCard,
          outerIndex,
          innerIndex,
        },
      });
    }

    //Track that it was the last card flipped
    //If prevCard, then check if they match
    //If they don't match, un-flip both and reset both trackers
  }

  render() {
    const renderCardsList = this.state.cards.flatMap((arr, outer) => {
      return arr.flatMap((card, inner) => {
        return {
          ...card,
          outerIndex: outer,
          innerIndex: inner,
        };
      });
    });
    console.log("Flattened", renderCardsList);

    return (
      <>
        {<header>
          <h1>Memory Game</h1>
          <h3>Turn Count: {this.state.flipCount}</h3>
        </header>}
        <div className="cardGrid">
          {renderCardsList.map((card) => {
            return (
              <Card
                outerIndex={card.outerIndex}
                innerIndex={card.innerIndex}
                cardInfo={card}
                key={`card-${card.outerIndex}${card.innerIndex}`}
                cardHandler={this.cardHandler}
              />
            );
          })}
        </div>
      </>
    );
  }
}
