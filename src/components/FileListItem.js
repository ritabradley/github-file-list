import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';
import PropTypes from 'prop-types';

const FileListItem = ({ file }) => {
    return (
        <tr className='file-list-item'>
            <td>
                <FileName file={file} />
            </td>
            <td>
                <CommitMessage commit={file.latestCommit} />
            </td>
            <td className='age'>
                <Time time={file.updated_at} />
            </td>
        </tr>
    );
};

export default FileListItem;

FileListItem.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string,
        commitMessage: PropTypes.string,
        lastModified: PropTypes.string,
    }).isRequired,
};
