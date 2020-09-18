import React from 'react';
import { Icon, InputGroup, Tooltip } from '@blueprintjs/core';
import './FileName.css';

const FileName = () => {
    return (
        <div className='filename-wrap'>
            <Tooltip
                content='The file name is for display purposes only.'
                position='right'
                targetClassName='max-width'
            >
                <InputGroup
                    leftIcon='git-repo'
                    defaultValue='README.md'
                    fill={true}
                    large={true}
                    readOnly={true}
                />
            </Tooltip>
        </div>
    );
};

export default FileName;
