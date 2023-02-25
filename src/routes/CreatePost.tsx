import React from "react";

export const CreatePost = () => {
  return (
    <div className="">
      <div>
        <h1>勉強時間を記録する</h1>
        <input type="text" placeholder="タイトルを記入" />
      </div>
      <div>
        <div>投稿</div>
        <textarea placeholder="投稿内容を記入"></textarea>
      </div>
      <button>投稿する</button>
    </div>
  );
};
