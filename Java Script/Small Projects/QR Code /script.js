const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();//prevent refrshing the page
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
  });

  downloadBtn.addEventListener('click', (e)=>{
  let img = document.querySelector('.qr-body img');
  if(img !== null){// Check if QR code is generated
      let imgAtrr = img.getAttribute('src');
      downloadBtn.setAttribute("href", imgAtrr);
      downloadBtn.setAttribute("download", "QRCode.png");
  }
  else{
      alert("Please generate a QR Code first before downloading");
      e.preventDefault();
  }
});

function isEmptyInput(){
   if(qrText.value.length > 0){
    generateQRCode();
  }
  else{
    alert("Please enter a valid text or URL to generate QR Code");
  }
}

function generateQRCode(){
  qrContainer.innerHTML = ''; // Clear previous QR code 
  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
});
}