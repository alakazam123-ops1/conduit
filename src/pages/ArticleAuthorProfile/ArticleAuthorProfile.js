import React, { useEffect } from 'react';

import Profile from '../../components/Profile/Profile';

import { fetchUserProfile, fetchUserProfileUnmounted } from '../../redux/modules/profile';

import { fetchArticlesByAuthor } from '../../redux/modules/articles';

import { connect } from 'react-redux';

function ArticleAuthorProfile({
	fetchArticlesByAuthor,
	match,
	userArticles,
	fetchUserProfile,
	fetchUserProfileUnmounted,
	profile,
	favoriteArticles,
	fetchFavoriteArticles
}) {
	useEffect(() => {
		fetchArticlesByAuthor(match.params.userName);
		fetchUserProfile(match.params.userName);
		
		return () => {
			fetchUserProfileUnmounted();
		};
	}, []);

	return (
		<div>
			<Profile match={match} userArticles={userArticles} profile={profile} favoriteArticles={favoriteArticles} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	userArticles: state.articles.userArticles,
	profile: state.profile,
	favoriteArticles: state.articles.favoriteArticlesList
});

const mapDispatchToProps = (dispatch) => ({
	fetchUserProfile: (username) => dispatch(fetchUserProfile(username)),
	fetchUserProfileUnmounted: () => dispatch(fetchUserProfileUnmounted()),
	fetchArticlesByAuthor: (username) => dispatch(fetchArticlesByAuthor(username)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAuthorProfile);
