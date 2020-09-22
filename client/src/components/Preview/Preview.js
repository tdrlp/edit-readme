import React from 'react';
import { Icon } from '@blueprintjs/core';
import './Preview.css';

const Preview = ({ text }) => {
    return (
        <div className='preview-wrap'>
            <div className='preview-header'>
                <Icon icon='presentation' />
                <span className='header'>Preview</span>
            </div>
            <div
                className='preview'
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
};

export default Preview;
