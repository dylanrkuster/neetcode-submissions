type TempByDay = {
    day: number;
    temp: number;
};

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = Array(temperatures.length).fill(0);
        const decreasingTempStack: TempByDay[] = [];
        let currentDay = 0;

        const pushToStackAndAdvance = (currentTemp: number): void => {
            decreasingTempStack.push({
                day: currentDay,
                temp: currentTemp,
            });
            currentDay++;
        };

        while (currentDay < temperatures.length) {
            const currentTemp = temperatures[currentDay];

            if (!decreasingTempStack.length) {
                pushToStackAndAdvance(currentTemp);
                continue;
            }
            
            const lowestSeen = decreasingTempStack[decreasingTempStack.length - 1];

            if (currentTemp > lowestSeen.temp) {
                decreasingTempStack.pop();
                result[lowestSeen.day] = currentDay - lowestSeen.day;
            } else {
                pushToStackAndAdvance(currentTemp);
            }
        }

        return result;
    }
}
