import React from 'react';
import { connect } from 'react-redux';

import { articleFavorited, articleUnfavorited,fetchArticlesByTag } from '../../redux/modules/articles';
import ArticleMeta from '../ArticleMeta/ArticleMeta';
import {
	ArticlePreviewContainer,
	ArticleLeftSide,
	//	ArticleMeta,
	ArticleContent,
	/* ImageProfile,
	FlexWrapperCol,
	AuthorName,
	DateCreated, */
	ArticleTitle,
	ArticleTextPreview,
	StyledSpan,
	ArticleRightSide,
	AddToFavorite,
	ArticleTags,
	HeartIcon,
	FavoriteAddedCount,
	Tag
} from './ArticlePreview.style';

import { withRouter } from 'react-router-dom';

function ArticlePreview({ article, match, history, location, articleFavorited, articleUnfavorited, fetchArticlesByTag }) {
	
	const { favorited, slug, title, description, favoritesCount, tagList } = article;
	const handleAddingToFavorite = () => {
		if (favorited) {
			articleUnfavorited(slug);
		} else {
			articleFavorited(slug);
		}
	};

	return (
		<ArticlePreviewContainer>
			<ArticleLeftSide>
				<ArticleMeta article={article} />
				<ArticleContent>
					<ArticleTitle to={`/article/${slug}`}>{title}</ArticleTitle>
					<ArticleTextPreview to={`/article/${slug}`}>{description}</ArticleTextPreview>
					<StyledSpan to={`/article/${slug}`}>Read more...</StyledSpan>
				</ArticleContent>
			</ArticleLeftSide>
			<ArticleRightSide>
				<AddToFavorite favorited={favorited ? favorited : undefined} onClick={handleAddingToFavorite}>
					<HeartIcon favorited={favorited ? favorited : undefined}/>
					<FavoriteAddedCount favorited={favorited ? favorited : undefined}>{favoritesCount}</FavoriteAddedCount>
				</AddToFavorite>
				<ArticleTags>{tagList.map((tag) => <Tag key={tag} onClick={() => fetchArticlesByTag(tag)}>{tag}</Tag>)}</ArticleTags>
			
			</ArticleRightSide>
		</ArticlePreviewContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	articleFavorited: (slug) => dispatch(articleFavorited(slug)),
	articleUnfavorited: (slug) => dispatch(articleUnfavorited(slug)),
	fetchArticlesByTag: (tag) => dispatch(fetchArticlesByTag(tag))
});

export default connect(null, mapDispatchToProps)(ArticlePreview);
