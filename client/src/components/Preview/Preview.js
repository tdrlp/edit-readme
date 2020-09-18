import React from 'react';
import { TextArea } from '@blueprintjs/core';
import './Preview.css';

const Preview = ({ text, textAreaProps }) => {
    return (
        <div className='preview-wrap'>
            <TextArea readOnly={true} value={text} {...textAreaProps} />
        </div>
    );
};

export default Preview;
