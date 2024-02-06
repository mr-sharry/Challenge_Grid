import React from 'react';
import { QGrid } from './Classes';

export default function ChallengeGrid() {
  return (
    <div>
      <h1>Challenge Grid</h1>
      <QGrid
        width={4}
        length={5}/>
    </div>
  );
}
