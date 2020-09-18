import React from 'react';
import { TextArea } from '@blueprintjs/core';
import './Editor.css';
const showdown = require('showdown');
showdown.setFlavor('github');

const Editor = ({ text, setText, setHTMLText }) => {
    const converter = new showdown.Converter({ simpleLineBreaks: false });

    const handleTextChange = (e) => {
        const text = e.target.value;
        const html = converter.makeHtml(text);
        setHTMLText(html);
        setText(text);
    };

    return (
        <div className='editor-wrap'>
            <TextArea
                fill={true}
                wrap={'true'}
                value={text}
                onChange={handleTextChange}
                placeholder='Start typing here to create your README file ...'
                growVertically={false}
            />
        </div>
    );
};

export default Editor;
