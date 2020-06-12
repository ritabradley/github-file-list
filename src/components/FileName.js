import React from 'react';
import FileIcon from './FileIcon';
import PropTypes from 'prop-types';

const FileName = ({ file }) => {
    return (
        <>
            <FileIcon file={file} />
            <span className='file-name'>{file.name}</span>
        </>
    );
};

export default FileName;

FileName.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string,
    }),
};
