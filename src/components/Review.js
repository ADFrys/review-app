import React from 'react';
import '../review.css';
import SingleReview from './SingleReview';

export default function Review({ review }) {
	return (
				review.map(singlereview => {
					return <SingleReview singlereview={singlereview} />
				})
			
	)
}