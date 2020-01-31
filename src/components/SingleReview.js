import React from 'react';
import Review from './Review';

export default function SingleReview({ singlereview }) {
	return (
		<div className="card">
			<div className="review-container">
				<div className="reviews">
					<h2>{ singlereview.place }</h2>
					<p>{ singlereview.published_at }</p>
					<p>{ singlereview.author }</p>
					<p>{ singlereview.rating }</p>
					<p>{ singlereview.content }</p>
				</div>
			</div>
		</div>
	)
}