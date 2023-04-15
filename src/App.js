import { useEffect, useRef } from 'react';

import IedCard from './assets/img/1444h.jpg';

const App = () => {

  const canvasPreview = useRef();
  let context         = null;

  useEffect(() => {
    context = canvasPreview.current.getContext("2d");
    const img = new Image();
    img.onload = function () {
      context.drawImage(img, 0, 0);
      context.scale(.45, .45);
      context.font = "bold 50pt hsimplified";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("Selamat Hari Raya Idul Fitri!", 540, 1220);
    }

    img.src = IedCard;
  }, [])

  return (
    <div className="container">
      <div className="content-wrapper">
        <canvas ref={canvasPreview} className="canvas-preview img-fluid" width={475} height={608}></canvas>

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