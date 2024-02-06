import React from 'react';

export class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question_string,
      difficulty: props.difficulty,
      answer: props.answer_string,
      topic: props.topic
    }
  }

  render() {
    let squareColor;
      if (this.props.difficulty === 'low') {
        squareColor = 'green';
      } else if (this.props.difficulty === 'med') {
        squareColor = 'yellow';
      } else {
        squareColor = 'red';
      }
      return <div style={{width: '50px', height: '50px', backgroundColor: squareColor}}></div>;
  }
}

export class QGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      length: props.length
    }
  }
  
  render() {
    const grid = [];
    for (let i = 0; i < this.state.width; i++) {
      const row = [];
      for (let j = 0; j < this.state.length; j++) {
        row.push(
          <Question
            key = {`${i}-${j}`}
            question_string = "Test"
            difficulty = "High"
            answer = "Test123"
            topic = "1.4.1"
            />
        );
      }
      grid.push(
        <div key={i} className="qgrid-row">{row}</div>
      );
    }
    console.log(grid)
    return <div className="qgrid">{grid}</div>
    }
  }
