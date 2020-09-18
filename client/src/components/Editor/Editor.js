import React from 'react';
import { TextArea } from '@blueprintjs/core';
import './Editor.css';

const Editor = ({ text, setText, textAreaProps }) => {
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className='editor-wrap'>
            <TextArea
                value={text}
                onChange={handleTextChange}
                placeholder='Start typing to create your README file ...'
                {...textAreaProps}
            />
        </div>
    );
};

export default Editor;
