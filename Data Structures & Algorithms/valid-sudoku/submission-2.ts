class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // quick check to validate our input
        if (board.length !== 9 && board[0].length !== 9) return false;

        // each row, column, and 3x3 subbox may only contain elements 1-9 once
        const rowValidity = Array.from({ length: 9 }, () => new Set<number>());
        const columnValidity = Array.from({ length: 9 }, () => new Set<number>());
        const subBoxValidity = Array.from({ length: 3 }, () => 
            Array.from({ length: 3 }, () => new Set<number>())
        );

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const boardEntry = board[i][j];

                if (boardEntry === ".") continue; // empty entry is valid

                const numericEntry = Number(boardEntry);
                if (!numericEntry) return false; // found a bad value

                const rowCheck = rowValidity[i];
                const colCheck = columnValidity[j];
                const subBoxCheck = subBoxValidity[Math.floor(i / 3)][Math.floor(j / 3)];

                // when a row, column, or subbox contains a dupe, its invalid
                if (
                    rowCheck.has(numericEntry) ||
                    colCheck.has(numericEntry) ||
                    subBoxCheck.has(numericEntry)
                ) {
                    return false;
                }

                rowCheck.add(numericEntry);
                colCheck.add(numericEntry);
                subBoxCheck.add(numericEntry);
            }
        }

        // nothing stumped it
        return true;
    }
}
