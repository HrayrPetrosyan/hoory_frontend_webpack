import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { profileIdSelector } from '../modules/Profile/selector';

function UnAuthenticedRoute(props) {
    const profileId = useSelector((state) => profileIdSelector(state));

    if (profileId) return <Redirect to="/dashboard" />;
    return (
        <Route {...props} />
    );
}

export default UnAuthenticedRoute;
