/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Download = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.75 2.7002C10.75 2.28598 10.4142 1.9502 10 1.9502C9.58579 1.9502 9.25 2.28598 9.25 2.7002L9.25 10.5358L6.53236 7.79724C6.24059 7.50322 5.76572 7.5014 5.47171 7.79317C5.17769 8.08494 5.17587 8.55981 5.46764 8.85382L9.59471 13.0127C9.73552 13.1546 9.92716 13.2344 10.1271 13.2344C10.327 13.2344 10.5186 13.1546 10.6594 13.0127L14.7865 8.85382C15.0783 8.55981 15.0764 8.08494 14.7824 7.79317C14.4884 7.5014 14.0135 7.50322 13.7218 7.79724L10.75 10.7919V2.7002ZM3.75 16.3428L3.75 12.0193C3.75 11.6051 3.41421 11.2693 3 11.2693C2.58579 11.2693 2.25 11.6051 2.25 12.0193V16.3817C2.25 16.396 2.25041 16.4103 2.25123 16.4246C2.2777 16.886 2.51237 17.2915 2.85877 17.565C3.19773 17.8326 3.62517 17.9624 4.04876 17.9493L16.4514 17.9493C16.8749 17.9622 17.3022 17.8323 17.641 17.5648C17.9873 17.2915 18.2219 16.8863 18.2487 16.4252C18.2496 16.4107 18.25 16.3962 18.25 16.3817V12.0193C18.25 11.6051 17.9142 11.2693 17.5 11.2693C17.0858 11.2693 16.75 11.6051 16.75 12.0193V16.3424L16.7493 16.3439L16.7473 16.3481C16.7429 16.3562 16.7327 16.3708 16.7116 16.3875C16.6667 16.4229 16.5887 16.4536 16.4937 16.4499C16.4839 16.4495 16.4741 16.4493 16.4643 16.4493L4.03571 16.4493C4.02576 16.4493 4.01581 16.4495 4.00586 16.4499C3.91092 16.4537 3.83301 16.423 3.78822 16.3876C3.76714 16.371 3.75703 16.3565 3.75267 16.3485C3.75142 16.3461 3.75057 16.3443 3.75 16.3428Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Download.displayName = 'Download';
Download.propTypes = {
  size: PropTypes.string
}
export default Download;
/* tslint:enable */
/* eslint-enable */