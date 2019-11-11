import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFavoriteArticles } from '../../redux/modules/articles';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

function FavoriteArticles({ match, favoriteArticles, fetchFavoriteArticles }) {
	useEffect(
		() => {
			if (match.url.includes('favorites')) {
				fetchFavoriteArticles(match.params.userName);
			}
		},
		[ match.url, fetchFavoriteArticles, match.params.userName ]
	);

	return (
		<div>
			{favoriteArticles ? (
				favoriteArticles.map((article) => <ArticlePreview key={article.slug} article={article} />)
			) : (
				'No favorite articles found'
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	favoriteArticles: state.articles.favoriteArticlesList
});

const mapDispatchToProps = (dispatch) => ({
	fetchFavoriteArticles: (username) => dispatch(fetchFavoriteArticles(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteArticles);
