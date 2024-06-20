// outputNode.js

import { useState } from 'react';
import AbstractNode, { GetContentSelector } from "../abstractNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handles = {
    left: [
      { type: 'target', id: 'output-node' },
    ],
    right: [],
  };
  const content = (<div>
    <label>
      Name
      <input
        type="text"
        value={currName}
        onChange={handleNameChange}
      />
    </label>
    <label>
      Type
      {GetContentSelector(data)}
    </label>
  </div>);

  return (
    <AbstractNode title='Output' handles={handles} content={content} />
  );
}
