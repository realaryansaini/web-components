// function displayImage(input) {
//     if (input.files && input.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             let imgPreview =  document.getElementById('imagePreview')
//             imgPreview.src = e.target.result;
//             imgPreview.style.display = "block"
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }


url = "https://www.instagram.com/realaryansaini"

function generateQRCode(url) {
    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 256,
      height: 256,
      colorDark: "green",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // Example usage
  generateQRCode(url);