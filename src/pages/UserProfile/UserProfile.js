import React, { useEffect } from 'react';

import Profile from '../../components/Profile/Profile';

import { connect } from 'react-redux';

import { fetchArticlesByAuthor } from '../../redux/modules/articles';

function UserProfile({
	match,
	currentUser,
	fetchArticlesByAuthor,
	userArticles,
	favoriteArticles,
	fetchFavoriteArticles
}) {
	useEffect(() => {
		fetchArticlesByAuthor(match.params.userName);
	}, [fetchArticlesByAuthor, match.params.userName ]);
	/* 	if (match.url.includes('favorites')) {
		console.log('yes')
	} else {
		console.log('no')
	} */

	return (
		<div>
			<Profile
				match={match}
				userArticles={userArticles}
				currentUser={currentUser}
				favoriteArticles={favoriteArticles}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userArticles: state.articles.userArticles,
		currentUser: state.currentUser,
		favoriteArticles: state.articles.favoriteArticlesList
	};
};
const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthor: (username) => dispatch(fetchArticlesByAuthor(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
