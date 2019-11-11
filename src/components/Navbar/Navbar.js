import React from 'react';

import { connect } from 'react-redux';

import { NavbarContainer, NavbarBrand, NavLinks, StyledLink } from './Navbar.style';

function Navbar({ currentUser }) {
	/* 	console.log(currentUser);
 */
	return (
		<NavbarContainer>
			<NavbarBrand to="/">conduit</NavbarBrand>
			<NavLinks>
				<StyledLink to="/">Home</StyledLink>
				{!currentUser && <StyledLink to="/signIn">Sign in</StyledLink>}
				{!currentUser && <StyledLink to="/SignUp">Sign Up</StyledLink>}
				{currentUser && <StyledLink to="/createNewArticle">New Post</StyledLink>}
				{currentUser && <StyledLink to="/userSettings">Settings</StyledLink>}
				{currentUser && (
					<StyledLink to={`/userProfile/${currentUser.username}`}>{currentUser.username}</StyledLink>
				)}
			</NavLinks>
		</NavbarContainer>
	);
}

export default Navbar;
