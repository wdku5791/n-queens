/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var boardObj = new Board({'n': n });
  var board = boardObj.rows();
  var columnCheck = {};

  var rooks = function (board, rooksLeft, rowIndex) {
    if (rowIndex === n ) {
      var answer = board.slice();
      solution.push(answer);
      return;
    } else {
      for (var i = 0; i < board.length; i++) {
        board[rowIndex][i] = 1;
        if (!(boardObj.hasRowConflictAt(rowIndex) || boardObj.hasColConflictAt(i))) {
          rooks(board, rooksLeft, rowIndex + 1);
        } else {
          board[rowIndex][i] = 0;
        }
      }
    }
  };
  rooks(board, n, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution[0]));
  return solution[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = 0; //fixme
  var boardObj = new Board({'n': n });
  var board = boardObj.rows();

  var rooks = function (board, rowIndex) {    
    for (var i = 0; i < board.length; i++) {
      board[rowIndex][i] = 1;
      if (!(boardObj.hasRowConflictAt(rowIndex) || boardObj.hasColConflictAt(i))) {
        if (rowIndex + 1 === n) {
          solution++;
        } else {
          rooks(board, rowIndex + 1);
        }
      } 
      board[rowIndex][i] = 0;
    }
  };
  rooks(board, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solution);
  return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var boardObj = new Board({'n': n });
  var board = boardObj.rows();
  var solutionFound = false;

  var rooks = function (board, rooksLeft, rowIndex) {
    if (rowIndex === n ) {
      //if (!(boardObj.hasRowConflictAt(rowIndex) || boardObj.hasColConflictAt(i) || boardObj.hasAnyMajorDiagonalConflicts() || boardObj.hasAnyMinorDiagonalConflicts())) {
      solution.push(board);
      solutionFound = true;
      return;
      // }
    } else {
      for (var i = 0; i < board.length; i++) {
        board[rowIndex][i] = 1;
        if (!(boardObj.hasRowConflictAt(rowIndex) || boardObj.hasColConflictAt(i) || boardObj.hasAnyMajorDiagonalConflicts() || boardObj.hasAnyMinorDiagonalConflicts())) {
          rooks(board, rooksLeft, rowIndex + 1);
          if (!(solutionFound)) {
            board[rowIndex][i] = 0;
          }
        } else {
          board[rowIndex][i] = 0;
        }
      }
    }
  };
  rooks(board, n, 0);
  if (solution[0] === undefined) {
    console.log('Single solution for ' + n + ' queens:', '0');
    return board;
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution[0]));
  return solution[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = 0; //fixme
  var boardObj = new Board({'n': n });
  var board = boardObj.rows();

  var rooks = function (board, rooksLeft, rowIndex) {
    if (rowIndex === n ) {
      //if (!(boardObj.hasRowConflictAt(rowIndex) || boardObj.hasColConflictAt(i) || boardObj.hasAnyMajorDiagonalConflicts() || boardObj.hasAnyMinorDiagonalConflicts())) {
      solution++;
      return; 
      //}
    } else {
      for (var i = 0; i < board.length; i++) {
        board[rowIndex][i] = 1;
        if (!(boardObj.hasRowConflictAt(rowIndex) || boardObj.hasColConflictAt(i) || boardObj.hasAnyMajorDiagonalConflicts() || boardObj.hasAnyMinorDiagonalConflicts())) {
          rooks(board, rooksLeft, rowIndex + 1);
        } 
        board[rowIndex][i] = 0;
      }
    }
  };
  rooks(board, n, 0);

  console.log('Number of solutions for ' + n + ' queens:', solution);
  return solution;
};




