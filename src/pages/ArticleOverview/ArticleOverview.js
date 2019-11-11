import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import colors from '../../utils/colors';

import ArticleMeta from '../../components/ArticleMeta/ArticleMeta';
import Header from '../../components/Header/Header';
import Comment from '../../components/Comment/Comment';

import { fetchSingleArticle, fetchSingleArticleUnmounted } from '../../redux/modules/singleArticle';
import { fetchCommentsFromArticle, fetchCommentsFromArticleUnmounted } from '../../redux/modules/comments';

import { FullArticleText, Paragraph } from './ArticleOverview.style';

function ArticleOverview({
	match,
	fetchSingleArticle,
	selectedArticle,
	fetchArticles,
	fetchCommentsFromArticle,
	currentUser,
	commentsList,
	fetchSingleArticleUnmounted,
	fetchCommentsFromArticleUnmounted
}) {
	/* 	useEffect(() => {
		fetchArticles();
	
		 fetchCommentsFromArticles(selectedArticle.slug);
		
	}, []); */
	/* console.log(match.params.articleSlug); */
	useEffect(() => {
		fetchSingleArticle(match.params.articleSlug);
		fetchCommentsFromArticle(match.params.articleSlug);
		return () => {
			fetchSingleArticleUnmounted();
			fetchCommentsFromArticleUnmounted();
		};
	}, []);

	const canModify = currentUser && selectedArticle && currentUser.username === selectedArticle.author.username;
	/* 	console.log(commentsList);
	console.log(selectedArticle); */

	return (
		<div>
			{selectedArticle && (
				<React.Fragment>
					<Header
						singleArticleHeader
						selectedArticle={selectedArticle}
						/* title={selectedArticle.title}  */ canModify={canModify}
					/>
					<ArticleMeta singleArticleMeta article={selectedArticle} />
					<FullArticleText>{selectedArticle.body}</FullArticleText>
					{currentUser ? (
						<Comment selectedArticle={selectedArticle} commentsList={commentsList} />
					) : (
						<Paragraph>
							<span style={{ color: colors.green }}>Sign in</span> or{' '}
							<span style={{ color: colors.green }}>sign up</span> to add comments on this article
						</Paragraph>
					)}
				</React.Fragment>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		selectedArticle: state.singleArticle.article,
		currentUser: state.currentUser.userInfo,
		commentsList: state.comments.commentsList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSingleArticle: (slug) => dispatch(fetchSingleArticle(slug)),
		fetchCommentsFromArticle: (slug) => dispatch(fetchCommentsFromArticle(slug)),
		fetchSingleArticleUnmounted: () => dispatch(fetchSingleArticleUnmounted()),
		fetchCommentsFromArticleUnmounted: () => dispatch(fetchCommentsFromArticleUnmounted())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverview);
