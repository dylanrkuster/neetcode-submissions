class MinStack {

    stack = [];
    pitMin = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        const curMin = this.getMin();

        this.pitMin.push(
            curMin !== undefined ? Math.min(curMin, val) : val
        );
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.pitMin.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.pitMin[this.pitMin.length - 1];
    }
}
