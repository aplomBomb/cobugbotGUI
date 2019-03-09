function fadeInHome() {
    document.getElementById('homeContainerTrans').setAttribute('id', 'homeContainerOpaque');
    setTimeout(blowUpToCenter, 1000);
}

function blowUpToCenter() {
    document.getElementById("cobugbotPokeSmall").setAttribute("id", "cobugbotPokeBig");
    setTimeout(launchFireworks, 1500);
}

function launchFireworks() {
    document.getElementById('confettiTrans').setAttribute('id', 'confettiOpaque');
}

setTimeout(fadeInHome, 100);