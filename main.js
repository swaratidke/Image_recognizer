Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:100
});
camera= document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot()
{

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'"/>';
    });
}
console.log("ml5.version:", ml5.version);
teachablelink=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n6YI1a2Gw/model.json',modelloaded);
