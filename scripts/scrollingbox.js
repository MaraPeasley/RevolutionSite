window.onload = function() {
    var box = document.getElementById('greenBox');
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos >= 0) {
            clearInterval(id);
        } else {
            pos++;
            box.style.right = pos + 'px';
        }
    }
}
