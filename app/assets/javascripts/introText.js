function blowUpToCenter() {
    document.getElementById("cobugbotPokeSmall").setAttribute("id", "cobugbotPokeBig");
    setTimeout(launchFireworks, 1500);
}

function launchFireworks() {
    document.getElementById('confettiTrans').setAttribute('id', 'confettiOpaque');
}

setTimeout(blowUpToCenter, 1000);