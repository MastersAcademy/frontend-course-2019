export default function generateFieldMine(sizeMineFieldX, sizeMineFieldY, mines) {
    if(sizeMineFieldX * sizeMineFieldY - mines < 0) {
        console.log('The number of mines exceeds the number of cells');
        return ;
    }
    let MineField = generateMines(sizeMineFieldX, sizeMineFieldY, mines);
    return setMineCntainer(MineField, sizeMineFieldX, sizeMineFieldY);
}

function generateMines(sizeMinefieldX, sizeMinefieldY, mines) {
    let sizeMinefield = (sizeMinefieldX * sizeMinefieldY) - 1;
    let numOfMine = mines;
    let mineField = [];

    for(let y = 0; y < sizeMinefieldY; y++) {
        mineField[y] = [];
        for (let x = 0; x < sizeMinefieldX; x++) {
            mineField[y][x] = 0;
        }
    }

    while (numOfMine !== 0) {
        let mine = getRundomNumber(0, sizeMinefield);
        let mineY;
        mineY =  Math.trunc(mine / sizeMinefieldX);
        let mineX = mine - mineY * sizeMinefieldX;
        if (mineField[mineY][mineX] !== -1) {
            mineField[mineY][mineX]--;
            numOfMine--;
        }
    }
    return mineField;
}

function getRundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setMineCntainer(mineField, sizeMinefieldX, sizeMinefieldY) {
    for(let y = 0; y < sizeMinefieldY; y++) {
        for(let x = 0; x < sizeMinefieldX; x++) {
            if(mineField[y][x] !== -1) {
                if(mineField[y][x + 1] === -1) mineField[y][x]++;
                if(mineField[y][x - 1] === -1) mineField[y][x]++;
                if (y !== 0) {
                    if(mineField[y - 1][x] === -1) mineField[y][x]++;
                    if(mineField[y - 1][x - 1] === -1) mineField[y][x]++;
                    if(mineField[y - 1][x + 1] === -1) mineField[y][x]++;
                }
                if (y !== sizeMinefieldY - 1) {
                    if(mineField[y + 1][x] === -1) mineField[y][x]++;
                    if(mineField[y + 1][x - 1] === -1) mineField[y][x]++;
                    if(mineField[y + 1][x + 1] === -1) mineField[y][x]++;
                }
            }
        }
    }
    return mineField;
}
