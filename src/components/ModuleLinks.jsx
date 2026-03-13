import React from 'react';

export default function ModuleLinks({ github, npm }) {
  return (
    <div style={{ marginTop: 16 }}>
      <h2>Links</h2>
      {github && (
        <div>
          GitHub: <a href={`https://github.com/testla-project/${github}`} target="_blank" rel="noopener noreferrer">https://github.com/testla-project/{github}</a>
        </div>
      )}
      {npm && (
        <div>
          NPM: <a href={`https://www.npmjs.com/package/@testla/${npm}`} target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/@testla/{npm}</a>
        </div>
      )}
      {github && (
        <div style={{ marginTop: 16 }}>
            Do you find this module useful? Give it a ⭐ star on <a href={`https://github.com/testla-project/${github}`} target="_blank" rel="noopener noreferrer">GitHub</a>!<br />
            Found a bug? Need a feature? Raise <a href={`https://github.com/testla-project/${github}/issues`} target="_blank" rel="noopener noreferrer">an issue</a> or submit a pull request.
        </div>
      )}
    </div>
  );
}
