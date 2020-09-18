import React from 'react';
import './Preview.css';

const Preview = ({ text }) => {
    return (
        <div className='preview-wrap'>
            <div
                className='preview'
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
};

export default Preview;
