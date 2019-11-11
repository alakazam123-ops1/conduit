import React from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';

function SignIn({loading, error}) {
	return <AuthForm loading={loading} error={error} />;
}


const mapStateToProps = (state) => ({
	loading: state.currentUser.loading,
	error: state.currentUser.error
})

export default connect(mapStateToProps)(SignIn);
