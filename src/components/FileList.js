import React from 'react';
import FileListItem from './FileListItem';
import PropTypes from 'prop-types';

const FileList = ({ files }) => {
    return (
        <table className='file-list'>
            <tbody>
                {files.map((file) => (
                    <FileListItem key={file.id} file={file} />
                ))}
            </tbody>
        </table>
    );
};

export default FileList;

FileList.propTypes = {
    files: PropTypes.array,
};
