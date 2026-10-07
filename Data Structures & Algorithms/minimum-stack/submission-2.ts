class MinStack {

    // maintain 2 stacks
    // the actual stack the user pushes and pops to/from
    stack = [];

    // the point-in-time minimum that corresponds to a given index within the main stack
    // aka - what is the minimum in the stack when a given element is pushed to it
    // its always either the current minimum or something smaller that has just been pushed
    pitMin = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        // point-in-time min is either the value we've just received or the top of the pitMin stack
        const curMin = this.getMin();
        this.pitMin.push(
            curMin !== undefined ? Math.min(curMin, val) : val
        );
    }

    /**
     * keep the two stacks in sync
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
