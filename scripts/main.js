
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/face.jpg') {
        myImage.setAttribute('src', 'images/facecc.jpg');
    } else {
        myImage.setAttribute('src', 'images/face.jpg');
    }
}