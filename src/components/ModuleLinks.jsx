import React from 'react';

export default function ModuleLinks({ github, npm }) {
  return (
    <div style={{ marginTop: 16 }}>
      <h2>Links</h2>
      {github && (
        <div>
          Github: <a href={`https://github.com/testla-project/${github}`} target="_blank" rel="noopener noreferrer">https://github.com/testla-project/{github}</a>
        </div>
      )}
      {npm && (
        <div>
          NPM: <a href={`https://www.npmjs.com/package/@testla/${npm}`} target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/@testla/{npm}</a>
        </div>
      )}
    </div>
  );
}
