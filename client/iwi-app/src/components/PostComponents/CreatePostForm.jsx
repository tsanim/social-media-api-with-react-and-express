import React from 'react';
import PostForm from '../Forms/PostForm';
import UserDataLink from '../UserInfoComponents/UserDataLink';
import PropTypes from 'prop-types';

function MakePostDiv({ user, uploadHandler }) {
    return (
        <div id="makeAPost">
            <figure className="userInfo">
                <UserDataLink user={user} />
            </figure>
            <PostForm uploadHandler={uploadHandler} />
        </div>
    )
}

MakePostDiv.propTypes = {
    user: PropTypes.object,
    uploadHandler: PropTypes.func,
}

export default MakePostDiv;