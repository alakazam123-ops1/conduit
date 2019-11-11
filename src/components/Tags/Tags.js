/* import React, { useState, useEffect } from 'react';

import { TagsContainer, StyledTag, Paragraph, TagsList } from './Tags.style';
import { connect } from 'react-redux';

function Tags({ articlesData }) {
	const [ uniqueTagsArr, setUniqueTagsArr ] = useState([]);

	useEffect(
		() => {
			const uniqueTags = new Set();
			articlesData && articlesData.map((article) => article.tagList.map((tag) => uniqueTags.add(tag)));
			setUniqueTagsArr(Array.from(uniqueTags));
		},
		[ articlesData ]
	);

	return (
		<TagsContainer>
			<Paragraph>Popular Tags</Paragraph>
			<TagsList>
				{uniqueTagsArr.map((tag) => (
					<StyledTag to="/" key={tag}>
						{tag}
					</StyledTag>
				))}
			</TagsList>
		</TagsContainer>
	);
}

export default Tags;
 */

import React, {  useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchPopularTags } from '../../redux/modules/tags';
import { fetchArticlesByTag } from '../../redux/modules/articles';

import { TagsContainer, StyledTag, Paragraph, TagsList } from './Tags.style';

function Tags({ fetchPopularTags, fetchArticlesByTag, tagsList }) {

	useEffect(() => {
		fetchPopularTags();
	}, []);

	return (
		<TagsContainer>
			<Paragraph>Popular Tags</Paragraph>
			<TagsList>
				{tagsList ? (
					tagsList.map((tag) => (
						<StyledTag to="/" key={tag} onClick={() => fetchArticlesByTag(tag)}>
							{tag}
						</StyledTag>
					))
				) : (
					<Paragraph loading='true'>Loading...</Paragraph>
				)}
			</TagsList>
		</TagsContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	fetchPopularTags: () => dispatch(fetchPopularTags()),
	fetchArticlesByTag: (tag) => dispatch(fetchArticlesByTag(tag))
});

export default connect(null, mapDispatchToProps)(Tags);
