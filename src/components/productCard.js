import React from 'react';

const PostCard = ({ post }) => {
	return (
		<div key={post.id} className="post" style={{backgroundImage:`url(${post.api_featured_image})`}}>
			<h2>{post?.name}</h2>
			<p>{post?.brand}</p>
			<p>${post?.price}</p>
			<a href={post?.website_link}>Store</a>
			{/* <img src={post.api_featured_image} /> */}
		</div>
	);
};

export default PostCard;
