import { useEffect, useRef } from 'react';

import IedCard from './assets/img/1444h.jpg';

const App = () => {

  const canvasPreview = useRef();
  let context     = null;

  var canvas = document.getElementById('responsive-canvas');
  var heightRatio = 1.5;
  canvas.height = canvas.width * heightRatio;

  useEffect(() => {
    context = canvasPreview.current.getContext("2d");
    const img = new Image();
    img.onload = function () {
      context.drawImage(img, 0, 0);
      context.scale(0.45, 0.45);
      context.font = "bold 50pt hsimplified";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("Selamat Hari Raya Idul Fitri!", 1175, 2700);
    }

    img.src = IedCard;
  }, [])

  return (
    <div className="container">
      <div className="content-wrapper">
        <canvas ref={canvasPreview} className="canvas-preview" width={300} height={600}></canvas>

        <div className="content">
          <input type="text" className="input-filltext" />
          <div className="btn-wrapper">
            <button className="btn-tampilkan">Tampilkan</button>
            <button className="btn-download">Download</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;