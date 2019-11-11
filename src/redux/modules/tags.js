import axiosInstance from '../../utils/axios';

const FETCH_POPULAR_TAGS_DONE = 'FETCH_POPULAR_TAGS_DONE';

const fetchPopularTagsDone = (tags) => ({
	type: FETCH_POPULAR_TAGS_DONE,
	payload: tags
});

export default function tags(state = {}, action) {
	switch (action.type) {
		case FETCH_POPULAR_TAGS_DONE:
			return { ...state, tagsList: action.payload };
		default:
			return state;
	}
}

export const fetchPopularTags = () => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get('/api/tags');
			dispatch(fetchPopularTagsDone(response.data.tags));
		} catch (error) {
			console.log(error.response);
		}
	};
};
