import React, { useState, useRef } from 'react';
import './App.css';
import './review.css';
import Review from './components/Review';
import reviews from "./db.json";
import uuidv4 from 'uuid/v4'

function App() {
  const [review, newReview] = useState(reviews);
  const reviewPlace = useRef();
  const reviewRating = useRef();
  const reviewContent = useRef();
  const reviewAuthor = useRef();
  const reviewPublished = useRef();

  function addReview(e) {
  	const placeName = reviewPlace.current.value;
  	const rating = reviewRating.current.value;
  	const content = reviewContent.current.value;
  	const author = reviewAuthor.current.value;
  	const published = reviewPublished.current.value;
  	e.preventDefault();

  	if (placeName === '' && rating === '' && content === '' && author === '' && published === '') return 
  		newReview(review=> { 
  			return [...review, {id: uuidv4(), placeName: placeName, rating: rating, content: content, author: author, published: published}]
  		})
  		reviewPlace.current.value = null
  }

  return (
  	<div>
	    <div className="wrapper">
	      <h1 className="reviewHead">Reviews</h1>
	      <div className="container">
	        <Review review={ review } />
	      </div>
	    </div>
	    <form>
	      <input ref={reviewPlace} placeholder="Restaurant Name" type="text"/>
	      <input ref={reviewRating} placeholder="Your Rating (1 to 5)" type="text"/>
	      <input ref={reviewContent} placeholder="Write your review" type="text"/>
	      <input ref={reviewAuthor} placeholder="Username" type="text"/>
	      <input ref={reviewPublished} placeholder="Date" type="text"/>
	      <button onClick={addReview} type="submit">Submit Review</button>
	  </form>
  </div>
  );
}

export default App;
