let timeleft = 99;
let downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById('counter').innerHTML = 'Finished';
  } else {
    document.getElementById('counter').innerHTML = timeleft;
  }
  timeleft-=1;
}, 1000);

let string = 'AEIOUBCDFGHJKLMNPQRS';

let obj = {};
let tile = 0;
for (let i = 0; i < string.length; i++) {
  let ranNum = Math.floor(Math.random() * 4 + 1);
  tile += ranNum;
  obj[string[i]] = ranNum;
}
const tiles = document.getElementById('tiles');
tiles.innerText = tile;

let stringScore = {
  A: 1,E: 3,I: 3,O: 2,U: 1,F: 4,G: 2,H: 4,J: 8,K: 5,
  L: 1,M: 3,N: 1,P: 3,Q: 10,
  R: 1,S: 1,T: 1,V: 4,W: 4,
  X: 8, Y: 4,Z: 10,B:2,C:1,D:1,
};
let Score = document.getElementById('Score');
let second = document.getElementById('second');
let charcter= document.getElementById('charcter');
var st = ""
for (let j = 0; j < string.length; j++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'stack');
  let h2 = document.createElement('h2');
  h2.innerText = string[j];
  h2.setAttribute('class', 'alphabate');
  let p = document.createElement('p');
  p.innerText = obj[string[j]];
  p.setAttribute('class', 'count');
  div.addEventListener('click', () => {
    let count = document.getElementById('counter').innerText;
    if (obj[string[j]] == 1 && count !== 'time over') 
    if (p.innerText == 1) {
      p.innerText = '';
      h2.innerText = '';
      tiles.innerText -= 1;
    charcter.innerText += string[j];
      console.log(stringScore[string[j]]);
      Score.innerText = +Score.innerText + +stringScore[string[j]];
    }
    if (p.innerText > 0) {
     
      tiles.innerText -= 1;
      p.innerText -= 1;
      charcter.innerText += string[j];
      console.log(stringScore[string[j]]);
      Score.innerText = +Score.innerText + +stringScore[string[j]];
    }
  });
  div.append(h2, p);
  second.append(div);
}