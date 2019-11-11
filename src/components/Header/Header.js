/* import React from 'react';


import { HeaderContainer, HeaderTitle, HeaderText, HeaderWrapper, ImageProfile, FollowButton } from './Header.style';

import { connect } from 'react-redux';

function Header({ selectedArticle, title, text, ...props }) {
	return (
		<React.Fragment>
			<HeaderContainer {...props}>
				<HeaderWrapper {...props}>
					{{ ...props }.hasOwnProperty('userProfileHeader') ? (
						<React.Fragment>
							<ImageProfile src={selectedArticle.author.image} />
							<HeaderText {...props}>{selectedArticle.author.username}</HeaderText>
						
								<FollowButton to='/'>
									Follow {selectedArticle.author.username}
								</FollowButton>
						
						</React.Fragment>
					) : (
						<React.Fragment>
							<HeaderTitle {...props}>{title}</HeaderTitle>
							<HeaderText {...props}>{text}</HeaderText>
						</React.Fragment>
					)}
				</HeaderWrapper>
			</HeaderContainer>
		</React.Fragment>
	);
}

export default Header;
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteArticle } from '../../redux/modules/singleArticle';
import {
	HeaderContainer,
	HeaderTitle,
	HeaderText,
	HeaderWrapper,
	ImageProfile,
	FollowButton,
	ArticleModify,
	EditArticle,
	DeleteArticle
} from './Header.style';



function Header({ history, selectedArticle, title, text, canModify, dispatch, ...props }) {
	const handleDeleteArticle = () => {
		dispatch(deleteArticle(selectedArticle.slug))
		history.push('/')
		
	}
	return (
		<HeaderContainer {...props}>
			<HeaderWrapper {...props}>
				<HeaderTitle {...props}>{selectedArticle ? selectedArticle.title : title}</HeaderTitle>
				{canModify && (
					<ArticleModify>
						<EditArticle onClick={() => history.push(`/editArticle/${selectedArticle.slug}`)}>
							Edit Article
						</EditArticle>
						<DeleteArticle onClick={handleDeleteArticle}>
							Delete Article
						</DeleteArticle>
					</ArticleModify>
				)}
				<HeaderText {...props}>{text}</HeaderText>
			</HeaderWrapper>
		</HeaderContainer>
	);
}

export default withRouter(connect()(Header));
