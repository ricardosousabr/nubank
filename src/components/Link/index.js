import React from 'react';

import './styles.scss';

function Link({ inverted, url, text }) {
  return (
    <>
      <div className="link">
        <a
          className={`link__text ${inverted && 'link__text--inverted'}`}
          href={url}
        >
          {text}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 21 20"
            color="currentColor"
            role="img"
          >
            <title>Arrow Right</title>
            <g>
              <path
                d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </a>
      </div>
    </>
  );
}

export default Link;
