// inputNode.js

import { useState } from 'react';
import AbstractNode, { GetContentSelector } from "../abstractNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handles = {
    left: [],
    right: [
      { type: 'source', id: 'input-node' },
    ],
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
    <AbstractNode title='Input' handles={handles} content={content} />
  );
}
