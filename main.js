function preload()
{
    // img = loadImage("");
}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position(500,160);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}
function draw()
{
    // image(video, 0, 0, 500, 500);
    //  image(img, mosX, mosY, 60, 60);
}
mosX = 0;
mosY = 0;
function modelLoaded()
{
    console.log("model is ready");
}
function take_snapshot()
{
    save("FilteredPerson.png");
}
function check()
{
    img = document.getElementById("");
    classifier.classify(img, gotResults);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        mosX = results[0].pose.mos.x-30;
        mosY = results[0].pose.mos.y-30;
        console.log("mosx = "+ X);
        console.log("mosy = "+ Y);
    }
}