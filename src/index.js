import style from './style.scss';

setTimeout(() => {
  const h1Ele = document.querySelector('h1');
  h1Ele.classList.add(style.red);

  const btnElem = document.querySelector('button');
  btnElem.addEventListener('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/hello');
    xhr.onload = function() {
        if (xhr.status === 200) {
          alert(xhr.responseText)
        }
        else {
          alert('error');
        }
    };
    xhr.send();
  });
}, 1000);
