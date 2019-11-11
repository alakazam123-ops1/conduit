import React  from 'react';

import styles from '../../utils/styles';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { ArticlesContainer, StyledNavLink, ArticlesList } from './Articles.style';

function Articles({ isFetching, articlesData }) {
	return (
		<ArticlesContainer>
			<StyledNavLink to="/" activeStyle={styles.activeLinkStyle}>
				Global Feed
			</StyledNavLink>
			{articlesData && (
				<ArticlesList>
					{articlesData.map((article) => <ArticlePreview key={article.slug} article={article} />)}
				</ArticlesList>
			)}
		</ArticlesContainer>
	);
}

export default Articles;
