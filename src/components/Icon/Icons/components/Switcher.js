/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Switcher = ({size, ...props}) => (
  <svg viewBox="0 0 16 17" fill="currentColor" width={ size || "16" } height={ size || "17" } {...props}>
    <g fill="currentColor" clipPath="url(#clip0_1898_40324)">
      <path d="M3.68499 2.71044C3.68499 3.66968 2.90737 4.4473 1.94813 4.4473.988882 4.4473.211262 3.66968.211262 2.71044.211262 1.75119.988882.973572 1.94813.973572 2.90737.973572 3.68499 1.75119 3.68499 2.71044zM9.47453 2.71044C9.47453 3.66968 8.69691 4.4473 7.73767 4.4473 6.77843 4.4473 6.0008 3.66968 6.0008 2.71044 6.0008 1.75119 6.77843.973572 7.73767.973572 8.69691.973572 9.47453 1.75119 9.47453 2.71044zM15.2641 2.71044C15.2641 3.66968 14.4865 4.4473 13.5272 4.4473 12.568 4.4473 11.7904 3.66968 11.7904 2.71044 11.7904 1.75119 12.568.973572 13.5272.973572 14.4865.973572 15.2641 1.75119 15.2641 2.71044zM3.68499 8.49999C3.68499 9.45923 2.90737 10.2368 1.94813 10.2368.988882 10.2368.211262 9.45923.211262 8.49999.211262 7.54074.988882 6.76312 1.94813 6.76312 2.90737 6.76312 3.68499 7.54074 3.68499 8.49999zM3.68499 14.2895C3.68499 15.2488 2.90737 16.0264 1.94813 16.0264.988882 16.0264.211262 15.2488.211262 14.2895.211262 13.3303.988882 12.5527 1.94813 12.5527 2.90737 12.5527 3.68499 13.3303 3.68499 14.2895zM9.47453 14.2895C9.47453 15.2488 8.69691 16.0264 7.73767 16.0264 6.77843 16.0264 6.0008 15.2488 6.0008 14.2895 6.0008 13.3303 6.77843 12.5527 7.73767 12.5527 8.69691 12.5527 9.47453 13.3303 9.47453 14.2895zM15.2641 14.2895C15.2641 15.2488 14.4865 16.0264 13.5272 16.0264 12.568 16.0264 11.7904 15.2488 11.7904 14.2895 11.7904 13.3303 12.568 12.5527 13.5272 12.5527 14.4865 12.5527 15.2641 13.3303 15.2641 14.2895zM9.47453 8.49999C9.47453 9.45923 8.69691 10.2368 7.73767 10.2368 6.77843 10.2368 6.0008 9.45923 6.0008 8.49999 6.0008 7.54074 6.77843 6.76312 7.73767 6.76312 8.69691 6.76312 9.47453 7.54074 9.47453 8.49999zM15.2641 8.49999C15.2641 9.45923 14.4865 10.2368 13.5272 10.2368 12.568 10.2368 11.7904 9.45923 11.7904 8.49999 11.7904 7.54074 12.568 6.76312 13.5272 6.76312 14.4865 6.76312 15.2641 7.54074 15.2641 8.49999z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1898_40324">
        <path fill="#fff" transform="translate(.211 .974)" d="M0 0H15.053V15.053H0z" />
      </clipPath>
    </defs>
  </svg>
);
Switcher.displayName = 'Switcher';
Switcher.propTypes = {
  size: PropTypes.string
}
export default Switcher;
/* tslint:enable */
/* eslint-enable */