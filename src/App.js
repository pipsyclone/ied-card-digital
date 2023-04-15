import { useEffect, useRef } from 'react';

import IedCard from './assets/img/1444h.jpg';

const App = () => {

  const canvasPreview = useRef();
  let context         = null;
  const widthImage    = 1080;
  const heightImage   = 1350;

  useEffect(() => {
    context = canvasPreview.current.getContext("2d");

    const imgOnLoad = new Image();
    imgOnLoad.onload = function () {
      context.drawImage(imgOnLoad, 0, 0);
      context.scale(0.45, 0.45);
      context.font = "bold 80pt hsimplified";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("~ معهد الإرشاد الإسلامي الثاني ~", 1175, 2700);
    }

    imgOnLoad.src = IedCard;
  }, [])

  return (
    <div className="container">
      <div className="justify-content-center align-items-center mt-5 mb-5 row">
        <canvas ref={canvasPreview} className="justify-content-center d-block img-fluid col-sm-4" width={widthImage} height={heightImage}></canvas>
        
        <div className="col-sm-4 justify-content-center">
          <input type="text" className="input-filltext form-control" placeholder='Masukkan Nama Anda!' />
          <div className="mt-3">
            <button className="btn btn-primary">Tampilkan</button>
            <button className="btn btn-success ms-3">Download</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;