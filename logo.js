export const sunLogo = (canvaIconContainer)=> {

  let rays = document.createElement('div');
  rays.id = 'rays';
  rays.className = 'rays';
  let sun = document.createElement('div');
  sun.id = 'sun';
  sun.className = 'sun';
 
  canvaIconContainer.append(rays);
  canvaIconContainer.append(sun);
      

}


// sunsset logo
export const moonLogo = (canvaIconContainer)=> {

let moon = document.createElement('div');
moon.className ='moon';


 canvaIconContainer.append(moon);


}





//logo canvas
const canvasElements = document.querySelectorAll('.logo');
const ctxArray = [];

// Obtenir le contexte pour chaque élément canvas
canvasElements.forEach((canvas) => {
  const ctx = canvas.getContext('2d');
  ctxArray.push(ctx);
});

// pos content canvas
let sunPosition = 0;
let cloudPosition = 0;
let cloudPosition2 = 0;

function drawLogo() {
  // Parcourir tous les contextes et dessiner sur chaque canvas
  ctxArray.forEach((ctx) => {
    // delete canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // sun
      ctx.fillStyle = '#e78109';
      ctx.beginPath();
      ctx.arc(ctx.canvas.width / 2 + sunPosition, ctx.canvas.height / 2, 40, 0, Math.PI * 2);
      ctx.fill();
    // clouds
    ctx.fillStyle = '#f6f4f3';
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2 - 40 + cloudPosition, ctx.canvas.height / 2 - 10, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + 40 + cloudPosition, ctx.canvas.height / 2 - 10, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + cloudPosition, ctx.canvas.height / 2 - 30, 40, 0, Math.PI * 2);
    ctx.fill();



    ctx.fillStyle = '#cac9c5';
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2 - 30 + cloudPosition2, ctx.canvas.height / 2 - 5, 20, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + 30 + cloudPosition2, ctx.canvas.height / 2 - 5, 30, 0, Math.PI * 2);
    ctx.arc(ctx.canvas.width / 2 + cloudPosition2, ctx.canvas.height / 2 - 5, 30, 0, Math.PI * 2);
    ctx.fill();
  
  });

  // update positions
  sunPosition += 1;
  cloudPosition += 1.5;
  cloudPosition2 += 1.3;

  // update pos after at the end of the canvas
  ctxArray.forEach((ctx) => {
    if (sunPosition > ctx.canvas.width) {
      sunPosition = -40;
    }

    if (cloudPosition > ctx.canvas.width + 40) {
      cloudPosition = -40;
    }

    if (cloudPosition2 > ctx.canvas.width + 10) {
      cloudPosition2 = -40;
    }
  });

  // repeat animation
  requestAnimationFrame(drawLogo);
}

// start animation
drawLogo();
