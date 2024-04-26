var result = document.getElementById('result');
result === null || result === void 0 ? void 0 : result.addEventListener("keypress", function (event) {
    var _a;
    if (event.key == 'Enter') {
        (_a = document.getElementById("calculate")) === null || _a === void 0 ? void 0 : _a.click();
        var bodlogo = result.value;
        calculate(bodlogo);
    }
});
var calculate = function (bodlogo) {
    var bodolt = bodlogo;
    var bodlogoArr = [];
    var lastOpIndex = 0;
    for (var i = 0; i < bodlogo.length; i++) {
        var negj = bodlogo[i];
        switch (negj) {
            case '*':
            case '/':
            case '+':
            case '-':
                var part = bodolt.slice(lastOpIndex, i);
                if (part)
                    bodlogoArr.push(part);
                bodlogoArr.push(negj);
                lastOpIndex = i + 1;
                break;
            default:
                break;
        }
    }
    if (lastOpIndex < bodolt.length) {
        var part = bodolt.slice(lastOpIndex);
        if (part)
            bodlogoArr.push(part);
    }
    var urjverHuvaahBairlal = function (s) {
        return s === '*' || s === '/';
    };
    var urjverHuvaah = function (s) {
        if (bodlogoArr[s] === '*') {
            return bodlogoArr[s - 1] * bodlogoArr[s + 1];
        }
        else {
            return bodlogoArr[s - 1] / bodlogoArr[s + 1];
        }
    };
    for (var i = 0; i < bodlogoArr.length; i++) {
        if (bodlogoArr.includes('*') || bodlogoArr.includes('/')) {
            var s = bodlogoArr.findIndex(urjverHuvaahBairlal);
            var urjverHuvaahHariu = urjverHuvaah(s);
            bodlogoArr.splice(s - 1, 3, urjverHuvaahHariu);
            console.log(bodlogoArr);
        }
    }
    for (var i = 0; i < bodlogoArr.length; i++) {
        if (bodlogoArr.includes('+') || bodlogoArr.includes('-')) {
            switch (bodlogoArr[i]) {
                case '+':
                    var niilber = parseInt(bodlogoArr[i - 1]) + parseInt(bodlogoArr[i + 1]);
                    bodlogoArr.splice(i - 1, 3, niilber);
                    console.log(bodlogoArr);
                    break;
                case '-':
                    var noogdvor = parseInt(bodlogoArr[i - 1]) - parseInt(bodlogoArr[i + 1]);
                    bodlogoArr.splice(i - 1, 3, noogdvor);
                    console.log(bodlogoArr);
                    break;
            }
        }
    }
};
