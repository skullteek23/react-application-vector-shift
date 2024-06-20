import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

/**
 * Abstracts the node handle, content and return a configurable common abstract node structure
 * @param {*} param0 
 * @returns 
 */
export default function AbstractNode({ title, handles, content, customClass }) {
  return (
    <div className={`abstractNode ${customClass || ''}`}>
      {
        handles?.left?.map((handle, index) => (
          <Handle
            key={`handle-left-${index}`}
            type={handle?.type}
            position={Position.Left}
            id={handle?.id}
            style={{ top: `${(index + (1 / 2)) * ((100) / (handles?.left?.length))}%` }}
          />
        ))
      }
      <h2 className="title"> {title} </h2>
      {content}
      {
        handles?.right?.map((handle, index) => (
          <Handle
            key={`handle-right-${index}`}
            type={handle?.type}
            position={Position.Right}
            id={handle?.id}
            style={{ top: `${(index + (1 / 2)) * ((100) / (handles?.right?.length))}%` }}
          />
        ))
      }
    </div>
  )
}

/**
 * Returns the left handle node joint
 * @param {*} param0 
 * @returns 
 */
export function getLeftHandle({ key, count, type, id }) {
  return (<Handle key={key} style={{ top: (100 / (count)) + '%' }} position={Position.Left} type={type} id={id} />)
}

/**
 * Returns the right handle node joint
 * @param {*} param0 
 * @returns 
 */
export function getRightHandle({ key, count, type, id }) {
  return (<Handle key={key} style={{ top: (100 / (count)) + '%' }} position={Position.Right} type={type} id={id} />)
}

/**
 * Returns the select options
 * @param {*} data 
 * @returns 
 */
export function GetContentSelector(data) {
  const [value, setInputType] = useState(data.value || 'Text');

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  return (<select value={value} onChange={handleTypeChange}>
    <option value="Text">Text</option>
    <option value="File">File</option>
  </select>)
}