import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { withRouter } from 'react-router-dom';

import { createArticle, updateArticle } from '../../redux/modules/singleArticle';
import { ArticleFormContainer, StyledForm, StyledTextField, StyledButton } from './ArticleForm.style';

function ArticleForm({ createArticle, selectedArticle, updateArticle, history }) {
	return (
		<ArticleFormContainer>
			<Formik
				initialValues={{
					title: selectedArticle ? `${selectedArticle.title}` : '',
					description: selectedArticle ? `${selectedArticle.description}` : '',
					body: selectedArticle ? `${selectedArticle.body}` : '',
					tagList: ''
				}}
				onSubmit={(values) => {
					// same shape as initial values
					const articleDataObj = {
						article: {
							title: values.title,
							description: values.description,
							body: values.body,
							tagList: values.tagList
						}
					};
					selectedArticle
						? updateArticle(selectedArticle.slug, articleDataObj)
						: createArticle(articleDataObj);
					history.push('/');
				}}
			>
				{({ errors, touched }) => (
					<StyledForm>
						<Field
							name="title"
							component={StyledTextField}
							label="Article Title"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="description"
							component={StyledTextField}
							label="What's this article about?"
							margin="dense"
							variant="outlined"
						/>

						<Field
							name="body"
							component={StyledTextField}
							label="Wrtice your article (in markdown)"
							multiline
							rows="10"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="tagList"
							component={StyledTextField}
							label="Enter tags"
							margin="dense"
							variant="outlined"
						/>
						<StyledButton type="submit">Publish article</StyledButton>
					</StyledForm>
				)}
			</Formik>
		</ArticleFormContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	createArticle: (articleDataObj) => dispatch(createArticle(articleDataObj)),
	updateArticle: (slug, articleDataObj) => dispatch(updateArticle(slug, articleDataObj))
});

export default withRouter(connect(null, mapDispatchToProps)(ArticleForm));
