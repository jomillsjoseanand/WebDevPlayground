const repeat = times => {
    let temp = '';
    for (i = 0; i < times; i++) {
        temp += 'CH₂-';
    }
    return temp;
}

const compound = {
    type: 'triple',
    tally: 10,
    position: 5,
    display: () => {
        if (compound.position > Math.floor(compound.tally/2)) {
            compound.position = compound.tally - compound.position;
        }
        switch (compound.type) {
            case 'single':
                return 'CH₃-' + repeat(compound.tally - 2) + 'CH₃';
            case 'double':
                if (compound.position === 1) {
                    return 'CH₂=CH-' + repeat(compound.tally-3) + 'CH₃';
                }
                return 'CH₃-' + repeat(compound.position-2) + 'CH=CH-' + repeat(compound.tally - compound.position - 2) + 'CH₃';
            case 'triple':
                if (compound.position === 1) {
                    return 'CH≡C-' + repeat(compound.tally-3) + 'CH₃';
                }
                return 'CH₃-' + repeat(compound.position-2) + 'C≡C-' + repeat(compound.tally - compound.position - 2) + 'CH₃';
        }
    }
}

console.log(compound.display());