import { useEffect, useRef, useState } from 'react';

import IedCard from './assets/img/1444h.jpg';

const App = () => {

  const [showHideBtnDownload, setShowHideBtnDownload] = useState(false);
  const [name, setName] = useState("");
  const canvasPreview = useRef();
  let context         = null;
  const widthImage    = 1080;
  const heightImage   = 1350;
  const fontSize      = 80;

  useEffect(() => {
    context = canvasPreview.current.getContext("2d");

    const imgOnLoad = new Image();
    imgOnLoad.onload = function () {
      context.drawImage(imgOnLoad, 0, 0);
      context.scale(0.45, 0.45);
      context.font = "bold "+ fontSize +"pt hsimplified";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("~ معهد الإرشاد الإسلامي الثاني ~", 1175, 2700);
    }

    imgOnLoad.src = IedCard;
  }, [])

  const showPreview = () => {
    context   = canvasPreview.current.getContext("2d");
    const img = new Image();

    if (name === "") {
        alert("Form Nama Masih Kosong!")
    }else {
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.font = "bold "+ fontSize + "pt hpsimplified";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText(name, 1175, 2700);
        }
        img.src          = IedCard;
        setShowHideBtnDownload(true);
    }
  }

  const downloadHandle = () => {
    let canvas  = canvasPreview.current;
    let img     = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let unduh   = document.querySelector('#unduh');

    unduh.setAttribute('download', 'kartu-idul-fitri-al-irsyad.png');
    unduh.setAttribute('href', img);
    unduh.click();
  }

  return (
    <div className="container">
      <div className="justify-content-center align-items-center mt-5 mb-5 row">
        <canvas ref={canvasPreview} className="justify-content-center d-block img-fluid col-sm-4" width={widthImage} height={heightImage}></canvas>
        
        <div className="col-sm-4 justify-content-center mt-3">
          <input type="text" className="input-filltext form-control" placeholder='Masukkan Nama Anda!' value={name} onChange={(e) => setName(e.target.value)} />
          <div className="mt-3">
            <button type='button' onClick={showPreview} className="btn btn-primary">Tampilkan</button>
            <button type='button' onClick={downloadHandle} className={showHideBtnDownload ? "btn btn-success ms-3" : "btn btn-success ms-3 d-none"}>Download</button>
            <a className='d-none' id='unduh'></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;