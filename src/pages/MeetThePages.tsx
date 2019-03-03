import React from 'react';
import Article from '../components/Article';
import Backing from '../components/Backing';

export default function Component() {
  return (
    <Backing>
      <Article>
        <h1>GitHub Pages tested</h1>
        <div>
          <p>Just get it and use it. Easy peasy.</p>
          <p>
            Read the instruction here:{' '}
            <a href="https://pages.github.com">pages.github.com</a>.
          </p>
          <p>What is next?</p>
        </div>
      </Article>
    </Backing>
  );
}
