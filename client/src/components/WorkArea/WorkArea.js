import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import './WorkArea.css';

const WorkArea = () => {
    const [text, setText] = useState('');
    const [HTMLText, setHTMLText] = useState('');

    return (
        <div className='workarea-wrap'>
            <Editor text={text} setText={setText} setHTMLText={setHTMLText} />
            <Preview text={HTMLText} />
        </div>
    );
};

export default WorkArea;
