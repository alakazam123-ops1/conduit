import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import Header from '../../components/Header/Header';
import Articles from '../../components/Articles/Articles';
import ArticlePageLinks from '../../components/ArticlePageLinks/ArticlePageLinks';
import Tags from '../../components/Tags/Tags';

import { fetchArticles, fetchArticlesByTagUnmounted } from '../../redux/modules/articles';

import { HomeContainer, HomeRow, HomeWrapper, Paragraph } from './Home.styles';

function Home({
	articlesData,
	tagsList,
	fetchArticles,
	article,
	favoriteArticlesList,
	addToFavoriteArticles,
	articlesByTag,
	fetchArticlesByTagUnmounted
}) {
	useEffect(() => {
		fetchArticles(window.localStorage.getItem('offSet'));
	}, []);

	window.onbeforeunload = function() {
		if(articlesByTag) {
			fetchArticlesByTagUnmounted();
		}
	
	};

	return (
		<HomeContainer>
			<Header title="conduit" text="A place to share your knowledge" />
			<HomeRow>
				<HomeWrapper>
					{articlesByTag || articlesData ? (
						<React.Fragment>
							<Articles articlesData={articlesByTag ? articlesByTag : articlesData} />
							<ArticlePageLinks fetchArticles={fetchArticles} />
						</React.Fragment>
					) : (
						<Paragraph>Loading...</Paragraph>
					)}

					<Tags tagsList={tagsList} />
				</HomeWrapper>
			</HomeRow>
		</HomeContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		articlesData: state.articles.articlesData,
		articlesByTag: state.articles.articlesByTag,
		loading: state.articles.loading,
		article: state.singleArticle.article,
		tagsList: state.tags.tagsList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticles: (offSet) => dispatch(fetchArticles(offSet)),
		fetchArticlesByTagUnmounted: () => dispatch(fetchArticlesByTagUnmounted())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
