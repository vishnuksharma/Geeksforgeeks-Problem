const w = 20;
const h = 4;

const drawLine = w => {
  let line = '';
  for (let i = 0; i < w; i++){
    line = `${line}-`
  }
  for(let k = 0; k < h; k++){
    for (let i = 1; i < w; i++){
      if (i === 1){
        line = `${line}\n|`;
      }
      if (i === w-1){
        line = `${line} |`;
      }
      if (i !== 1 && i !== w) {
        line = `${line} `;
      }
    
    }
  }
  line = `${line}\n`
  for (let i = 0; i < w; i++){
    line = `${line}-`
  }
  console.log(line);
}
const drawCanvas = () => {
  drawLine(w);
}

drawCanvas();