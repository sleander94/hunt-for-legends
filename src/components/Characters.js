import React from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Characters = ({ image, chars, charURLs }) => {
  return (
    <div id="characterRef">
      <img src={charURLs[0]}></img>
      <img src={charURLs[1]}></img>
      <img src={charURLs[2]}></img>
    </div>
  );
};

export default Characters;
