let audio = new Audio('../audio/t-rex.mp3');

function audioEnable() {
        audio.play()
        audio.pause()
        audio.currentTime = 0
    }

window.addEventListener('touchstart', audioEnable)

window.addEventListener("scroll", (event) => {
    let trexContainer = document.getElementById("t-rex-Container");
    let scroll = this.scrollY;
        
    if (scroll >= 600) {
        window.removeEventListener('touchstart',audioEnable,false);       
    }
        
    if (scroll >= 1300) {
        let trex = document.getElementById("t-rex");
        if (trex === null) {
            let img = document.createElement('img');
            img.className = 'logo-nico-3'
            img.src = "../images/nico-logo-3.gif"
            img.id = "t-rex"
            trexContainer.appendChild(img)
        }

    }

    if (scroll >= 1800) {
        audio.play();
    }

    if (scroll <= 1300) {
        let trex = document.getElementById("t-rex");
        if (trex !== null) {
            audio.pause();
            audio.currentTime = 0;
            trex.remove();
        }
    }
});
