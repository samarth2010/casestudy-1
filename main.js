Webcam.set({
    width:290,
    height:300,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});


camera= document.getElementById("camera");
Webcam.attach('#camera');

