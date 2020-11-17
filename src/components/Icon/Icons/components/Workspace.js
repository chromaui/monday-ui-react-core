/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Workspace = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.38462C2.25 8.79883 2.58579 9.13462 3 9.13462H8.38462C8.79883 9.13462 9.13462 8.79883 9.13462 8.38462V3C9.13462 2.58579 8.79883 2.25 8.38462 2.25H3ZM3.75 7.63462V3.75H7.63462V7.63462H3.75ZM11.6154 2.25C11.2012 2.25 10.8654 2.58579 10.8654 3V8.38462C10.8654 8.79883 11.2012 9.13462 11.6154 9.13462H17C17.4142 9.13462 17.75 8.79883 17.75 8.38462V3C17.75 2.58579 17.4142 2.25 17 2.25H11.6154ZM12.3654 7.63462V3.75H16.25V7.63462H12.3654ZM2.25 11.6154C2.25 11.2012 2.58579 10.8654 3 10.8654H8.38462C8.79883 10.8654 9.13462 11.2012 9.13462 11.6154V17C9.13462 17.4142 8.79883 17.75 8.38462 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17V11.6154ZM3.75 12.3654V16.25H7.63462V12.3654H3.75ZM11.6154 10.8654C11.2012 10.8654 10.8654 11.2012 10.8654 11.6154V17C10.8654 17.4142 11.2012 17.75 11.6154 17.75H17C17.4142 17.75 17.75 17.4142 17.75 17V11.6154C17.75 11.2012 17.4142 10.8654 17 10.8654H11.6154ZM12.3654 16.25V12.3654H16.25V16.25H12.3654Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Workspace.displayName = 'Workspace';
Workspace.propTypes = {
  size: PropTypes.string
}
export default Workspace;
/* tslint:enable */
/* eslint-enable */