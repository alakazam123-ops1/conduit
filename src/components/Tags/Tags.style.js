
import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';

export const TagsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10%;
	/* 	margin-top: 2rem; */
	@media (min-width: 770px) {
		justify-content: flex-start;
		width: 20%;
		order: 2;
	}
`;

export const Paragraph = styled.p`
	font-size: 1.4rem;
	color: ${({ loading }) => (loading ? 'black' : ' #818a91')};
`;

/* export const Paragraph = (({ loading, ...props }) => <p {...props} />)`
font-size: 1.4rem;
color: ${({ loading }) => (loading ? 'red' : ' #818a91')};
`; */

export const TagsList = styled.div`
	background: #f3f3f3;
	display: flex;
	flex-wrap: wrap;
	margin-top: -1rem;
`;

export const StyledTag = styled(Link)`
	border: 0;
	background-color:#818a91;
	border-radius: 1rem;
    padding: 0.5rem 0.75rem;
	margin-right: 0.5rem;
	font-weight: 300;
	color: white;
    font-size: 1.1rem;
	line-height: 1.8rem;
    text-decoration: none;
    margin-top: .5rem;
    
	&:hover {
		background-color: #66686b;
	}
`;
