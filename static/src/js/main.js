function BodyOnLoad(){
    console.log("workingasdadasdasd");
}

function ShowImage(element){
    var img_src = element.getAttribute('data-img');
    var resource = document.querySelectorAll(".media-resources-photo .custom_row a");
    // video = document.getElementsByClassName("dynamic-video");
    // video[0].style.display = "none";
    // image = document.getElementsByClassName("dynamic-image");
    var modal = document.querySelectorAll("#modal-carousel .carousel-inner")
    var item = ''
    modal[0].innerHTML = ''
    var count = 0;
    for(i=0;i<resource.length;i++){
        var source = resource[i].getAttribute("data-img");
        // console.log(resource[i].getAttribute("data-img"));
        if(source == img_src && count == 0){
            item = "<div class='carousel-item active'><img src="+source+" class='w-100' alt='banner 1'></div>"
            count+=1;
        }
        else{
            item = "<div class='carousel-item'><img src="+source+" class='w-100' alt='banner 1'></div>"
        }
        modal[0].innerHTML += item;
    }
    // image[0].style.display = "block";
    // image[0].setAttribute('src',img_src);
}

function ShowVideo(element){
    video_src = element.getAttribute('data-link');
    // image = document.getElementsByClassName("dynamic-image");
    // image[0].style.display = "none";
    // video = document.getElementsByClassName("dynamic-video");
    // video[0].style.display = "block";
    // video[0].setAttribute('src',video_src);
    // instead of setAttribute we can replace with iframe player
    var resource = document.querySelectorAll(".media-resources-video .custom_row a");
    var modal = document.querySelectorAll("#modal-carousel .carousel-inner")
    var item = ''
    modal[0].innerHTML = ''
    var count = 0;
    for(i=0;i<resource.length;i++){
        var source = resource[i].getAttribute("data-link");
        console.log(resource[i].getAttribute("data-link"));
        if(source == video_src && count == 0){
            item = "<div class='carousel-item active'><iframe width='481' height='345' class='dynamic-video' src=" +source+" allowfullscreen='True'></iframe></div>"
            count+=1;
        }
        else{
            item = "<div class='carousel-item'><iframe width='481' height='345' class='dynamic-video' src=" +source+" allowfullscreen='True'></iframe></div>"
        }
        modal[0].innerHTML += item;
    }
}

function previoufun(){
    $("#modal-carousel").carousel("prev");
}
function nextfun(){
    $("#modal-carousel").carousel("next");
}