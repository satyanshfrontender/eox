import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.id}</h1>
      <p className="news__desc">{data.title}</p>
      <p className="news__source">{data.url}</p>
      <span className="news__author">{data.publisher}</span> <br />
      <span className="news__published">{data.category}</span>
      <span className="news__hostname">{data.hostname}</span>
      <span className="news__timestamp">{data.timestamp}</span>
    </div>
  );
}

export default NewsArticle;