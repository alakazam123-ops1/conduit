import { combineReducers } from 'redux';

import articles from './modules/articles';
import currentUser from './modules/currentUser';
import profile from './modules/profile';
import tags from './modules/tags';
import comments from './modules/comments';
import singleArticle from './modules/singleArticle';


const rootReducer = combineReducers({
	articles,
	currentUser,
	profile,
	tags,
	comments,
	singleArticle,
	
});

export default rootReducer;
