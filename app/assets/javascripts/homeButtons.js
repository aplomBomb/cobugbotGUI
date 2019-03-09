function showIndexButton() {
    document.getElementById("insultsButtonStart").setAttribute("id", "insultsButtonFinish");
    setTimeout(dropInviteSign, 1200);
}

function dropInviteSign() {
    document.getElementById('homeInviteSignStart').setAttribute('id', 'homeInviteSignFinish');
}

setInterval(showIndexButton, 5000);