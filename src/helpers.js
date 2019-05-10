export const helloWorld = msg => {
  console.log(msg + 1);
};

export const makeImgElement = imgSrc => {
  const img = document.createElement("img");
  img.alt = "test webpack loaders";
  img.src = imgSrc;
  const body = document.querySelector("body");
  body.appendChild(img);
};
