import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

function getUserById(id: number) {
  return usersFromServer.find(user => user.id === id) || null;
}

function getPostComments(postId: number) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getPostComments(post.id),
}));

export const App: React.FC<{ posts: Post[] }> = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
