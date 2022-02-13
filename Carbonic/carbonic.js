const repeat = times => {
    let temp = '';
    for (i = 0; i < times; i++) {
        temp += 'CH₂-';
    }
    return temp;
}

function compound(type, tally, position) {
    let output = "";
    if (position > Math.floor(tally / 2)) {
        position = tally - position;
    }
    switch (type) {
        case 'Alkane':
            output = 'CH₃-' + repeat(tally - 2) + 'CH₃';
            document.getElementById('output').innerHTML = output;
            break;
        case 'Alkene':
            if (position === 1) {
                output = 'CH₂=CH-' + repeat(tally - 3) + 'CH₃';
                document.getElementById('output').innerHTML = output;
                break;
            }
            output = 'CH₃-' + repeat(position - 2) + 'CH=CH-' + repeat(tally - position - 2) + 'CH₃';
            document.getElementById('output').innerHTML = output;
            break;
        case 'Alkyne':
            if (position === 1) {
                output = 'CH≡C-' + repeat(tally - 3) + 'CH₃';
                document.getElementById('output').innerHTML = output;
                break;
            }
            output = 'CH₃-' + repeat(position - 2) + 'C≡C-' + repeat(tally - position - 2) + 'CH₃';
            document.getElementById('output').innerHTML = output;
            break;
    }
}

function Carbonic() {
    let type = document.getElementById('compoundtype').options[document.getElementById('compoundtype').selectedIndex].text;
    let tally = document.getElementById('carbonquantity').value;
    let position = document.getElementById('carbonposition').value;
    console.log(type, tally, position);
    compound(type, tally, position);
}
