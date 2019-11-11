import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import colors from '../../utils/colors';
import styles from '../../utils/styles';
import Header from '../Header/Header';
import FavoriteArticles from '../FavoriteArticles/FavoriteArticles';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ArticleMeta from '../ArticleMeta/ArticleMeta';

import {
	ProfileContainer,
	UserInfo,
	ImageProfile,
	Username,
	Bio,
	ArticlesChoice,
	StyledNavLink,
	NavLinks,
	ArticlesList
} from './Profile.style';

function Profile({
	match,
	profile,
	currentUser,
	fetchArticlesByAuthor,
	favoriteArticles,
	userArticles,
	fetchFavoriteArticles,
	...props
}) {
	let profileLink;
	let profileLinkFavorites;
	if (profile) {
		profileLink = `/articleAuthorProfile/${profile.username}`;
		profileLinkFavorites = `/articleAuthorProfile/${profile.username}/favorites`;
	} else if (currentUser) {
		profileLink = `/userProfile/${currentUser.username}`;
		profileLinkFavorites = `/userProfile/${currentUser.username}/favorites`;
	}

	return (
		<ProfileContainer>
			<UserInfo>
				{profile ? (
					<React.Fragment>
						<ImageProfile src={profile.image} />
						<Username>{profile.username}</Username>
						<Bio>{profile.bio}</Bio>
					</React.Fragment>
				) : (
					<React.Fragment>
						<ImageProfile src={currentUser.image} />
						<Username>{currentUser.username}</Username>
						<Bio>{currentUser.bio}</Bio>
					</React.Fragment>
				)}
			</UserInfo>

			<ArticlesList>
				<ArticlesChoice>
					<NavLinks>
						<StyledNavLink to={profileLink} exact activeStyle={styles.activeLinkStyle}>
							My Articles
						</StyledNavLink>
						<StyledNavLink to={profileLinkFavorites} activeStyle={styles.activeLinkStyle}>
							Favorited Articles
						</StyledNavLink>
					</NavLinks>
				</ArticlesChoice>

				<Route
					exact
					path={`${match.path}`}
					render={({ ...routerProps }) =>
						userArticles
							? userArticles.map((article) => (
									<ArticlePreview key={article.slug} article={article} {...routerProps} />
								))
							: 'No articles found'}
				/>
				{/* <Route
					exact
					path={`${match.path}/favorites`}
					render={({ ...routerProps }) =>
						favoriteArticles
							? favoriteArticles.map((article) => (
									<ArticlePreview key={article.slug} article={article} {...routerProps} />
								))
							: 'No favorite articles found'}
				/> */}
				<Route
					exact
					path={`${match.path}/favorites`}
					render={({ ...routerProps }) => <FavoriteArticles favoriteArticles={favoriteArticles} {...routerProps} />}
				/>
			</ArticlesList>
		</ProfileContainer>
	);
}

export default Profile;
