module.exports =  function (target, keys, defaultValue = '') {
    if (!target) return defaultValue;
    let arrTestReg = /(\w+)?(\[\d+\])+?/;
    let arrKeyReg = /^\w+/g;
    let arrIndexReg = /(\d+)+/g;
    let splitKeys = keys.split('.');
    let has = Object.prototype.hasOwnProperty;
    let pointer = target;
    for (let i = 0; i < splitKeys.length; i++) {
        let current = splitKeys[i];
        if (arrTestReg.test(current)) {
            let key = current.match(arrKeyReg);
            if (key !== null) {
                if (!has.call(pointer, key[0])) return defaultValue;
                pointer = pointer[key[0]];
            }
            let indexs = current.match(arrIndexReg);
            for (let j = 0; j < indexs.length; j++) {
                if (!has.call(pointer, indexs[j])) return defaultValue;
                pointer = pointer[indexs[j]];
            }
        } else {
            if (!has.call(pointer, current)) return defaultValue;
            pointer = pointer[current];
        }
    }
    return pointer;
}