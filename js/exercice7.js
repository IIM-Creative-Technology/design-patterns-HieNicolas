document.addEventListener('keydown',function (e) {
    /* switch (e.code) {
    //     case 'ArrowUp':
    //     case 'ArrowLeft':
    //     case 'ArrowRight' :
    //     case 'ArrowDown':
    //         imageManager.execute(e.code)
    //         break
    // }
    */
    //check if method in imageMaanger exists
    console.log(e.code)
    if (imageManager.hasOwnProperty(e.code)) {
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function () {
        console.log(this.image)
        this.image.style.top = this.image.offsetTop - 10 + 'px'
    },
    ArrowLeft: function () {
        this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowRight: function () {
        this.image.style.left = this.image.offsetLeft + 10 + 'px'
    },
    ArrowDown: function () {
        this.image.style.top = this.image.offsetTop + 10 + 'px'
    },
}

imageManager.execute = function (key) {
    let methodName = imageManager[key]
    // let functionParams = [].splice.call(arguments, 1)
    return methodName.apply(imageManager)
}

setInterval(function () {
    // add a random move
}, 500)