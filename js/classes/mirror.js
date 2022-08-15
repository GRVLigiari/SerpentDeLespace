const mirror = document.getElementById('mirror');
const mirrorCtx = mirror.getContext('2d');


let screen, mirrorElements, mirrorParams = { speed: 2, number: 300, extinction: 4 };


setupmirror();
updatemirror();

window.onresize = function() {
setupmirror();
};

function Star() {
    this.x = Math.random() * mirror.width;
    this.y = Math.random() * mirror.height;
    this.z = Math.random() * mirror.width;

    this.move = function() {
        this.z -= mirrorParams.speed;
        if (this.z <= 0) {
            this.z = mirror.width;
        }
    };

    this.show = function() {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (mirror.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (mirror.width / this.z);
        y = y + screen.c[1];
        rad = mirror.width / this.z;
        opacity = (rad > mirrorParams.extinction) ? 1.5 * (2 - rad / mirrorParams.extinction) : 1;

        mirrorCtx.beginPath();
        mirrorCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        mirrorCtx.arc(x, y, rad, 0, Math.PI * 2);
        mirrorCtx.fill();
    }
}

function setupmirror() {
    screen = {
        w: 500,
        h: 500,
        c: [ 499 * 0.5, 499 * 0.5 ]
    };
    window.cancelAnimationFrame(updatemirror);
    mirror.width = screen.w;
    mirror.height = screen.h;
    mirrorElements = [];
    for (let i = 0; i < mirrorParams.number; i++) {
        mirrorElements[i] = new Star();
    }
}

function updatemirror() {
    mirrorCtx.fillStyle = "black";
    mirrorCtx.fillRect(0, 0, mirror.width, mirror.height);
    mirrorElements.forEach(function (s) {
        s.show();
        s.move();
    });
    window.requestAnimationFrame(updatemirror);
}