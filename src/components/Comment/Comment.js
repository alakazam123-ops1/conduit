import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';

import { fetchCommentsFromArticles, addCommentToArticle, removeCommentFromArticle } from '../../redux/modules/comments';

import {
	CommentContainer,
	StyledForm,
	StyledField,
	StyledButton,
	CommentContent,
	CommentBlock,
	CommentFooter,
	CommentImage,
	CommentUsername,
	CommentCreatedAt,
	DeleteComment
} from './Comment.style';

function Comment({
	selectedArticle,
	currentUser,
	commentsList,
	fetchCommentsFromArticles,
	addCommentToArticle,
	removeCommentFromArticle
}) {

	/* 	useEffect(() => {
		fetchCommentsFromArticles(selectedArticle.slug);
	}, []); */
	return (
		<CommentContainer>
			<Formik
				initialValues={{
					commentText: ''
				}}
				onSubmit={(values) => {
					// same shape as initial values
					const commentObj = {
						comment: {
							body: values.commentText
						}
					};
					addCommentToArticle(commentObj, selectedArticle.slug);
				}}
			>
				{({ errors, touched }) => (
					<StyledForm>
						<StyledField name="commentText" component="textarea" placeholder="Write a comment" rows="4" />
						<StyledButton type="submit">Post comment</StyledButton>
					</StyledForm>
				)}
			</Formik>
			{commentsList &&
				commentsList.map((comment) => (
					<CommentContent key={comment.id}>
						<CommentBlock>{comment.body}</CommentBlock>
						<CommentFooter>
							<CommentImage>{comment.image}</CommentImage>
							<CommentUsername>{comment.author.username}</CommentUsername>
							<CommentCreatedAt>{comment.createdAt}</CommentCreatedAt>
							{(currentUser.username === comment.author.username) && (
								<DeleteComment
									onClick={() => removeCommentFromArticle(selectedArticle.slug, comment.id)}
								/>
							)}
						</CommentFooter>
					</CommentContent>
				))}
		</CommentContainer>
	);
}
const mapStateToProps = (state) => ({
	currentUser: state.currentUser.userInfo
});

const mapDispatchToProps = (dispatch) => ({
	addCommentToArticle: (commentObj, slug) => dispatch(addCommentToArticle(commentObj, slug)),
	removeCommentFromArticle: (slug, commentId) => dispatch(removeCommentFromArticle(slug, commentId))
	/* 	fetchCommentsFromArticles: (slug) => dispatch(fetchCommentsFromArticles(slug)) */
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);


