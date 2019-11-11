import styled from 'styled-components/macro';

export const HomeContainer = styled.div``;

export const HomeRow = styled.div`
	display: flex;
	justify-content: center;
`;

export const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5%;
	@media (min-width: 770px) {
		width: 70rem;
		align-items: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const Paragraph = styled.p`
	width: 100%;
	@media (min-width: 770px) {
		width: 70%;
	}
`
