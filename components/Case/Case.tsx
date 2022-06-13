import React from 'react';

type PhotosType = {};

type CaseTypes = {
  title: string;
  link: string;
  category: string;
  works: string;
  photos: string;
};

function Case({ title, link, category, works, photos }: CaseTypes) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <a href={link}>{link}</a>
      </div>
      <div>
        <p>{category}</p>
        <p>{works}</p>
        <div>{photos}</div>
      </div>
    </div>
  );
}

export default Case;
