import React from 'react';

export default function Home() {
  return (
    <>
      <h3>Frontend</h3>
      <p>
        I've cloned our startcode repo, opened a terminal and typed in npm
        install. Changed the backend url in settings.js to match my backends
        url. Then i builded the project and deployed to surge.
      </p>
      <h3>Backend</h3>
      <p>
        I've cloned our backend startcode repo, changed the address in the
        pom-file, to my own droplet. Set up travis pipeline and exported my old
        users and pws db to the one on my droplet.
      </p>
    </>
  );
}
