let bigArr = new Array()
let arrQ = new Array()
let arrF = new Array()
function saveClick() {
    let rowCount = document.getElementById('mytbl').rows.length - 1; //получение количества строк
    //console.log(rowCount)
    //получение кол-ва ячеек(дырок куда вводятся цифры без учета статических данных)
    let count = rowCount;
    for (let i = 0; i < rowCount; i++) {
        count+=3;
    }
    // bigArr = new Array()
    for(let i = 0; i < count; i++) {
        bigArr[i] = document.getElementsByTagName("input")[i].value;
    }

    for(let i = 0; i < bigArr.length; i++) {
        let temp = parseInt(bigArr[i])
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие. И кстати с вас утка:)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            bigArr[i] = temp;
            console.log(bigArr[i])
        }
    }


    //parse the Q array from strings to numbers
    let j = 0; //счетчик для массива
    for(let i = count; i < count+rowCount; i++) {
        arrQ[j] = document.getElementsByTagName("input")[i].value;
        j++;
    }

    for(let i = 0; i < rowCount; i++) {
        let temp = parseInt(arrQ[i]);
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие. И кстати с вас утка:)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            arrQ[i] = temp;
        }
        console.log(arrQ[i])
    }
    let counter = count + rowCount;
    //parse the F array from strings to numbers
    let k = 0; //счетчик для второго массива
    for(let i = counter; i < counter+rowCount + 1; i++ ) {
        arrF[k] = document.getElementsByTagName("input")[i].value;
        k++;
    }
    for(let i = 0; i < arrF.length; i++) {
        let temp = parseInt(arrF[i])
        if(Number.isNaN(temp)) {
            alert("Владислав Александрович, это безобразие. И кстати с вас утка:)")
            document.write('<img src="https://pbs.twimg.com/profile_images/1021724681752256513/WM5yxh86_400x400.jpg">');
            break
        }
        else {
            arrF[i] = temp;
        }
        console.log(arrF[i])
    }

}


let form = document.querySelector("form");
let log = document.querySelector("#log");

let flagRake = 0; //переменная отвечающая за заделки
form.addEventListener("submit", function(event) {
    let data = new FormData(form);
    let output = "";
    for (const entry of data) {
        output = entry[0] + " = " + entry[1] + "\r";
        if(entry[1]==='left rake') {
            console.log("Выбрана 1")
            flagRake = 1;
        }
        else if(entry[1] === 'right rake') {
            flagRake = 2;
            console.log("Выбрана 1")
        }
        else if(entry[1] === 'both rake'){
            flagRake = 3;
            console.log("Выбрана 1")
        }
    };
    //log.innerText = output;
    event.preventDefault();
}, false);

function createTable(id, id2) {
    let rowCount = document.getElementById('mytbl').rows.length - 1;
    let nodeCount = rowCount + 1;
    let tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    let tbody2 = document.getElementById(id2).getElementsByTagName("TBODY")[0];
    for(let i = 0; i < rowCount; i++) {
        let row = document.createElement("TR")
        let td0 = document.createElement("TD")
        td0.appendChild(document.createTextNode(''))
        let td1 = document.createElement("TD")
        td1.appendChild(document.createElement("input"))
        row.appendChild(td0);
        row.appendChild(td1);
        tbody.appendChild(row);
    }
    for(let i = 0; i < nodeCount; i++) {
        let row = document.createElement("TR")
        let td0 = document.createElement("TD")
        td0.appendChild(document.createTextNode(''))
        let td1 = document.createElement("TD")
        td1.appendChild(document.createElement("input"))
        row.appendChild(td0);
        row.appendChild(td1);
        tbody2.appendChild(row);
    }

}

function draw1() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.fillRect(25,25,100,100);
        ctx.clearRect(45,45,60,60);
        ctx.strokeRect(50,50,50,50);
    }
}






