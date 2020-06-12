import React from 'react';
import PropTypes from 'prop-types';

const CommitMessage = ({ commit }) => {
    return <span className='commit-message'>{commit.message}</span>;
};

export default CommitMessage;

CommitMessage.propTypes = {
    commit: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }),
};
