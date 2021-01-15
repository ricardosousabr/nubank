import React from 'react';

import './styles.scss';

function Link({ inverted, url, text, up }) {
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
            viewBox="0 0 24 24"
            width="24"
            height="24"
            transform={`rotate(${up && '-45'})`}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill={`${inverted ? '#8921BE' : '#FFFFFF'}`}
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Link;
