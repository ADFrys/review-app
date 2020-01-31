import React, { useState } from 'react';
import './App.css';
import './review.css';
import Review from './components/Review';
import reviews from "./db.json";

function App() {
  const [review] = useState(reviews)

  return (
    <div className="wrapper">
      <h1 className="reviewHead">Reviews</h1>
      <div className="container">
        <Review review={ review } />
      </div>
    </div>
  );
}

export default App;
