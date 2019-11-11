import React, { useState, useEffect } from 'react';

import colors from '../../utils/colors';

import { ArticlePageLinksContainer, StyledPageLink } from './ArticlePageLinks.style';

function ArticlePageLinks({ fetchArticles }) {
	const initialCurrentPage = () => Number(window.localStorage.getItem('currentPage') || '1');
	const [ currentPage, setCurrentPage ] = useState(initialCurrentPage);
	const pageLinks = [];

	useEffect(
		() => {
			window.localStorage.setItem('currentPage', currentPage);
			window.scrollTo(0, 0);
		},
		[ currentPage ]
	);

	const handlePageChange = (index) => {
		setCurrentPage(index);
		const offSet = index === 1 ? 0 : (index - 1) * 20;
		window.localStorage.setItem('offSet', offSet);
		fetchArticles(offSet);
	};
	for (let i = 1; i <= 50; i++) {
		pageLinks.push(
			i === currentPage ? (
				<StyledPageLink key={i} activeStyle={{ background: colors.green, color: 'white' }} to="/">
					{i}
				</StyledPageLink>
			) : (
				<StyledPageLink key={i} onClick={() => handlePageChange(i)} to="/">
					{i}
				</StyledPageLink>
			)
		);
	}

	return <ArticlePageLinksContainer>{pageLinks.map((pageLink) => pageLink)}</ArticlePageLinksContainer>;
}

export default ArticlePageLinks;
