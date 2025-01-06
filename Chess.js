// preGame 
document.getElementById("intro").classList.remove("hide");
document.getElementById("noSabi").classList.remove("hide");

let nextOverlay = function(n){
    setTimeout(function() {

        document.getElementById("letsgoAudio").play();
        if (!document.getElementsByClassName("pregame")[n].classList.contains("hide")){
            document.getElementById("likemessage").innerText = " You have to like to play :) ";
            document.getElementById("errorAudio").play();
        }
        for (i = 0; i < n ; i++){
            document.getElementsByClassName("pregame")[i].classList.add("hide");
        }
        document.getElementsByClassName("pregame")[n].classList.remove("hide");

},100);
}








// CHESS PIECES OBJECT CONSTRUCTORS 

function WPawn(name){
    // source
    this.dir = name;
    // id
    this.id = "";
    // type of piece
    this.piece = "wpawn";
    // points worth
    this.points = 1;
    // row occpied on chessboard
    this.row = "";
    // column occupied on chess board
    this.col = "";
    // postion on chessboard
    // color (not necessary here tho)
    this.side = "";
}
function BPawn(name){
    this.dir = name;
    this.id = "";
    this.piece = "bpawn";
    this.points = 1;
    this.row = "";
    this.col = "";
    this.side = "";
}
function Knight(name){
    this.dir = name;
    this.id = "";
    this.piece = "knight";
    this.points = 3;
    this.row = "";
    this.col = "";
    this.side = "";
}
function Bishop(name){
    this.dir = name;
    this.id = "";
    this.piece = "bishop";
    this.points = 3;
    this.row = "";
    this.col = "";
    this.side = "";
}
function Rook (name){
    this.dir = name;
    this.id = "";
    this.piece = "rook";
    this.points = 5;
    this.row = "";
    this.col = "";
    this.side = "";
}
function Queen(name){
    this.dir = name;
    this.id = "";
    this.piece = "queen";
    this.points = 9;
    this.row = "";
    this.col = "";
    this.side = "";
}
function King(name){
    this.dir = name;
    this.id = "";
    this.piece = "king";
    this.row = "";
    this.col = "";
    this.side = "";
}

// WHITE PAWNS CREATION USING OBJECT CONSTRUCTOR
let whitePawn = Array(8);
for (let i = 0; i < 8; i++){
    // +1 because of the 0-index needed for arrays
    whitePawn[i+1] = new WPawn("white-pawn.png");
    whitePawn[i+1].id = `whitePawn[${i+1}]`
    whitePawn[i+1].row = 1;
    whitePawn[i+1].col = i;
}

// BLACK PAWNS CREATION USING OBJECT CONSTRUCTOR
let blackPawn = Array(8);
for (let i = 0; i < 8; i++){
    // +1 because of the 0-index needed for arrays
    blackPawn[i+1] = new BPawn("black-pawn.png");
    blackPawn[i+1].id = `blackPawn[${i+1}]`;
    blackPawn[i+1].row = 6;
    blackPawn[i+1].col = i;
}

// WHITE KNIGHTS
let whiteKnight1 = new Knight("white-knight1.png");
whiteKnight1.id = "whiteKnight1"
whiteKnight1.row = 0;
whiteKnight1.col = 1;
let whiteKnight2 = new Knight("white-knight2.png");
whiteKnight2.id = "whiteKnight2";
whiteKnight2.row = 0;
whiteKnight2.col = 6;

// BLACK KNIGHTS
let blackKnight1 = new Knight("black-knight1.png");
blackKnight1.id = "blackKnight1";
blackKnight1.row = 7;
blackKnight1.col = 6;
let blackKnight2 = new Knight("black-knight2.png");
blackKnight2.id = "blackKnight2";
blackKnight2.row = 7;
blackKnight2.col = 1;

// WHITE BISHOPS
let whiteBishop1 = new Bishop("white-bishop.png");
whiteBishop1.id = "whiteBishop1";
whiteBishop1.row = 0;
whiteBishop1.col = 2;
let whiteBishop2 = new Bishop("white-bishop.png");
whiteBishop2.id = "whiteBishop2";
whiteBishop2.row = 0;
whiteBishop2.col = 5;

// BLACK BISHOPS
let blackBishop1 = new Bishop("black-bishop.png");
blackBishop1.id = "blackBishop1";
blackBishop1.row = 7;
blackBishop1.col = 5;
let blackBishop2 = new Bishop("black-bishop.png");
blackBishop2.id = "blackBishop2";
blackBishop2.row = 7;
blackBishop2.col = 2;

// WHITE ROOKS
let whiteRook1 = new Rook("white-rook.png");
whiteRook1.id = "whiteRook1";
whiteRook1.row = 0;
whiteRook1.col = 0;
let whiteRook2 = new Rook("white-rook.png");
whiteRook2.id = "whiteRook2";
whiteRook2.row = 0;
whiteRook2.col = 7;

// BLACK ROOKS
let blackRook1 = new Rook("black-rook.png");
blackRook1.id = "blackRook1";
blackRook1.row = 7;
blackRook1.col = 7;
let blackRook2 = new Rook("black-rook.png");
blackRook2.id = "blackRook2";
blackRook2.row = 7;
blackRook2.col = 0;

// QUEENS
let whiteQueen = new Queen("white-queen.png");
whiteQueen.id = "whiteQueen";
whiteQueen.row = 0;
whiteQueen.col = 3;
let blackQueen = new Queen("black-queen.png");
blackQueen.id = "blackQueen";
blackQueen.row = 7;
blackQueen.col = 3;

// KINGS
let whiteKing = new King("white-king.png");
whiteKing.id = "whiteKing";
whiteKing.row = 0;
whiteKing.col = 4;

let blackKing = new King("black-king.png");
blackKing.id = "blackKing";
blackKing.row = 7;
blackKing.col = 4;


// ARRAY FOR ALL WHITE PIECES
let whitePieces = Array(16)
for ( i = 0; i < 8; i++){
    whitePieces[i] = whitePawn[i+1];
}
whitePieces[8] = whiteKnight1;
whitePieces[9] = whiteKnight2;
whitePieces[10] = whiteBishop1;
whitePieces[11] = whiteBishop2;
whitePieces[12] = whiteRook1;
whitePieces[13] = whiteRook2;
whitePieces[14] = whiteQueen;
whitePieces[15] = whiteKing;

// ARRAY FOR ALL BLACK PIECES
let blackPieces = Array(16)
for ( i = 0; i < 8; i++){
    blackPieces[i] = blackPawn[i+1];
}
blackPieces[8] = blackKnight1;
blackPieces[9] = blackKnight2;
blackPieces[10] = blackBishop1;
blackPieces[11] = blackBishop2;
blackPieces[12] = blackRook1;
blackPieces[13] = blackRook2;
blackPieces[14] = blackQueen;
blackPieces[15] = blackKing;

 







// CHESSBOARD 

let chessboard = Array(8);
for (let i = 0; i < 8; i++){
    // 8 by 8 (64-square grid)
    chessboard[i] = Array(8);
}

// assigning indexes for all cells (chess squares)
for ( i = 0; i < 8; i++){
    for( j = 0; j < 8; j++){
        chessboard[i][j] = document.querySelector(`.row${i+1}.col${j+1}`);
    }
}

let capturedWhite = [];
let capturedBlack = [];

let history = [];

// arranging the pieces on start of the game
function arrangePieces(){
    document.getElementById("arrangeAudio").play();
    // do this for all white pieces
    whitePieces.forEach((piece) => {
        // set the colour to white
        piece.side = "white";

        // insert the pieces in their correct positions
        chessboard[piece.row][piece.col].innerHTML = `<img id="${piece.id}" 
        onclick="select(${piece.id})" 
        src="${piece.dir}"
        style="width: 90%; height: 80%;"/>`;


        // once the pieces are set each square is now 'occupied' by a 'white piece'
        chessboard[piece.row][piece.col].classList.add("occupied");
        chessboard[piece.row][piece.col].classList.add("white");
    });
    chessboard[whiteKing.row][whiteKing.col].classList.add("throne");
    // for all black pieces
    blackPieces.forEach((piece) => {
        // set their colour to black
        piece.side = "black";

        // arrange the pieces on the other end of the board 
        chessboard[piece.row][piece.col].innerHTML = `<img id="${piece.id}" 
        onclick="select(${piece.id})" 
        src="${piece.dir}"
        style="width: 90%; height: 80%;"/>`;

        // the respective cells are 'occupied' by 'black pieces'
        chessboard[piece.row][piece.col].classList.add("occupied");
        chessboard[piece.row][piece.col].classList.add("black");
    })
    chessboard[blackKing.row][blackKing.col].classList.add("throne");
}

startGame = function(){
    // GAME SPECIFICS
    // arrange the pieces
    
    arrangePieces();
    
    setTimeout( function (){
        for (i = 0; i < 3 ; i++){
            document.getElementsByClassName("pregame")[i].classList.add("hide");
        }
        document.getElementById("noSabi").classList.add("hide");
        document.getElementsByClassName("container")[0].classList.add("hide");
        document.getElementById("preGame-overlay").classList.add("hide");
        document.getElementsByTagName("table")[0].classList.remove("hide");
    },200)

}

// initialize a holder for the currently selected piece to be move
let activePiece;
let turn = 0;
let activeSide= "white";
let inactiveSide = "black";

let clearMakeUp = function (){
    for ( i = 0; i < 8; i++){
        for( j = 0; j < 8; j++){
            if ( chessboard[i][j].classList.contains("playable") ){
                chessboard[i][j].classList.remove("playable");
            }
            if ( chessboard[i][j].classList.contains("captureable") ){
                chessboard[i][j].classList.remove("captureable");
            }
            if ( chessboard[i][j].classList.contains("promotable") ){
                chessboard[i][j].classList.remove("promotable");
            }
        }
    }
    return "done";
}

let question = function(k,l){

    if (turn % 2){
        activeSide = "black";
        inactiveSide = "white";
    } else {
        activeSide = "white";
        inactiveSide = "black";
    }

    if (chessboard[k][l].classList.contains("playable") 
    || chessboard[k][l].classList.contains("promotable")){

        play([k,l]);

    } else if (chessboard[k][l].classList.contains("captureable")){

        play([k,l]);

        return "captureable";
    } else if ( chessboard[k][l].classList.contains("activated") ) {

        // console.log("It is an active cell");

    } else if ( chessboard[k][l].classList.contains(inactiveSide) ) {

        notify (`Invalid Selection 
        ${activeSide.toUpperCase()} to play`, "yellow");
        document.getElementById("errorAudio").play();
        return;

    } else {
        notify(`Invalid Play
        The selected square is inactive`, "yellow");
        document.getElementById("errorAudio").play();

        // clear the remove the former selection
        clearMakeUp();
        for ( i = 0; i < 8; i++){
            for( j = 0; j < 8; j++){
                if ( chessboard[i][j].classList.contains("activated") ){
                    chessboard[i][j].classList.remove("activated");
                }
            }
        }
    }

}
// MOVEMENT OPTIONS
let select = function(id){
    if (chessboard[id.row][id.col].classList.contains("captureable")){
        return "captureable";
    }
    // clear the remove the former selection
    clearMakeUp();
    for ( i = 0; i < 8; i++){
        for( j = 0; j < 8; j++){
            if ( chessboard[i][j].classList.contains("activated") ){
                chessboard[i][j].classList.remove("activated");
            }
        }
    }
    
    if (turn % 2){
        activeSide = "black";
        inactiveSide = "white";
    } else {
        activeSide = "white";
        inactiveSide = "black";
}
    // get the selected piece
    activePiece = id; 
    
    if ( activePiece.side != activeSide ){
        notify (`Invalid Selection 
        ${activeSide.toUpperCase()} to play`, "yellow");
        return;
    }
    document.getElementById("selectAudio").play();

    showPlays(id);

    return(activePiece)
}

    
    // if ( checked ){
    // let checkZone = scope(id, eval(activeSide + "King"), activeSide);
    // console.log(checkZone);
    // }

showPlays = function (id){
    let type = id.piece;
    let row = id.row;
    let column = id.col;

    let playable = ["playable"];
    let captureable = ["captureable"];
    let promotable = ["promotable"]
    let kingPlay = [];
    let checkBlock = [playable,captureable, promotable];

    chessboard[row][column].classList.add("activated");
    // based on the type of piece, different movement ways
    switch(type){

       
        case "wpawn" :  // if a WHITE PAWN and the space in front is empty
        if (row < 7){
            for ( let i = row + 1, j = column; i <= row + 2; i++){
                if (!chessboard[i][j].classList.contains("occupied")){
                    
                // the pawn 'CAN' move there otherwise it can't move
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
        
                    if ( i == 2 ){
                        continue
                    } else if ( i == 7 ){
                        chessboard[i][j].classList.add("promotable");
                        promotable.push([i,j]);
            
                    } else {break}
                } else {break}
            }
            // if it can capture an opposing piece diagonal from it
            for ( i = row + 1, j = column - 1; i <= 7 && j <= 7 && j <= column + 1; j++){
                if( j == column || j < 0 ){ 
                    continue;
                } else if ( chessboard[i][j].classList.contains("occupied") 
                && chessboard[i][j].classList.contains("black"))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                
                        if ( i == 7 ){
                        chessboard[i][j].classList.add("promotable");
                        promotable.push([i,j]);
        
                        }
                    }
                }
            }
        }
            break;

            
        case "bpawn": // IF IT IS A BLACK PAWN
        if (row > 0){
            for ( let i = row - 1, j = column; i >= row - 2; i--){
                if (!chessboard[i][j].classList.contains("occupied")){
            
            // the pawn 'CAN' move there otherwise it can't move
                chessboard[i][j].classList.add("playable");
                playable.push([i,j]);
    
                if ( row == 6 ){
                    continue
                } else if ( row == 1 ){
                    chessboard[i][j].classList.add("promotable");
                    promotable.push([i,j]);
        
                } else {break}
            } else {break}
        }
            // if it can capture an opposing piece diagonal from it
            for ( i = row - 1, j = column - 1; i >= 0 && j <= 7 && j <= column + 1; j++ ){
                if ( j == column || j < 0){
                    continue;
                } else if ( chessboard[i][j].classList.contains("occupied") 
                && chessboard[i][j].classList.contains("white") )
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                        if ( row == 1 ){
                            chessboard[i][j].classList.add("promotable");
                            promotable.push([i,j]);
        
                        }
                    }
                }
            }
        }

            break;

        case "knight" : // FOR A KNIGHT
        let a = 2;
        let b = 1;
        let Nmoves = [row + a,column + b,row - a,column - b,row + b,column + a,row - b,column - a,row + a,column - b,row - a,column + b,row + b,column - a,row - b,column + a]
        let size = Nmoves.length;
        for ( i = 0; i < size - 1; i += 2 ){
            if ( Nmoves[i] >= 0 && Nmoves[i+1] >= 0 && Nmoves[i] <= 7 && Nmoves[i+1] <= 7 ){

                r = Nmoves[i];
                c = Nmoves[i+1];
                if (chessboard[r][c].classList.contains("occupied") 
                && chessboard[r][c].classList.contains(id.side))
                {
                    continue;
                } else if (!chessboard[r][c].classList.contains("occupied")){
                    
                    chessboard[r][c].classList.add("playable");
                    playable.push([r,c]);
                } else { 
                    
                    chessboard[r][c].classList.add("captureable");
                    captureable.push([r,c]);
                }
            }

        }
        break;

        case "bishop" :  // GOING DIAGONALLY UPWARDS TO THE RIGHT
            for (i = row + 1, j = column + 1; i <= 7 && j <= 7; i++ ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
    
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
                j++;
            }
    
                // GOING DIAGONALLY DOWNWARDS TO THE RIGHT
                for (i = row - 1, j = column + 1; i >= 0 && j <= 7; i-- ){
                    if ( !chessboard[i][j].classList.contains("occupied") ){
                        chessboard[i][j].classList.add("playable");
                        playable.push([i,j]);
                    
                    } else if (chessboard[i][j].classList.contains("occupied") 
                    && !chessboard[i][j].classList.contains(id.side))
                    {
                        if (!chessboard[i][j].classList.contains("throne")){
                            chessboard[i][j].classList.add("captureable");
                            captureable.push([i,j]);
                        }
                        break;
                    } else { break }
                    j++;
                }
    
                // GOING DIAGONALLY UPWARDS THE LEFT
                for (i = row + 1, j = column - 1; i <= 7 && j >= 0; i++ ){
                    if ( !chessboard[i][j].classList.contains("occupied") ){
                        chessboard[i][j].classList.add("playable");
                        playable.push([i,j]);
                    
                    } else if (chessboard[i][j].classList.contains("occupied") 
                    && !chessboard[i][j].classList.contains(id.side))
                    {
                        if (!chessboard[i][j].classList.contains("throne")){
                            chessboard[i][j].classList.add("captureable");
                            captureable.push([i,j]);
                        }
                        break;
                    } else { break }
                    j--;
                }
    
                // GOING DIAGONALLY DOWNWARDS TO THE LEFT
                for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i-- ){
                    if ( !chessboard[i][j].classList.contains("occupied") ){
                        chessboard[i][j].classList.add("playable");
                        playable.push([i,j]);
                    
                    } else if (chessboard[i][j].classList.contains("occupied") 
                    && !chessboard[i][j].classList.contains(id.side))
                    {
                        if (!chessboard[i][j].classList.contains("throne")){
                            chessboard[i][j].classList.add("captureable");
                            captureable.push([i,j]);
                        }
                        break;
                    } else { break }
                    j--;
                }
                break;


        // MOVEMENT FOR THE ROOK
        case "rook" : // THE COLUMN UPWARDS
            for (i = row + 1, j = column; i <= 7; i++ ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

            // SAME COLUMN DOWNWARDS
            for (i = row - 1, j = column; i >= 0; i-- ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

            // SAME ROW BACKWARDS
            for (i = row, j = column - 1; j >= 0; j-- ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

            // SAME ROW FORWARDS
            for (i = row, j = column + 1; j <= 7; j++ ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

        break;

// THE QUEEN'S MOVEMENT IS SIMPLY THE COMBINATION OF A ROOK AND A BISHOP
        case "queen": 
        
        // MOVEMENT LIKE THE BISHOP
        for (i = row + 1, j = column + 1; i <= 7 && j <= 7; i++ ){
            // GOING DIAGONALLY UPWARDS TO THE RIGHT
            if ( !chessboard[i][j].classList.contains("occupied") ){
                chessboard[i][j].classList.add("playable");
                playable.push([i,j]);
            
            } else if (chessboard[i][j].classList.contains("occupied") 
            && !chessboard[i][j].classList.contains(id.side))
            {
                if (!chessboard[i][j].classList.contains("throne")){
                    chessboard[i][j].classList.add("captureable");
                    captureable.push([i,j]);
                }
                break;
            } else { break }
            j++;
        }

            // GOING DIAGONALLY DOWNWARDS TO THE RIGHT
            for (i = row - 1, j = column + 1; i >= 0 && j <= 7; i-- ){

                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
                j++;
            }

            // GOING DIAGONALLY UPWARDS THE LEFT
            for (i = row + 1, j = column - 1; i <= 7 && j >= 0; i++ ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
                j--;
            }

            // GOING DIAGONALLY DOWNWARDS TO THE LEFT
            for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i-- ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
                j--;
            }


        // MOVEMENT LIKE THE ROOK
            // THE COLUMN UPWARDS
        for (i = row + 1, j = column; i <= 7; i++ ){
            if ( !chessboard[i][j].classList.contains("occupied") ){
                chessboard[i][j].classList.add("playable");
                playable.push([i,j]);
            
            } else if (chessboard[i][j].classList.contains("occupied") 
            && !chessboard[i][j].classList.contains(id.side))
            {
                if (!chessboard[i][j].classList.contains("throne")){
                    chessboard[i][j].classList.add("captureable");
                    captureable.push([i,j]);
                }
                break;
            } else { break }
        }

            // SAME COLUMN DOWNWARDS
            for (i = row - 1, j = column; i >= 0; i-- ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

            // SAME ROW BACKWARDS
            for (i = row, j = column - 1; j >= 0; j-- ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

            // SAME ROW FORWARDS
            for (i = row, j = column + 1; j <= 7; j++ ){
                if ( !chessboard[i][j].classList.contains("occupied") ){
                    chessboard[i][j].classList.add("playable");
                    playable.push([i,j]);
                
                } else if (chessboard[i][j].classList.contains("occupied") 
                && !chessboard[i][j].classList.contains(id.side))
                {
                    if (!chessboard[i][j].classList.contains("throne")){
                        chessboard[i][j].classList.add("captureable");
                        captureable.push([i,j]);
                    }
                    break;
                } else { break }
            }

        break;

        case "king" :  // THE KING MOVE 1 SQUARE IN ALL DIRECTIONS
        Kloop1:
        for ( let i = row+1; i >= row-1 && i >= 0; i--){
            if ( i == 8 ){
                continue Kloop1;
            } else {
                Kloop2:
                for ( j = column+1;  j >= 0 && j >= column-1; j-- ){
                    if ( j == 8 || (i == row && j == column) 
                    || chessboard[i][j].classList.contains('check') 
                    || chessboard[i][j].classList.contains(`threatto${activeSide}`)){
                        continue Kloop2;
                    } else if ( !chessboard[i][j].classList.contains("occupied") ){

                        chessboard[i][j].classList.add("playable");
                        kingPlay.push([i,j]);
                    
                    } else if (chessboard[i][j].classList.contains("occupied") 
                    && !chessboard[i][j].classList.contains(id.side))
                    {
                        if (!chessboard[i][j].classList.contains("throne") ){
                            chessboard[i][j].classList.add("captureable");
                            kingPlay.push([i,j]);
                        }
                    }
                }
            }
        }
        return(kingPlay);
    }

    if ( checked && type != "king"){

        // clear the remove the former selection
        clearMakeUp();
        let scroll = [];
        let len = checkZone2.length;
        for ( element of checkBlock ){
            let size = element.length;
            for ( i = 1; i < size; i++){
                let el = element[i];
                for ( j = 0; j < len; j++){
                    let zone = checkZone2[j]
                    if ( el[0] == zone[0] && el[1] == zone[1] ){
                        chessboard[el[0]][el[1]].classList.add(element[0]);
                        scroll.push([el[0],el[1]])
                    }
                }
            }
        }
        if ( scroll[0] ){} else {document.getElementById("errorAudio").play();}
        return scroll;

    }
}


let checked = false;

function play(arr){
    let a = arr[0];
    let b = arr[1];

    if (chessboard[a][b].classList.contains("playable") 
    || chessboard[a][b].classList.contains("captureable")
    || chessboard[a][b].classList.contains("promotable")){

        if (checked){
            checked = false;
            let c = eval (activeSide + "King" );
            document.querySelector(`.row${c.row+1} .col${c.col+1}`).classList.remove("check");

        } else {

            let returnValue = testMove(activePiece, arr, activeSide )
            let pinned = returnValue;
            if ( pinned ){
                // clear all the threats 
            for ( i = 0; i < 8; i++){
                for( j = 0; j < 8; j++){
                    if ( chessboard[i][j].classList.contains(`threatto${activeSide}`) ){
                        chessboard[i][j].classList.remove(`threatto${activeSide}`);
                    }
                }
            }
                notify (` This ${activePiece.piece[0].toUpperCase() + activePiece.piece.slice(1)} cannot be moved
                It is Pinned to the ${activeSide} King`, "brown")
                return pinned;
            }
        }

        if( chessboard[a][b].classList.contains("promotable") ){
            promote();
        } 

        chessboard[activePiece.row][activePiece.col].classList.remove("occupied");
        chessboard[activePiece.row][activePiece.col].classList.remove(activeSide);

        
        if( chessboard[a][b].classList.contains("captureable") ){
            capture (arr);
        }
        let prevPos = [activePiece.row,activePiece.col];        
        
        chessboard[activePiece.row][activePiece.col].innerHTML = "";

        activePiece.row = a;
        activePiece.col = b;

        

        if ( isChecked(activeSide) ){
            checked = true;
            let c = eval (inactiveSide + "King" );
            document.querySelector(`.row${c.row+1} .col${c.col+1}`).classList.add("check");
            notify(`The ${inactiveSide} King is on a Check `, "red")
        }

        let finalPos = [activePiece.row,activePiece.col];

        if (activePiece.piece == "king"){
            chessboard[prevPos[0]][prevPos[1]].classList.remove("throne");
            chessboard[a][b].classList.add("throne");

        }

        chessboard[a][b].innerHTML = `<img id="${activePiece.id}" 
        onclick="select(${activePiece.id})" 
        src="${activePiece.dir}"
        style="width: 90%; height: 80%;"/>`;
        chessboard[a][b].classList.add("occupied");
        chessboard[a][b].classList.add(activePiece.side);

        
        if( chessboard[a][b].classList.contains("captureable")){
            document.getElementById("captureAudio").play();
        } else if (checked){
            document.getElementById("checkAudio").play();
        } else {
            document.getElementById("playAudio").play();
        }

        if( chessboard[a][b].classList.contains("captureable")){
            history.push( history.pop() + " and " + activePiece.id + " from " + prevPos +" to "+ finalPos);
            
        } else {
            history.push( activePiece.id + " from " + prevPos +" to "+ finalPos );
        }
        
        // if( checked ){
        //     document.getElementById("checkAudio").play();
        // }
        let makeUp = clearMakeUp();

        if (checked && makeUp == "done"){
            if (isCheckmate(activeSide)){
                notify (`The ${inactiveSide} King has been CheckMated`, "red");
                document.getElementById("ggAudio").play();
                endGame(activeSide);

            } else {
                clearMakeUp();
            }
        }
        turn++;

        // show undo button if it was not on
        if (history.length){
            document.querySelector(".history-rev").classList.remove("hide");
        } else {
            document.querySelector(".history-rev").classList.add("hide");
        }
       
    // clear the remove the former selection
    
        for ( i = 0; i < 8; i++){
            for( j = 0; j < 8; j++){
                if ( chessboard[i][j].classList.contains("activated") ){
                    chessboard[i][j].classList.remove("activated");
                }
            }
        }

        

    } 
}


let capture = function (pos){
    let capturedTag = chessboard[pos[0]][pos[1]].innerHTML;
    let tiringStuff = (eval(eval(capturedTag.split("id=")[1].split("onclick")[0])));
    let captured = tiringStuff.id;
    chessboard[pos[0]][pos[1]].classList.remove(inactiveSide);
    tiringStuff.row = "";
    tiringStuff.col = "";
    activeSide == "white" ? capturedBlack.push(captured) : capturedWhite.push(captured);
    history.push( captured + " captured " + "on " + [pos[0],pos[1]] );

}

let testMove = function(soldier, pos, army){
    // we want to check if we get pinned piece after we move the piece

    // temporarily change the position of the piece
    chessboard[soldier.row][soldier.col].classList.remove("occupied");
    chessboard[soldier.row][soldier.col].classList.remove(army);
    let m = soldier.row;
    let n = soldier.col;
    let prevPos = [m,n];

    soldier.row = pos[0];
    soldier.col = pos[1];

    if( !chessboard[soldier.row][soldier.col].classList.contains("occupied") ){
        chessboard[soldier.row][soldier.col].classList.add("occupied");
    }
    chessboard[soldier.row][soldier.col].classList.add(army);

    let j = isPinned(army);

    chessboard[soldier.row][soldier.col].classList.remove(army);

    soldier.row = prevPos[0];
    soldier.col = prevPos[1];

    chessboard[soldier.row][soldier.col].classList.add("occupied");
    chessboard[soldier.row][soldier.col].classList.add(army);

    if ( j == "Pinned Piece"){
        clearMakeUp();
        return `${ soldier.piece.toUpperCase() } is Pinned to the King `
    }
    return false;

    
}

let isPinned = function(side){
    for ( i = 0; i < 8; i++){
        for( j = 0; j < 8; j++){
            if ( chessboard[i][j].classList.contains(`threatto${side}`) ){
                chessboard[i][j].classList.remove(`threatto${side}`);
            }
        }
    }
    
    let bk = [blackKing.row, blackKing.col];
    let wk = [whiteKing.row, whiteKing.col];
    let otherSide;
    
    // if it is white's turn
    if (side == "white"){
        otherSide = "black";
        blackPieces.forEach((blackPiece) => {
            // captured piece cannot cause check
            if ( !capturedBlack.includes(blackPiece.id) ){
                checkScope(blackPiece,side);
            }
        })

         // if the king is in a checked square
         if (chessboard[wk[0]][wk[1]].classList.contains("threattowhite")){
            // console.log("Pinned piece");
            return "Pinned Piece";
        }

    } else {
        otherSide = "white"
        // CHECK IF PIECE IS PINNED
        whitePieces.forEach((whitePiece) => {
            // captured pieces cannot cause check
            if ( !capturedWhite.includes(whitePiece.id) ){
                checkScope( whitePiece,side );
            }
        });
    
        // if the king is on a checked square
        if (chessboard[bk[0]][bk[1]].classList.contains("threattoblack")){
            // say the king is on a check
            // console.log("Pinned black piece");
            return "Pinned Piece";
        }
    }
    // clear all the threats 
    for ( i = 0; i < 8; i++){
        for( j = 0; j < 8; j++){
            if ( chessboard[i][j].classList.contains(`threatto${side}`) ){
                chessboard[i][j].classList.remove(`threatto${side}`);
            }
        }
    }
}

let checkZone = [];
let checkZone2 = [];
let isChecked = function (side){
    let bk = [blackKing.row, blackKing.col];
    let wk = [whiteKing.row, whiteKing.col];
    let otherSide;
    if (side == "white"){
        otherSide = "black";
    } else { 
        otherSide = "white" 
    }
    for ( i = 0; i < 8; i++){
        for( j = 0; j < 8; j++){
            if ( chessboard[i][j].classList.contains(`threatto${side}`) ){
                chessboard[i][j].classList.remove(`threatto${side}`);
            }
        }
    }
    // if it is white's turn
    if (side == "white"){
        // check whether any piece can cause check to the black king
        whitePieces.forEach((whitePiece) => {
            // captured pieces cannot cause check
            if ( !capturedWhite.includes(whitePiece.id) ){
                checkZone = scope( whitePiece, blackKing, otherSide);
                if (checkZone.length > 0){
                    checkZone2 = checkZone.slice();
                }
            }
        });
        
        // if the king is on a checked square
        if (chessboard[bk[0]][bk[1]].classList.contains("threattoblack")){
            // say the king is on a check
            // console.log("black check");
            return checkZone2;
        }
    } else {
        blackPieces.forEach((blackPiece) => {
            // captured piece cannot cause check
            if ( !capturedBlack.includes(blackPiece.id) ){
                checkZone = scope(blackPiece, whiteKing, otherSide);
                if (checkZone.length > 0){
                    checkZone2 = checkZone.slice();
                }
            }
        });
        // if the king is in a checked square
        if (chessboard[wk[0]][wk[1]].classList.contains("threattowhite")){
            // console.log("white check");
            return checkZone2;
        }
    }

    // clear all the threats 
    // for ( i = 0; i < 8; i++){
    //     for( j = 0; j < 8; j++){
    //         if ( chessboard[i][j].classList.contains(`threatto${otherSide}`) ){
    //             chessboard[i][j].classList.remove(`threatto${otherSide}`);
    //         }
    //     }
    // }

    return false;



    // let whiteScope = [];
    // let blackScope = [];
    // if (side == "white"){
    //     whitePieces.forEach((whitePiece) => {
    //         if ( !capturedWhite.includes(whitePiece.id) ){
    //             kingThreat = scope( whitePiece, whiteScope);
    //         }
    //     });
    //     for ( threat of kingThreat ){
    //         if (threat[0] == bk[0] && threat[1] == bk[1]){
    //             return true;
    //         }
    //     }
    //     return false;
            
    // } else {
    //     blackPieces.forEach((blackPiece) => {
    //         if ( !capturedBlack.includes(blackPiece.id) ){
    //             kingThreat = scope(blackPiece, blackScope);
    //         }
    //     });
        

    //     for ( threat of kingThreat ){
    //         if (threat[0] == wk[0] && threat[1] == wk[1]){
    //             return true;
    //         }
    //     }
    //     return false
    // }
        
     
}


function scope (n,king,side){
    let type = n.piece;
    let row = n.row;
    let column = n.col;
    let kr = king.row;
    let kc = king.col;
    let temp = [];
    let array = [] ;

    switch(type){             

        case "wpawn" :  // if a WHITE PAWN and the space in front is empty
        if ( row < 7){
            // if it can capture an opposing piece diagonal from it
            for ( i = row + 1, j = column - 1; i <= 7 && j <= 7 && j <= column + 1; j++){
                if( j == column || j < 0 ){ 
                    continue;
                } 
                if ( kr == i && kc == j ){
                    array = [[row,column]];
                    
                } 
                chessboard[i][j].classList.add(`threatto${side}`);
            }


        }
        break;

            
        case "bpawn": // IF IT IS A BLACK PAWN
        if (row > 0){
            // if it can capture an opposing piece diagonal from it
            for ( i = row - 1, j = column - 1; i >= 0 && j <= 7 && j <= column + 1; j++ ){
                if ( j == column || j < 0){
                    continue;
                }

                if ( kr == i && kc == j ){
                    array = [[row,column]];
                } 
                chessboard[i][j].classList.add(`threatto${side}`);

            }
        }

        break;

        case "knight" : // FOR A KNIGHT
        let a = 2;
        let b = 1;
        let Nmoves = [row + a,column + b,row - a,column - b,row + b,column + a,row - b,column - a,row + a,column - b,row - a,column + b,row + b,column - a,row - b,column + a]
        let size = Nmoves.length;
        for ( i = 0; i < size - 1; i += 2 ){
            if ( Nmoves[i] >= 0 && Nmoves[i+1] >= 0 && Nmoves[i] <= 7 && Nmoves[i+1] <= 7 ){

                r = Nmoves[i];
                c = Nmoves[i+1];
                if ( kr == r && kc == c ){
                    array = [[row,column]];
                } 

                chessboard[r][c].classList.add(`threatto${side}`); 
            }
        }
        break;

        case "bishop" :  // GOING DIAGONALLY UPWARDS TO THE RIGHT
        
            temp = [];

            for (i = row + 1, j = column + 1; i <= 7 && j <= 7; i++ ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);

                if (chessboard[i][j].classList.contains("occupied")){
                    break                     
                }
                j++;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr < 6 && kc < 6){
                    chessboard[kr+1][kc+1].classList.add(`threatto${side}`);
                }                
                array = temp.slice();
                array.unshift([row,column]);
            }
            
            temp = [];

            // GOING DIAGONALLY DOWNWARDS TO THE RIGHT
            for (i = row - 1, j = column + 1; i >= 0 && j <= 7; i-- ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);

                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
                j++;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr > 0 && kc < 6){
                chessboard[kr-1][kc+1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }
    
            // GOING DIAGONALLY UPWARDS THE LEFT
            temp = [];

            for (i = row + 1, j = column - 1; i <= 7 && j >= 0; i++ ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
                j--;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr < 6 && kc > 0){
                chessboard[kr+1][kc-1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }

            // GOING DIAGONALLY DOWNWARDS TO THE LEFT
            temp = [];

            for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i-- ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied")) {
                    break;
                }
                j--;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr > 0 && kc > 0 ){
                chessboard[kr-1][kc-1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }
            break;

        // MOVEMENT FOR THE ROOK
        
        case "rook" : // THE COLUMN UPWARDS
        temp = [];
            for (i = row + 1, j = column; i <= 7; i++ ){
                temp.push[i,j];
                chessboard[i][j].classList.add(`threatto${side}`);

                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr < 6 ){
                chessboard[kr+1][kc].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }

            // SAME COLUMN DOWNWARDS
            temp = [];

            for (i = row - 1, j = column; i >= 0; i-- ){
                temp.push[i,j];
                chessboard[i][j].classList.add(`threatto${side}`);
                
                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr > 0){
                chessboard[kr-1][kc].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }

            // SAME ROW BACKWARDS
            temp = [];

            for (i = row, j = column - 1; j >= 0; j-- ){
                temp.push[i,j];
                chessboard[i][j].classList.add(`threatto${side}`);

                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if (kc > 0){
                chessboard[kr][kc-1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
            }
            // SAME ROW FORWARDS
            temp = [];

            for (i = row, j = column + 1; j <= 7; j++ ){
                temp.push[i,j];
                chessboard[i][j].classList.add(`threatto${side}`);
                
                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if (kc < 6){
                chessboard[kr][kc+1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }

        break;


// THE QUEEN'S MOVEMENT IS SIMPLY THE COMBINATION OF A ROOK AND A BISHOP
        case "queen": 
        
        // MOVEMENT LIKE THE BISHOP
        temp = [];
        for (i = row + 1, j = column + 1; i <= 7 && j <= 7; i++ ){
            temp.push([i,j]);
            chessboard[i][j].classList.add(`threatto${side}`);
            
            if (chessboard[i][j].classList.contains("occupied")){
                break;
            }
            j++;
        }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr < 6 && kc < 6){
                chessboard[kr+1][kc+1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }

            // GOING DIAGONALLY DOWNWARDS TO THE RIGHT
            temp = [];

            for (i = row - 1, j = column + 1; i >= 0 && j <= 7; i-- ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);

                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
                j++;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr > 0 && kc < 6){
                chessboard[kr-1][kc+1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                        }

            // GOING DIAGONALLY UPWARDS THE LEFT
            temp = [];

            for (i = row + 1, j = column - 1; i <= 7 && j >= 0; i++ ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied") ){
                    break;
                }
                j--;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr < 6 && kc > 0){
                chessboard[kr+1][kc-1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
                }

            // GOING DIAGONALLY DOWNWARDS TO THE LEFT
            temp = [];

            for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i-- ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied") ){
                    break;
                }
                j--;
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr > 0 && kc > 0){
                chessboard[kr-1][kc-1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
            }


        // MOVEMENT LIKE THE ROOK
            // THE COLUMN UPWARDS
            temp = [];

            for (i = row + 1, j = column; i <= 7; i++ ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied") ){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr < 6 ){
                chessboard[kr+1][kc].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
            }

            // SAME COLUMN DOWNWARDS
            temp = [];
 
            for (i = row - 1, j = column; i >= 0; i-- ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied") ){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kr > 0){
                chessboard[kr-1][kc].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
            }

            // SAME ROW BACKWARDS
            temp = [];

            for (i = row, j = column - 1; j >= 0; j-- ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied") ){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if ( kc > 0){
                chessboard[kr][kc-1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
            }

            // SAME ROW FORWARDS
            temp = [];

            for (i = row, j = column + 1; j <= 7; j++ ){
                temp.push([i,j]);
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied") ){
                    break;
                }
            }
            if ( temp.length > 0 && temp.slice(-1)[0][0] == kr && temp.slice(-1)[0][1] == kc ) {
                if (kc < 6){
                chessboard[kr][kc+1].classList.add(`threatto${side}`);
                }
                array = temp.slice();
                array.unshift([row,column]);
            }
        break;

        case "king" :  // THE KING MOVE 1 SQUARE IN ALL DIRECTIONS
        Kloop1:
        for ( let i = row+1; i >= row-1 && i >= 0; i--){
            if ( i == 8  ){
                continue Kloop1;
            } else {
            Kloop2:
                for ( j = column+1;  j >= 0 && j >= column-1; j-- ){
                    if ( j == 8 || (i == row && j == column) ){
                        continue Kloop2;
                    }
                    temp.push([i,j]);
                    chessboard[i][j].classList.add(`threatto${side}`);
                    if ( chessboard[i][j].classList.contains("occupied") ){
                    }
                }
            
            }
    }
    break;
    
}
return array;

}

function checkScope (n,side){
    let type = n.piece;
    let row = n.row;
    let column = n.col;

    switch(type){             

        case "wpawn" :  // if a WHITE PAWN and the space in front is empty
        if ( row < 7){
            // if it can capture an opposing piece diagonal from it
            for ( i = row + 1, j = column - 1; i <= 7 && j <= 7 && j <= column + 1; j++){
                if( j == column || j < 0 ){ 
                    continue;
                }
                chessboard[i][j].classList.add(`threatto${side}`);
            }
        }
        break;

            
        case "bpawn": // IF IT IS A BLACK PAWN
        if (row > 0){
            // if it can capture an opposing piece diagonal from it
            for ( i = row - 1, j = column - 1; i >= 0 && j <= 7 && j <= column + 1; j++ ){
                if ( j == column || j < 0){
                    continue;
                }
                chessboard[i][j].classList.add(`threatto${side}`);
            }
        }
        break;

        case "knight" : // FOR A KNIGHT
        let a = 2;
        let b = 1;
        let Nmoves = [row + a,column + b,row - a,column - b,row + b,column + a,row - b,column - a,row + a,column - b,row - a,column + b,row + b,column - a,row - b,column + a]
        let size = Nmoves.length;
        for ( i = 0; i < size - 1; i += 2 ){
            if ( Nmoves[i] >= 0 && Nmoves[i+1] >= 0 && Nmoves[i] <= 7 && Nmoves[i+1] <= 7 ){
                r = Nmoves[i];
                c = Nmoves[i+1];
                chessboard[r][c].classList.add(`threatto${side}`); 
            }
        }
        break;

        case "bishop" :  // GOING DIAGONALLY UPWARDS TO THE RIGHT
        for (i = row + 1, j = column + 1; i <= 7 && j <= 7; i++ ){
            chessboard[i][j].classList.add(`threatto${side}`);
            if (chessboard[i][j].classList.contains("occupied")){
                break                     
            }
            j++;
            }
            // GOING DIAGONALLY DOWNWARDS TO THE RIGHT
            for (i = row - 1, j = column + 1; i >= 0 && j <= 7; i-- ){
                chessboard[i][j].classList.add(`threatto${side}`);

                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
                j++;
            }
            // GOING DIAGONALLY UPWARDS THE LEFT
            for (i = row + 1, j = column - 1; i <= 7 && j >= 0; i++ ){
                chessboard[i][j].classList.add(`threatto${side}`);
                if (chessboard[i][j].classList.contains("occupied")){
                    break;
                }
                j--;
            }
            // GOING DIAGONALLY DOWNWARDS TO THE LEFT
            for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i-- ){
                chessboard[i][j].classList.add(`threatto${side}`);
                if ( chessboard[i][j].classList.contains("occupied")) {
                    break;
                }
                j--;
            }

            break;

        // MOVEMENT FOR THE ROOK
        
        case "rook" : // THE COLUMN UPWARDS
        for (i = row + 1, j = column; i <= 7; i++ ){
            chessboard[i][j].classList.add(`threatto${side}`);
            if (chessboard[i][j].classList.contains("occupied")){
                break;
            }
        }
        // SAME COLUMN DOWNWARDS
        for (i = row - 1, j = column; i >= 0; i-- ){
            chessboard[i][j].classList.add(`threatto${side}`);
            
            if (chessboard[i][j].classList.contains("occupied")){
                break;
            }
        }
        // SAME ROW BACKWARDS
        for (i = row, j = column - 1; j >= 0; j-- ){
            chessboard[i][j].classList.add(`threatto${side}`);

            if (chessboard[i][j].classList.contains("occupied")){
                break;
            }
        }
        // SAME ROW FORWARDS
        for (i = row, j = column + 1; j <= 7; j++ ){
            chessboard[i][j].classList.add(`threatto${side}`);
            
            if (chessboard[i][j].classList.contains("occupied")){
                break;
            }
        }

    break;


    // THE QUEEN'S MOVEMENT IS SIMPLY THE COMBINATION OF A ROOK AND A BISHOP
    case "queen": 
    
    // MOVEMENT LIKE THE BISHOPtemp = [];
    for (i = row + 1, j = column + 1; i <= 7 && j <= 7; i++ ){
        chessboard[i][j].classList.add(`threatto${side}`);
        
        if (chessboard[i][j].classList.contains("occupied")){
            break;
        }
        j++;
    }
    // GOING DIAGONALLY DOWNWARDS TO THE RIGHT
    for (i = row - 1, j = column + 1; i >= 0 && j <= 7; i-- ){
        chessboard[i][j].classList.add(`threatto${side}`);

        if (chessboard[i][j].classList.contains("occupied")){
            break;
        }
        j++;
    }
    // GOING DIAGONALLY UPWARDS THE LEFT
    for (i = row + 1, j = column - 1; i <= 7 && j >= 0; i++ ){
        chessboard[i][j].classList.add(`threatto${side}`);
        if ( chessboard[i][j].classList.contains("occupied") ){
            break;
        }
        j--;
    }
    // GOING DIAGONALLY DOWNWARDS TO THE LEFT
    for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i-- ){
        chessboard[i][j].classList.add(`threatto${side}`);
        if ( chessboard[i][j].classList.contains("occupied") ){
            break;
        }
        j--;
    }
    // MOVEMENT LIKE THE ROOK
    // THE COLUMN UPWARDS
        for (i = row + 1, j = column; i <= 7; i++ ){
            chessboard[i][j].classList.add(`threatto${side}`);
            if ( chessboard[i][j].classList.contains("occupied") ){
                break;
            }
        }
        // SAME COLUMN DOWNWARDS
        for (i = row - 1, j = column; i >= 0; i-- ){
            chessboard[i][j].classList.add(`threatto${side}`);
            if ( chessboard[i][j].classList.contains("occupied") ){
                break;
            }
        }
        // SAME ROW BACKWARDS
            for (i = row, j = column - 1; j >= 0; j-- ){
            chessboard[i][j].classList.add(`threatto${side}`);
            if ( chessboard[i][j].classList.contains("occupied") ){
                break;
            }
        }
        // SAME ROW FORWARDS
        for (i = row, j = column + 1; j <= 7; j++ ){
            chessboard[i][j].classList.add(`threatto${side}`);
            if ( chessboard[i][j].classList.contains("occupied") ){
                break;
            }
        }
        
        break;

        case "king" :  // THE KING MOVE 1 SQUARE IN ALL DIRECTIONS
        Kloop1:
        for ( let i = row+1; i >= row-1 && i >= 0; i--){
            if ( i == 8 ){
                continue Kloop1;
            } else {
            Kloop2:
                for ( j = column+1; j >= column-1 & j >= 0; j-- ){
                    if ( j == 8  || (i == row && j == column) ){
                        continue Kloop2;
                    }
                    chessboard[i][j].classList.add(`threatto${side}`);
                    if ( chessboard[i][j].classList.contains("occupied") ){
                    }
                }
            
            }
        }

        break;
    
    }
}


let promoteModal = document.getElementById("promote-overlay");
let chessBg = document.getElementsByTagName("table");

let promote = function(){
    // show promotion overlay
    chessBg[0].style.filter = "blur(5px)";
    document.getElementById("side").innerText = `${activeSide.toUpperCase()} PAWN`;

    document.getElementById("side").style.color = activeSide;
    document.getElementById("side").style.textShadow = `5px 5px 4px ${inactiveSide}`;

    document.getElementById("toQueen").innerHTML = `<img src = "${activeSide}-pawn-queen.png" style="width: 100px; height: 100px;" /> <br> <span style="font-size: 30px; color: ${inactiveSide}; text-shadow: 5px 5px 4px ${activeSide};"> Queen <span>`
    document.getElementById("toRook").innerHTML = `<img src = "${activeSide}-pawn-rook.png" style="width: 100px; height: 100px;" /> <br> <span style="font-size: 30px; color: ${inactiveSide}; text-shadow: 5px 5px 4px ${activeSide};"> Rook <span>`
    document.getElementById("toBishop").innerHTML = `<img src = "${activeSide}-pawn-bishop.png" style="width: 100px; height: 100px;" /> <br> <span style="font-size: 30px; color: ${inactiveSide}; text-shadow: 5px 5px 4px ${activeSide};"> Bishop <span>`
    document.getElementById("toKnight").innerHTML = `<img src = "${activeSide}-pawn-knight.png" style="width: 100px; height: 100px;" /> <br> <span style="font-size: 30px; color: ${inactiveSide}; text-shadow: 5px 5px 4px ${activeSide};"> Knight <span>`

    
    promoteModal.style.display = "flex";

}


let upgrade = function(newPiece){
    // select new piece
    // change the piece to new piece
    oldPiece = activePiece.piece;
    activePiece.piece = newPiece;

    // swap the new piece for the pawn 
    activePiece.dir = `${activeSide}-${newPiece}.png`;

    // remove promotion overlay
    promoteModal.style.display = "none"; 
    chessBg[0].style.filter = "none";

    let g = activePiece.row;
    let h = activePiece.col

    // add the promotion to history
    history.push( history.pop() + " and " + `${activePiece.id} promoted to ${newPiece}`);
    // console.log(history);

    chessboard[g][h].innerHTML = `<img id="${activePiece.id}" 
    onclick="select(${activePiece.id})" 
    src="${activePiece.dir}"
    style="height: 80%; width: 90%;"/>`;

    notify (`A ${activePiece.side[0].toUpperCase() + activePiece.side.slice(1)} ${oldPiece[1].toUpperCase() + oldPiece.slice(2)} has been promoted to a ${newPiece[0].toUpperCase() + newPiece.slice(1)}`, "blue");

    if ( isChecked(activeSide) ){
        checked = true;
        let c = eval (inactiveSide + "King" );
        document.querySelector(`.row${c.row+1} .col${c.col+1}`).classList.add("check");
    }
}
    let isCheckmate = function(colour ){
        // if it is white's turn
    if (colour == "black"){
        for ( whitePiece of whitePieces ) {
            // captured piece cannot cause check
            if ( !capturedWhite.includes(eval ("whitePiece.id")) ){
                let z = showPlays(whitePiece);
                z = z;
                
                if (whitePiece == whiteKing){
                    z = z;
                    if(z[0]){
                        for ( i = 0; i < z.length; i ++){
                            let l = z[i];
                            if (chessboard[l[0]][l[1]].classList.contains("threattowhite")){
                                if (chessboard[l[0]][l[1]].classList.contains("playable")){
                                    chessboard[l[0]][l[1]].classList.remove("playable")
                                    
                                } else if (chessboard[l[0]][l[1]].classList.contains("captureable")){
                                    chessboard[l[0]][l[1]].classList.remove("captureable")
                                }
                            }
                        }
                    }
                } else {
                    if (z[0]){
                        // console.log("not");
                        return false 
                    }
                }
            }
        }
        for ( i = 0; i < 8; i++){
            for( j = 0; j < 8; j++){
                if ( chessboard[i][j].classList.contains("playable") || chessboard[i][j].classList.contains("captureable") ){
                    // console.log("not");
                    clearMakeUp();
                    return false;
                }
            }
        }
        
        let k = whiteKing;
        row = k.row;
        column = k.column;
        Kloop1:
        for ( let i = row+1; i >= row-1 && i >= 0; i--){
            if ( i == 8  ){
                continue Kloop1;
            } else {
            Kloop2:
                for ( j = column+1;  j >= 0 && j >= column-1; j-- ){
                    if ( j == 8 || (i == row && j == column) ){
                        continue Kloop2;
                    }
                    chessboard[i][j].classList.add("check");
                }
            
            }
        }
        return true;

    } else {
        for ( blackPiece of blackPieces ) {
            // captured pieces cannot cause check
            if ( !capturedBlack.includes( eval ("blackPiece.id")) ){
                let y = showPlays( blackPiece);
                y = y;
                if (blackPiece == blackKing){
                    y = y;
                    if (y[0]){
                        for ( i = 0; i < y.length; i ++){
                            let k = y[i];
                            if (chessboard[k[0]][k[1]].classList.contains("threattoblack")){
                                if (chessboard[k[0]][k[1]].classList.contains("playable")){
                                    chessboard[k[0]][k[1]].classList.remove("playable")
                                    
                                } else if (chessboard[k[0]][k[1]].classList.contains("captureable")){
                                    chessboard[k[0]][k[1]].classList.remove("captureable")
                                }
                            }
                        }
                    }
                } else {
                    if (y[0]){
                        return false 
                    }
                }
            }
        }

        for ( i = 7; i > 0; i--){
            for( j = 7; j > 0; j--){
                if ( chessboard[i][j].classList.contains("playable") || chessboard[i][j].classList.contains("captureable") ){
                    // console.log([i,j]);
                    clearMakeUp();
                    return false;
                }
            }
        }
        let k = blackKing;
        row = k.row;
        column = k.column;
        Kloop1:
        for ( let i = row+1; i >= row-1 && i >= 0; i--){
            if ( i == 8  ){
                continue Kloop1;
            } else {
            Kloop2:
                for ( j = column+1;  j >= 0 && j >= column-1; j-- ){
                    if ( j == 8 || (i == row && j == column) ){
                        continue Kloop2;
                    }
                    chessboard[i][j].classList.add("check");
                }
            
            }
        }
        return true;
    }
    
}

let undo = function(){
    if (history.length == 0){
        return
    } 
    setTimeout(function() {

        let split = history.splice(-1)[0];
        let lastLog = split.split(" ");
        undoPiece = eval(lastLog[0]);
        side = undoPiece.side;
        let oppSide;
        side == "white" ? oppSide = "black" : oppSide = "white"
        if (lastLog[1] == "from" && lastLog[5] != "and"){

            let newPos = [eval(lastLog[4][0]),eval(lastLog[4][2])];
            chessboard[newPos[0]][newPos[1]].classList.remove("occupied");
            chessboard[newPos[0]][newPos[1]].classList.remove(side);
            chessboard[newPos[0]][newPos[1]].innerHTML = "";

            let oldPos = [eval(lastLog[2][0]),eval(lastLog[2][2])];
            if (chessboard[newPos[0]][newPos[1]].classList.contains("throne")){
                chessboard[newPos[0]][newPos[1]].classList.remove("throne");
                chessboard[oldPos[0]][oldPos[1]].classList.add("throne");
            }

            undoPiece.row = oldPos[0];
            undoPiece.col = oldPos[1];

            chessboard[oldPos[0]][oldPos[1]].classList.add("occupied");
            chessboard[oldPos[0]][oldPos[1]].classList.add(side);
            chessboard[oldPos[0]][oldPos[1]].innerHTML = `<img id="${undoPiece.id}" 
            onclick="select(${undoPiece.id})" 
            src="${undoPiece.dir}"
            style="height: 80%; width: 90%;"/>`;



        } else if (lastLog[1] == "captured"){
            // reverse the capturer
            let capturer = eval(lastLog[5]);
            // the square the capture took place
            let capNew = [eval(lastLog[9][0]),eval(lastLog[9][2])];
            // 
            chessboard[capNew[0]][capNew[1]].classList.remove(capturer.side);

            // the square that the piece was on before the capture
            let capOld = [eval(lastLog[7][0]),eval(lastLog[7][2])];
            // if it was a king drag his throne with him
            if (chessboard[capNew[0]][capNew[1]].classList.contains("throne")){
                chessboard[capNew[0]][capNew[1]].classList.remove("throne");
                chessboard[capOld[0]][capOld[1]].classList.add("throne");
            }

            capturer.row = capOld[0];
            capturer.col = capOld[1];

            chessboard[capOld[0]][capOld[1]].classList.add(capturer.side);
            chessboard[capOld[0]][capOld[1]].innerHTML = `<img id="${capturer.id}" 
            onclick="select(${capturer.id})" 
            src="${capturer.dir}"
            style="width: 90%; height: 80%;"/>`;

            // undo the capture

            let oldPos = [eval(lastLog[3][0]), eval(lastLog[3][2])];
            undoPiece.row = oldPos[0];
            undoPiece.col = oldPos[1];
            side == "white" ? capturedWhite.pop() : capturedBlack.pop();
            chessboard[oldPos[0]][oldPos[1]].classList.add(side);

            chessboard[oldPos[0]][oldPos[1]].innerHTML = `<img id="${undoPiece.id}" 
            onclick="select(${undoPiece.id})" 
            src="${undoPiece.dir}"
            style="width: 90%; height: 80%;"/>`;

            // undo the promotion(if any)
            if ( lastLog[12] ){
                let promoted = eval(lastLog[11]);

                let promOld = [eval(lastLog[7][0]),eval(lastLog[7][2])];

                promoted.row = promOld[0];
                promoted.col = promOld[1];

                promoted.side == "white" ? promoted.piece = "wpawn": promoted.piece = "bpawn";
                promoted.dir = promoted.side + "-pawn" + promoted.id.slice(-2,-1) + ".png";

                chessboard[promOld[0]][promOld[1]].innerHTML = `<img id="${promoted.id}" 
                onclick="select(${promoted.id})" 
                src="${promoted.side + "-pawn" + promoted.id.slice(-2,-1) + ".png"}"
                style="width: 90%; height: 80%;"/>`;
            
            }


        } else {

            let newPos = [eval(lastLog[4][0]),eval(lastLog[4][2])];
            chessboard[newPos[0]][newPos[1]].classList.remove("occupied");
            chessboard[newPos[0]][newPos[1]].classList.remove(side);
            chessboard[newPos[0]][newPos[1]].innerHTML = "";

            let oldPos = [eval(lastLog[2][0]),eval(lastLog[2][2])];
            if (chessboard[newPos[0]][newPos[1]].classList.contains("throne")){
                chessboard[newPos[0]][newPos[1]].classList.remove("throne");
                chessboard[oldPos[0]][oldPos[1]].classList.add("throne");
            }

            undoPiece.row = oldPos[0];
            undoPiece.col = oldPos[1];

            chessboard[oldPos[0]][oldPos[1]].classList.add("occupied");
            chessboard[oldPos[0]][oldPos[1]].classList.add(side);

            side == "white" ? undoPiece.piece = "wpawn": undoPiece.piece = "bpawn";
            undoPiece.dir = side + "-pawn" + undoPiece.id.slice(-2,-1) + ".png";

            chessboard[oldPos[0]][oldPos[1]].innerHTML = `<img id="${undoPiece.id}" 
            onclick="select(${undoPiece.id})" 
            src="${side + "-pawn" + undoPiece.id.slice(-2,-1) + ".png"}"
            style="width: 90%; height: 80%;"/>`;

        }
        document.getElementById("reverseAudio").play()
        notify( "Most recent history has been removed", "brown");
        isChecked(side);
        isChecked(oppSide);

        turn--;
        return history
    }, 200);
}


let endGame = function(activeSide){
    chessBg[0].style.filter = "blur(5px)";
    document.getElementById("winner").innerText = activeSide.toUpperCase();
    document.getElementById("mateImg-bag").innerHTML = `<img id="mateImg" src= "${activeSide}Checkmate.jpg" />`;
    document.getElementById("winner").style.color = activeSide;
    document.getElementById("winner").style.textShadow = `0px 0px 7px ${inactiveSide}`;
    document.getElementById("end-overlay").style.display = "flex";

}

let notify = function(phrase,colour){
    
    document.getElementById("notify").style.animationName = "";
    setTimeout(function() {
        document.getElementById("note").innerText = phrase;
        document.getElementById("note-theme").style.backgroundColor = colour;
        document.getElementById("notify").style.animationName = "slideInOut";
    }, 100);
    
    
}
document.getElementById("replay").innerHTML = `<a href = "${document.URL}"> PLAY AGAIN </a>`;
        
        
        // add to list of promoted pawns with img id
// - capture
// - promotion
// - check & mate
