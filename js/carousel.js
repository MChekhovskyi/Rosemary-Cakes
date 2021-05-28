if (document.documentElement.clientWidth < 767) {
    let btn = document.querySelectorAll('p'),
    three = document.querySelectorAll('.three')[0];

    let count = 0;
    startSlide(1000);
    function startSlide(time) {
    return setInterval(function() {
        if (count == btn.length) {
        count = 0;
        }
        three.className = 'three';
        three.classList.add('three-' + count);
        count++;
    }, time || 1000);

    }
}