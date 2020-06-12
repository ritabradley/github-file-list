import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ file }) => {
    return (
        <span className='file-icon'>
            <i className={`fas fa-${file.type}`} />
        </span>
    );
};

export default FileIcon;

FileIcon.propTypes = {
    file: PropTypes.shape({
        type: PropTypes.string,
    }),
};
