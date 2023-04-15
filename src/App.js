import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

import IedCard from './assets/img/1444h.jpg';

const App = () => {

  const [showHideBtnDownload, setShowHideBtnDownload] = useState(false);
  const [name, setName] = useState("");
  const canvasRef       = useRef();
  let context           = null;

  const widthImage    = 1080;
  const heightImage   = 1350;
  const fontSize      = 40;

  const downloadHandle = () => {
    let canvas  = canvasRef.current;
    let img     = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let unduh   = document.querySelector('#unduh');

    unduh.setAttribute('download', 'kartu-idul-fitri-al-irsyad.png');
    unduh.setAttribute('href', img);
    unduh.click();
  }

  const showPreview = () => {
    context   = canvasRef.current.getContext("2d");
    const img = new Image();

    if (name === "") {
        Swal.fire({
          icon: 'error',
          title: 'Error Found!',
          text: 'Masukkan Nama Anda Pada Form Input Setidaknya 1 Karakter!'
        })
    }else {
        img.onload = function () {
            context.drawImage(img, 0, 0, widthImage, heightImage);
            context.font = "bold "+ fontSize + "pt hpsimplified";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText(name, 540, 1220);
        }
        img.src = IedCard;
        setShowHideBtnDownload(true);
    }
  }

  useEffect(() => {
    context = canvasRef.current.getContext("2d");

    const imgOnLoad = new Image();
    imgOnLoad.onload = function () {
      context.drawImage(imgOnLoad, 0, 0, widthImage, heightImage);
      // context.scale(.45, .45);
      context.font = "bold "+ fontSize +"pt hsimplified";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("~ معهد الإرشاد الإسلامي الثاني ~", 540, 1220);
    }

    imgOnLoad.src = IedCard;
  }, [])

  return (
    <div className="container">
      <div className="justify-content-center row" style={{marginTop: '100px'}}>
        <canvas ref={canvasRef} className="img-fluid col-sm-4" width={widthImage} height={heightImage} />
        
        <div className="col-sm-4 justify-content-center align-self-center mt-3">
          <div className='mb-3 text-white text-center'>
            Kartu Idul Fitri Digital Al Irsyad Tengaran 2 Majalengka
          </div>
          <input type="text" className="input-filltext form-control" placeholder='Masukkan Nama Anda!' value={name} onChange={(e) => setName(e.target.value)} />
          <div className="mt-3">
            <button type='button' onClick={showPreview} className="btn btn-primary">Tampilkan</button>
            <button type='button' onClick={downloadHandle} className={showHideBtnDownload ? "btn btn-success ms-3" : "btn btn-success ms-3 d-none"}>Download</button>
            <a className='d-none' id='unduh'></a>
          </div>
          <div className='alert alert-info text-center mt-3'>
            <strong>Info!</strong> Silahkan klik tombol download untuk mengunduh kartu idul fitri anda!
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;