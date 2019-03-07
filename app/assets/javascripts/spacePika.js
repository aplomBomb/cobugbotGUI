function spaceWalk1() {
    document.getElementById('spacePika1').setAttribute('id', 'spacePika2');
    setTimeout(spaceWalk2, 8000);
}

function spaceWalk2() {
    document.getElementById('spacePika2').setAttribute('id', 'spacePika3');
    setTimeout(spaceWalk3, 8000);
}
function spaceWalk3() {
    document.getElementById('spacePika3').setAttribute('id', 'spacePika4');
    setTimeout(spaceWalk4, 8000);
}
function spaceWalk4() {
    document.getElementById('spacePika4').setAttribute('id', 'spacePika5');
    setTimeout(spaceWalk5, 8000);
}
function spaceWalk5() {
    document.getElementById('spacePika5').setAttribute('id', 'spacePika6');
    setTimeout(spaceWalk6, 8000);
}

setTimeout(spaceWalk1, 500);
