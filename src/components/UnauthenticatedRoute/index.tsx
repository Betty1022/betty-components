import React, {FC} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {querystring} from '../../utils/tools';

type Iprops = {
  component: any;
  props: any;
};

const UnauthenticatedRoute: FC<Iprops> = ({component: C, props: cProps, ...rest}) => {
  const redirect = querystring('redirect');
  return (
    <Route
      {...rest}
      render={(props): React.ReactNode => (!cProps ? <C {...props} {...cProps} />
        : <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />)}
    />
  );
};

export default UnauthenticatedRoute;
