import React from 'react';

import './PostList.scss';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
