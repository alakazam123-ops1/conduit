import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import ArticleAuthorProfile from './pages/ArticleAuthorProfile/ArticleAuthorProfile';
import UserProfile from './pages/UserProfile/UserProfile';
import ArticleOverview from './pages/ArticleOverview/ArticleOverview';
import UserSettings from './pages/UserSettings/UserSettings';
import CreateNewArticle from './pages/CreateNewArticle/CreateNewArticle';
import EditArticle from './pages/EditArticle/EditArticle';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';

import { connect } from 'react-redux';

function App({ currentUser }) {

	return (
		<div>
			<Navbar currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signIn" render={() => (!currentUser ? <SignIn /> : <Redirect to="/" />)} />
				<Route path="/signUp" render={() => (!currentUser ? <SignUp /> : <Redirect to="/" />)} />
				<Route path="/userSettings" render={() => (currentUser ? <UserSettings /> : <Redirect to="/" />)} />
				<Route path="/createNewArticle" render={() => (currentUser ? <CreateNewArticle /> : <Redirect to="/" />)} />
				<Route path="/editArticle/:articleSlug" render={({...props}) => (currentUser ? <EditArticle {...props} /> : <Redirect to="/" />)} />
				<Route path="/article/:articleSlug" component={ArticleOverview} />
				<Route path="/articleAuthorProfile/:userName" component={ArticleAuthorProfile} />
				<Route path="/userProfile/:userName" component={UserProfile} />
				<Route path="*" exact render={({history}) => history.goBack()} />
			</Switch>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.userInfo
	};
};

export default connect(mapStateToProps)(App);
