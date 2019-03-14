function spaceWalk1() {
    try {
        document.getElementById('spacePika1').setAttribute('id', 'spacePika2');
        setTimeout(spaceWalk2, 8000);
    } catch (error) {
        console.log(error);
        setTimeout(spaceWalk2, 8000);
    }
}

function spaceWalk2() {
    try {
        document.getElementById('spacePika2').setAttribute('id', 'spacePika3');
        setTimeout(spaceWalk3, 8000);
    } catch (error) {
        console.log(error);
        setTimeout(spaceWalk3, 500);
    }

}

function spaceWalk3() {
    try {
        document.getElementById('spacePika3').setAttribute('id', 'spacePika4');
        setTimeout(spaceWalk4, 8000);
    } catch (error) {
        console.log(error);
        setTimeout(spaceWalk4, 500);
    }

}

function spaceWalk4() {
    try {
        document.getElementById('spacePika4').setAttribute('id', 'spacePika5');
        setTimeout(spaceWalk5, 8000);
    } catch (error) {
        console.log(error);
        setTimeout(spaceWalk5, 500);
    }

}

function spaceWalk5() {
    try {
        document.getElementById('spacePika5').setAttribute('id', 'spacePika6');
        setTimeout(spaceWalk6, 12000);
    } catch (error) {
        console.log(error);
        setTimeout(spaceWalk6, 500);
    }

}

function spaceWalk6() {
    try {
        document.getElementById('spacePika6').setAttribute('id', 'spacePika2');
        setTimeout(spaceWalk2, 8000);
    } catch (error) {
        console.log(error);
    }

}

setTimeout(spaceWalk1, 2000);
