import './CommentList.scss';
import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<{ comments: Comment[] }> = ({
  comments,
}) => (
  <>
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </>
);
