module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    let stack = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            if (j % 2 == 0) {
                brackets.push(bracketsConfig[i][j]);
            } else {
                brackets.push(bracketsConfig[i][j]);
            }
        }
    }
    for (let i = 0; i < str.length; i++) {
        let bracketsIndex = brackets.indexOf(str[i]);
        if (bracketsIndex % 2 === 0 && (brackets[brackets.indexOf(str[i])] !== brackets[brackets.indexOf(str[i]) + 1])) {
            stack.push(brackets[bracketsIndex]);
        } else if (bracketsIndex % 2 === 0 && (brackets[brackets.indexOf(str[i])] == brackets[brackets.indexOf(str[i]) + 1]) && brackets[brackets.indexOf(str[i])] !== stack[stack.length - 1]) {
            stack.push(brackets[bracketsIndex]);
        } else if (bracketsIndex % 2 === 0 && (brackets[brackets.indexOf(str[i])] !== brackets[brackets.indexOf(str[i]) + 1]) && brackets[brackets.indexOf(str[i])] == stack[stack.length - 1]) {
            stack.pop();
        } else if (bracketsIndex % 2 === 0 && (brackets[brackets.indexOf(str[i])] == brackets[brackets.indexOf(str[i]) + 1]) && brackets[brackets.indexOf(str[i])] == stack[stack.length - 1]) {
            stack.pop();
        } else if (stack.pop() !== brackets[bracketsIndex - 1]) return false;
    }
    return stack.length === 0;
}