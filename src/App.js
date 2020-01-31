import React, { useState, useRef } from 'react';
import './App.css';
import './review.css';
import Review from './components/Review';
import reviews from "./db.json";
import uuidv4 from 'uuid/v4'

function App() {
  const [review, newReview] = useState(reviews);
  const reviewPlace = useRef()
  const reviewRating = useRef()
  const reviewContent = useRef()
  const reviewAuthor = useRef()
  const reviewPublished = useRef()

  function addReview(e) {
  	const place = reviewPlace.current.value
  	const rating = reviewRating.current.value
  	const content = reviewContent.current.value
  	const author = reviewAuthor.current.value
  	const published_at = reviewPublished.current.value
  	e.preventDefault();

  	if (place === '' && rating === '' && content === '' && author === '' && published_at === '') return 
  		newReview(review=> { 
  			return [...review, {id: uuidv4(), place: place, rating: rating, content: content, author: author, published_at: published_at}]
  		})
  		reviewPlace.current.value = null
  		reviewRating.current.value = null
  		reviewContent.current.value = null
  		reviewAuthor.current.value = null
  		reviewPublished.current.value = null
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
	      <label name="Restaurant">Restaurant: </label><input name="Restaurant" ref={reviewPlace} placeholder="Restaurant Name" type="text"/>
	      <label name="Rating">Rating (1 out of 5): </label><input name="Rating" ref={reviewRating} placeholder="Your Rating (1 to 5)" type="text"/>
	      <label name="Review">Review:</label><input name="Review" ref={reviewContent} placeholder="Write your review" type="text"/>
	      <label name="Username">Username: </label><input name="Username" ref={reviewAuthor} placeholder="Username" type="text"/>
	      <label name="Date">Date: </label><input name="Date" ref={reviewPublished} placeholder="Date" type="text"/>
	      <button onClick={addReview} type="submit">Submit Review</button>
	  </form>
  </div>
  );
}

export default App;
