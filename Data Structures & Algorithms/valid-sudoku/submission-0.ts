class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // quick check to validate our input
        if (board.length !== 9 && board[0].length !== 9) return false;

        const rowValidity = Array.from({ length: 9 }, () => new Set<number>());
        const columnValidity = Array.from({ length: 9 }, () => new Set<number>());
        const subBoxValidity = [];
        for (let i = 0; i < 3; i++) {
            const subBoxRow = [];
            for (let j = 0; j < 3; j++) {
                subBoxRow.push(new Set<number>());
            }
            subBoxValidity.push(subBoxRow);
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const boardEntry = board[i][j];

                if (boardEntry === ".") continue; // empty entry is valid

                const numericEntry = Number(boardEntry);
                if (!numericEntry) return false; // found a bad value

                const rowCheck = rowValidity[i];
                const colCheck = columnValidity[j];
                const subBoxCheck = subBoxValidity[Math.floor(i / 3)][Math.floor(j / 3)];

                console.log(`${i}, ${j}`)
                console.log(rowCheck);
                console.log(colCheck);
                console.log(subBoxCheck);

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

        return true;
    }
}
