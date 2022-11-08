import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
const $ = window.$;

ReactDOM.render(<App />, document.getElementById("root"));

const image_input = document.querySelector("#image-input");

// This is image uploader
// image_input.addEventListener("change", function() {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     document.querySelector(".picture-box").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });