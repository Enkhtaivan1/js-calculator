const result = document.getElementById('result') as HTMLInputElement;

result?.addEventListener("keypress", function(event) {
    if(event.key == 'Enter'){
        document.getElementById("calculate")?.click()
        let bodlogo = result.value;   
        calculate(bodlogo);     
    }
})

let calculate = (bodlogo: string) => {
    let bodolt = bodlogo;
    let bodlogoArr: any[] = [];
    let lastOpIndex = 0;
    for (let i = 0; i < bodlogo.length; i++) {
        const negj = bodlogo[i];
        switch (negj) {
            case '*':
            case '/':
            case '+':
            case '-':
                let part = bodolt.slice(lastOpIndex, i);
                if (part) bodlogoArr.push(part);
                bodlogoArr.push(negj);
                lastOpIndex = i + 1;
                break;
            default:
                break;
        }
    }
    
    if (lastOpIndex < bodolt.length) {
        let part = bodolt.slice(lastOpIndex);
        if (part) bodlogoArr.push(part);
    }
    
    let urjverHuvaahBairlal = (s) => {
        return s === '*' || s === '/';
    }
    let urjverHuvaah = (s) =>{
        if (bodlogoArr[s] === '*'){
            return bodlogoArr[s-1] * bodlogoArr[s+1];
        } else{
            return bodlogoArr[s-1] / bodlogoArr[s+1];
        }
    }
    for (let i = 0; i < bodlogoArr.length; i++) {
        if(bodlogoArr.includes('*') || bodlogoArr.includes('/')){
            const s = bodlogoArr.findIndex(urjverHuvaahBairlal);
            let urjverHuvaahHariu = urjverHuvaah(s);
            bodlogoArr.splice(s-1, 3, urjverHuvaahHariu);
            console.log(bodlogoArr);
        }
    }
    for (let i = 0; i < bodlogoArr.length; i++) {
        if(bodlogoArr.includes('+') || bodlogoArr.includes('-')){
            switch (bodlogoArr[i]) {
                case '+':
                    let niilber = parseInt(bodlogoArr[i-1]) + parseInt(bodlogoArr[i+1]);
                    bodlogoArr.splice(i-1, 3, niilber);
                    console.log(bodlogoArr);
                    break;
                case '-':
                    let noogdvor = parseInt(bodlogoArr[i-1]) - parseInt(bodlogoArr[i+1]);
                    bodlogoArr.splice(i-1, 3, noogdvor);
                    console.log(bodlogoArr);
                    break;
            }
        }
    }
}