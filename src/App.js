import { useEffect, useRef } from 'react';

import IedCard from './assets/img/1444h.jpg';

const App = () => {

  const canvasPreview = useRef();
  let context         = null;

  useEffect(() => {
    context = canvasPreview.current.getContext("2d");
    const imgOnLoad = new Image();
    imgOnLoad.onload = function () {
      context.drawImage(imgOnLoad, 0, 0);
      context.scale(.45, .45);
      context.font = "bold 50pt hsimplified";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("Selamat Hari Raya Idul Fitri!", 540, 1220);
    }

    imgOnLoad.src = IedCard;
  }, [])

  return (
    <div className="container">
      <div className="mx-auto justify-content-center mt-5 mb-5">
        <canvas ref={canvasPreview} className="mx-auto d-block img-fluid" width="475" height="608"></canvas>
        <hr />
        <div className="col-sm-5 mx-auto">
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