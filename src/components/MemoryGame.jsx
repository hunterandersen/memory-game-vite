import React, { Component } from 'react';
import Card from './Card';
import { generateShuffledCards } from '../utils';

//Instantiate the board of cards

export default class MemoryGame extends Component {

    constructor(props){
      super(props);

        this.state = {
            cards: generateShuffledCards(4)
        }
    }

  render() {
    return (
      <>
        {this.state.cards instanceof Array && this.state.cards.map((arr, index) => {
          return <div className='cardRowContainer' key={`cardRow-${index}`}>
            {arr.map((letter, idx) => {
              return <Card letter={letter} key={`card-${letter}${index}${idx}`} />
            })}
          </div>
        })}
      </>
    )
  }
}
