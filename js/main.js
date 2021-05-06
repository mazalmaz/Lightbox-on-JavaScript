function lightbox() {
    let imgList = document.querySelectorAll(".b-project__slide__item");
    console.log(imgList);

    for (let i = 0; i < imgList.length; i++) {

        imgList[i].addEventListener("click", function (event) {
            event.preventDefault();
            let lightboxParentDiv = document.createElement('div');
            let lightboxChildDiv = document.createElement('div');
            let img = document.createElement('img');
            let close = document.createElement('span');
            let span = document.createElement('span');
            let dec = imgList[i].querySelector(".b-project__slide__item__txt").innerHTML;
            img.setAttribute("src", imgList[i].href);
            close.classList.add("lightbox__close");
            span.classList.add("lightbox__span");
            span.innerHTML = dec;
            lightboxParentDiv.classList.add("lightbox");
            lightboxChildDiv.classList.add("lightbox__fl");
            document.body.appendChild(lightboxParentDiv);
            lightboxParentDiv.appendChild(lightboxChildDiv);
            lightboxChildDiv.appendChild(img);
            lightboxChildDiv.appendChild(close);
            lightboxChildDiv.appendChild(span);
            lightboxParentDiv.addEventListener("click", function (event) {
                if (event.target == this) {
                    lightboxParentDiv.remove();
                }
            });
            close.addEventListener("click", function () {
                lightboxParentDiv.remove();
            })
        });
    }

}

lightbox()