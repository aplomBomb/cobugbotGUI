function pikaRaise() {
    document.getElementById("homePikaLowered1").setAttribute('id', 'homePikaRaised1');
    setTimeout(pikaLower, 16000);
}

function pikaLower() {
    document.getElementById("homePikaRaised1").setAttribute('id', 'homePikaLowered1');
    setTimeout(pikaFlip, 9000);

}

function pikaFlip() {
    document.getElementById("homePikaLowered1").setAttribute('id', 'homePikaLowered2');
    setTimeout(pikaRaise2, 6000);
}

function pikaRaise2() {
    document.getElementById("homePikaLowered2").setAttribute('id', 'homePikaRaised2');
    setTimeout(pikaLower2, 22000);
}

function pikaLower2() {
    document.getElementById("homePikaRaised2").setAttribute('id', 'homePikaLowered2');
    setTimeout(pikaFlip2, 12000);
}

function pikaFlip2() {
    document.getElementById("homePikaLowered2").setAttribute('id', 'homePikaLowered1');
    setTimeout(pikaRaise, 5000);
}

setTimeout(pikaRaise, 2200);