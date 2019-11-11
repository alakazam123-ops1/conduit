import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import colors from '../../utils/colors';

export const ArticlesContainer = styled.div`
	width: 100%;
	@media (min-width: 770px) {
		order: 1;
		width: 70%;
	}
`;

export const StyledNavLink = styled(NavLink)`
    color: ${colors.green};
    text-decoration: none;
    margin-top: -10rem;
   
`;

export const ArticlesList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`;
