const boxes = document.querySelectorAll('.box p');
const texts = document.querySelectorAll('.box span');

const copyToClipboard = (e) => {
  const textArea = document.createElement('textarea');
  const span = e.target.nextElementSibling;
  textArea.value = span.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

boxes.forEach((box) => {
  box.addEventListener('click', copyToClipboard);
});
