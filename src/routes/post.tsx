import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppState } from "../store/rootReducer";
import { Post } from "../store/post/type";
import { fetchPostList } from "../store/post/action";

import LayoutMain from "../components/layout";

const PostComponent = () => {
  const dispatch = useDispatch();
  const { padding, data } = useSelector((state: AppState) => state?.post);

  useEffect(() => {
    dispatch(fetchPostList());
  }, []);

  return (
    <LayoutMain>
      <div className="container">
        <div className="post">
          {padding ? (
            <h3>Loading ...</h3>
          ) : (
            data?.map((post: Post, key: number) => {
              return (
                <div className="card" key={key}>
                  <div className="icon">
                    <img src={`https://robohash.org/${key}`} />
                  </div>
                  <h3 className="title">{post?.title}</h3>
                  <p className="body">{post?.body}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </LayoutMain>
  );
};

export default PostComponent;
