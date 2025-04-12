import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user ? (
          <p>
            {' Posted by  '}

            <UserInfo user={post.user} />
          </p>
        ) : (
          <p data-cy="DeletedUserMessage">{' Posted by deleted user'}</p>
        )}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  </>
);
