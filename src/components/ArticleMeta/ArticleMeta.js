import React from 'react';

import { ArticleMetaContainer, ImageProfile, FlexWrapperCol, AuthorName, DateCreated } from './ArticleMeta.style';

import {withRouter} from 'react-router-dom'

import { Link } from 'react-router-dom';

function ArticleMeta({ match, article, ...props }) {
	return (
		<ArticleMetaContainer {...props}>
			<Link to={`/articleAuthorProfile/${article.author.username}`}>
				<ImageProfile src={article.author.image} />
			</Link>

			<FlexWrapperCol>
				<Link to={`/articleAuthorProfile/${article.author.username}`} style={{ textDecoration: 'none' }}>
					<AuthorName {...props}>{article.author.username}</AuthorName>
				</Link>

				<DateCreated {...props}>{article.createdAt}</DateCreated>
			</FlexWrapperCol>
		</ArticleMetaContainer>
	);
}

export default withRouter(ArticleMeta);
