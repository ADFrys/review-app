import React from 'react';
import '../review.css';

export default function SingleReview({ singlereview }) {
	return (
		<div className="card">
			<div className="review-container">
				<div className="reviews">
					<h2>{ singlereview.place }</h2>
					<p>Rating: { singlereview.rating }</p>
					<p>{ singlereview.content }</p>
					<p>User: { singlereview.author }</p>
					<p>{ singlereview.published_at }</p>
				</div>
			</div>
		</div>
	)
}