import React from 'react';
import { Formik, Field } from 'formik';

import Button from '../../components/Button/Button';

import { UserSettingsContainer, Title, StyledTextField, StyledForm } from './UserSettings.style';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { updateUser } from '../../redux/modules/currentUser';

function UserSettings({ currentUser, updateUser, history }) {
	console.log(currentUser);
	return (
		<UserSettingsContainer>
			<Title>Your Settings</Title>
			<Formik
				initialValues={{
					profilePictureUrl: currentUser.image ? `${currentUser.image}` : '',
					username: `${currentUser.username}`,
					bio: currentUser.bio ? `${currentUser.bio}` : '',
					email: `${currentUser.email}`,
					password: ''
				}}
				onSubmit={(values, actions) => {
					const userObj = {
						user: {
							username: values.username
						}
					};
					console.log(values.password);
					updateUser(userObj, actions);
					history.push('/')
				}}
			>
				{({ errors, touched, values }) => (
					<StyledForm>
						<Field
							name="profilePictureUrl"
							type="text"
							component={StyledTextField}
							margin="dense"
							variant="outlined"
							label="URL of profile picture"
						/>

						<Field
							name="username"
							type="text"
							component={StyledTextField}
							label="Username"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="bio"
							type="text"
							component={StyledTextField}
							height
							margin="normal"
							variant="outlined"
							label="Short bio about you"
						/>
						<Field
							name="email"
							type="email"
							component={StyledTextField}
							autoComplete="current-email"
							label="Email"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="password"
							component={StyledTextField}
							type="password"
							inputProps={{
								form: {
									autoComplete: 'on'
								}
							}}
							name="password"
							label="New Password"
							margin="normal"
							variant="outlined"
						/>

						<Button type="submit">
							Update Settings
						</Button>
					</StyledForm>
				)}
			</Formik>
		</UserSettingsContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.userInfo
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (updatedUserObj) => dispatch(updateUser(updatedUserObj))
	};
};

/* export default connect(mapStateToProps, mapDispatchToProps)(UserSettings) */

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSettings));
