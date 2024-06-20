// textNode.js

import { useState, useEffect, useRef } from 'react';
import AbstractNode, { getLeftHandle } from "../abstractNode";

export const TextNode = ({ id, data }) => {
  const inputs = ['input', 'car'];

  const handleClick = () => {
    if (editableDivRef.current) {
      editableDivRef.current.focus();
    }
  };
  const editableDivRef = useRef(null);
  const [children, setChildren] = useState([]);

  const addNewSpan = (uniqueName) => {
    setChildren((prevChildren) => {
      const nodeCount = prevChildren.length + 2;
      if (prevChildren.findIndex(el => el.key === uniqueName) > -1) {
        console.log('Duplicate Input Detected!');
        return prevChildren;
      }
      const update = [
        ...prevChildren,
        getLeftHandle({ key: uniqueName, count: nodeCount, type: 'source', id: `${id}-output-${uniqueName}` })
      ];

      const prev = [];
      update.map((child, index) => {
        const topPosition = (index + 1) * ((100) / (nodeCount));
        const updatedStyle = {
          ...child,
          props: {
            ...child.props,
            style: {
              ...child.style,
              top: topPosition + '%'
            }
          }
        };
        prev.push(updatedStyle);
      })
      return prev;
    });
  };

  useEffect(() => {
    const handleInput = (e) => {
      const content = editableDivRef.current.innerHTML;

      for (let i = 0; i < inputs.length; i++) {
        const input = '{{' + inputs[i] + '}}';
        if (content.includes(input)) {
          const updatedContent = content.replace(input, '<span contenteditable="false" class="box">' + inputs[i] + '</span>');
          editableDivRef.current.innerHTML = updatedContent;
          handleClick();

          addNewSpan(inputs[i]);
        } else if (content === '' || content === null) {
          setChildren([]);
        }

      }

      // Move caret to the end
      setEndOfContenteditable(editableDivRef.current);
    }
    const div = editableDivRef.current;
    if (div) {
      div.addEventListener('input', handleInput);
    }

    return () => {
      if (div) {
        div.removeEventListener('input', handleInput);
      }
    };
  }, []);



  useEffect(() => {
    if (editableDivRef.current) {
      editableDivRef.current.focus();
    }
    // document.getElementById('custom-input-box').focus();
  }, []);


  const setEndOfContenteditable = (contentEditableElement) => {
    let range, selection;
    if (document.createRange) {
      range = document.createRange();
      range.selectNodeContents(contentEditableElement);
      range.collapse(false);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (document.selection) {
      range = document.body.createTextRange();
      range.moveToElementText(contentEditableElement);
      range.collapse(false);
      range.select();
    }
    handleClick();
  };

  const handles = {
    left: [],
    right: [
      { type: 'source', id: 'text-node' },
    ],
  };
  const content = (<div>
    <label>
      Text
      <div
      autoFocus
        aria-multiline="true" autoCapitalize="false" autoComplete="false" autoCorrect="false" spellCheck="true"
        role='textbox'
        contentEditable="true"
        ref={editableDivRef}
      />
    </label>
  </div>);

  return (
    <>
      {children}
      <AbstractNode title='Text' handles={handles} content={content} />
    </>
  );
}
