
const button = document.getElementById('myButton');
const image = document.getElementById('myImage');

button.addEventListener('click', () => {
  const currentScale = parseFloat(getComputedStyle(image).transform.split('(')[1].split(')')[0]);
  const newScale = currentScale * 0.9; // Adjust zoom factor here

  image.style.transform = `scale(${newScale})`;
});

function getComputedStyle(element) {
  return window.getComputedStyle(element);
}