import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';

import colors from '../../utils/colors';

import { Form } from 'formik';

import { TextField } from 'formik-material-ui';


export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`font-weight: 400;`;

export const StyledLink = styled(Link)`
	color: ${colors.green};
	margin-top: -1.5rem;
	font-size: 1.4rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledForm = styled(Form)`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 500px) {
     width: 45rem;   
    }

`;

export const StyledTextField = styled(TextField)`
    width: 100%;


`;

/* export const StyledButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	text-decoration: none;
	display: flex;
	align-self: flex-end;
	background: ${colors.green};
	color: white;
	padding: 1rem 2rem;
	font-size: 1.6rem;
	margin-top: 1rem;

	&:hover {
		background-color: #3e8e41;
		opacity: 0.9;
		cursor: pointer;
	}

	:focus {
		outline: 0;
	}
`;
 */