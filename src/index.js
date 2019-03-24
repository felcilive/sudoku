module.exports = function solveSudoku(s) {
    
            for (var row = 0; row < 9; row++) {
                var n = 1;
                for (var coll = 0; coll < 9; coll++) {
                    if (s[row][coll] == 0) {
                        if (haveN(n, row, coll)) {
                            s[row][coll] = n;
                            n++;                      
                        }
                    }
                }
            }
            return s;

            function haveN(n, row, coll) {
                var a,b;
                for (var i = 0; i < 9; i++) {
                    if (s[i][coll] == n)
                        return false;
                }
                for (var j = 0; j < 9; j++) {
                    if (s[row][j] == n)
                        return false;
                }
                quadro(a, b, coll, row);
                for (var i = b; i < b + 3; i++) {
                    for (var j = a; j < a + 3; j++) {
                        if (s[i][j] == n)
                            return false;
                    }
                }
                return true;
            }

            function quadro(a, b, coll, row) {

                if (coll <= 2)
                    a = 0;
                if (coll <= 5)
                    a = 3;

                if (coll <= 8)
                    a = 6;

                if (row <= 2)
                    b = 0;
                if (row <= 5)
                    b = 3;
                if (row <= 8)
                    b = 6;
            
            return (a, b);
        }
    }

