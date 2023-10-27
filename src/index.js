module.exports = function check(str, bracketsConfig) {
    const queue = [];

    for (const char of str) {
        const pair = bracketsConfig.find(config => config[0] === char || config[1] === char);

        if (pair[0] === pair[1]) {
            if (queue.length > 0 && queue[queue.length - 1] === char) {
                queue.pop();
            } else {
                queue.push(char);
            }
        } else if (char === pair[0]) {
            queue.push(char);
        } else {
            if (queue.length === 0 || queue.pop() !== pair[0]) {
                return false;
            }
        }
    }

    return queue.length === 0;
}
