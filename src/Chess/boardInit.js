import actions from '../store/actions'

export const initBoard = () => {

    for (let i = 1; i <= 64; i++){
        let row = Math.ceil(i / 8) ;
        let col;
        let colLetter;
        if( (i - 1) % 8 === 0) {
            colLetter = 'A'
            col = 1
        }
        if( (i - 2) % 8 === 0) {
            colLetter = 'B'
            col = 2
        }
        if( (i - 3) % 8 === 0) {
            colLetter = 'C'
            col = 3
        }
        if( (i - 4) % 8 === 0) {
            colLetter = 'D'
            col = 4
        }
        if( (i - 5) % 8 === 0) {
            colLetter = 'E'
            col = 5
        }
        if( (i - 6) % 8 === 0) {
            colLetter = 'F'
            col = 6
        }
        if( (i - 7) % 8 === 0) {
            colLetter = 'G'
            col = 7
        }
        if(  i % 8 === 0) {
            colLetter = 'H'
            col = 8
        }

        let id = `${row}${col}`
        actions.set(`position.${id}`, {row, col, id, colLetter})
    }
}

export const initPieces = () => {

    for(let i = 1; i <= 8; i++) {
        let col = 7
        let row = i
        actions.set('pawn')
    }
}