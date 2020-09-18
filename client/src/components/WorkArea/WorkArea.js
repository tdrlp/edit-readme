import React, { useState } from 'react';
import FileName from '../FileName/FileName';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import './WorkArea.css';

const WorkArea = () => {
    const [text, setText] = useState('');

    const textAreaProps = { growVertically: false, fill: true, wrap: true };
    return (
        <div className='workarea-wrap'>
            <FileName />
            <Editor
                text={text}
                setText={setText}
                textAreaProps={textAreaProps}
            />
            <Preview text={text} textAreaProps={textAreaProps} />
        </div>
    );
};

export default WorkArea;
