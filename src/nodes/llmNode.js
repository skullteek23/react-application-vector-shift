// llmNode.js

import AbstractNode from "../abstractNode";

export const LLMNode = ({ id, data }) => {
  const handles = {
    left: [
      { type: 'target', id: 'llm-1' },
    ],
    right: [
      { type: 'source', id: 'llm-2' },
    ],
  };
  const content = (<div> <span>This is a LLM.</span> </div>);
  return (
    <AbstractNode title='LLM' handles={handles} content={content} />
  );
}
