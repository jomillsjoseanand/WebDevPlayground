function Magic() {
    let digit = Math.floor(Math.random()*8);
    switch (digit) {
        case 0:
            document.getElementById('prediction').innerHTML = "No way lol.";
            break;
        case 1:
            document.getElementById('prediction').innerHTML = "Hell naw mate.";
            break;
        case 2:
            document.getElementById('prediction').innerHTML = "Nah, don't think so.";
            break;
        case 3:
            document.getElementById('prediction').innerHTML = "I don't have a clue lad.";
            break;
        case 4:
            document.getElementById('prediction').innerHTML = "As probable as a coin flipping your way.";
            break;
        case 5:
            document.getElementById('prediction').innerHTML = "Yeah, it seems possible.";
            break;
        case 6:
            document.getElementById('prediction').innerHTML = "I'd root for that!";
            break;
        case 7:
            document.getElementById('prediction').innerHTML = "100%.";
            break;
    }
};
