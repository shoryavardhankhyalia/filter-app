function preload()
{

}
function setup()
{
    canvas = createCanvas(540,380);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";
}

function draw()
{
    image(video, 0 ,0 ,540 ,380);
    tint(tint_colour);
}

function take_snapshot()
{
    save('student_image.png');
}
 
function colour_tint()
{
    tint_colour = document.getElementById("colour_name").value;
}
