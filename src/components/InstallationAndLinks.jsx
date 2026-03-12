import React from 'react';
import InstallationInstructions from '@site/src/components/InstallInstructions';
import ModuleLinks from '@site/src/components/ModuleLinks';

export default function InstallationAndLinks({ github, npm }) {
  return (
    <div>
      <InstallationInstructions pkg={npm} />
      <ModuleLinks github={github} npm={npm} />
    </div>
  );
}
