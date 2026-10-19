class Solution {
    calculationStack: number[] = [];

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        for (const token of tokens) {
            if (this.isOperand(token)) {
                const rightHand = this.calculationStack.pop();
                const leftHand = this.calculationStack.pop();

                const result = this.performCalculation(leftHand, rightHand, token);

                // console.log(`${leftHand} ${token} ${rightHand} = ${result}`);

                this.calculationStack.push(result);
            } else {
                this.calculationStack.push(Number(token));
            }
        }
        
        const result = this.calculationStack.pop();
        // console.log(`Final Result ${result}`);
        return result;
    }

    private isOperand(token: string): boolean {
        const operands = ["+", "-", "*", "/"];
        return operands.includes(token);
    }

    private performCalculation(leftHand: number, rightHand: number, operation: string): number {
        switch(operation) {
            case "+":
                return leftHand + rightHand;
            case "-":
                return leftHand - rightHand;
            case "*":
                return leftHand * rightHand;
            case "/":
                const intermediate = leftHand / rightHand;

                if (intermediate < 0) {
                    return Math.ceil(intermediate);
                } else {
                    return Math.floor(leftHand / rightHand);
                }
            default:
                return 0;
        }
    }
}
