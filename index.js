// 1
function task1() {
    let taskArray1 = ['dog', 33, false, 'cat', true, 11];

    document.querySelector(".div1").innerText = taskArray1;
}

// 2
function task2() {
    let taskArray2 = ['cat', 11, true, 'dog', false, 33];
    let outTaskArray2 = `<p>` + taskArray2.map(item => typeof item === 'string' ? `"${item}"` : item).join(', ') + `</p>`;

    document.querySelector('.div2').innerHTML = outTaskArray2;
}

// 3
function task3() {
    let taskArray3 = ['cat', 11, true, 'dog', false, 33, 'dog', 33, false, 'cat', true];
    let outTaskArray3 = taskArray3.length;

    document.querySelector('.div3').innerHTML = outTaskArray3;
}

// 4 
function task4() {
    let taskArray4 = ['cat', 11, true, 'dog', false, 33, 'dog', 33, false, 'cat', true]
    let outTaskArray4 = `<p>` +taskArray4[0] +` `+ taskArray4[3] + ` `+ taskArray4[8] + `</p>`;

    document.querySelector(".div4").innerHTML = outTaskArray4;
}

// 5
function task5() {
    let taskArray5 = [`cat`, 11, 33, 22, false, 33, 'dog', 33, false, 'cat', true]
    let sum = taskArray5[0] + taskArray5[2] + taskArray5[3];
    let outTaskArray5 = `<p> ${sum} </p>`;

    document.querySelector(".div5").innerHTML = outTaskArray5;
}

// 6
function task6() {
    let taskArray6 = [`Liza`, `Zibrovska`, `Siblings`, `fourteen of`, `June`]
    let outTaskArray6 = `<p>` + taskArray6.map((value, index) => index === 0 ? value : (index === 1 || index === 4 ? ` ${value}` : `, ${value}`)).join(``) + `</p>`;
    let outTaskArray6_1 = `<p>` + taskArray6.join(` `) + `</p>`;
    document.querySelector(".div6").innerHTML = outTaskArray6;
}

// 7
let taskArray7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function task7() {
    taskArray7.splice(7, 0, 'vietnam');
    taskArray7.splice(6, 0, 'turkey');
    taskArray7.splice(5, 0, 'italy');
}

task7();

document.querySelector(".btn7").onclick = () => {
    document.querySelector('.div7').innerText = taskArray7.join(' ');
}

// 8
let taskArray8 = [`cat`, `dog`]

function task8() {
    taskArray8.splice(3, 0, 3.14);
    taskArray8.splice(4, 0, 17);
    taskArray8.splice(6, 0, 5);
}

task8()

document.querySelector(".btn8").onclick = () => {
    document.querySelector('.div8').innerText = taskArray8.join('-');
}

document.querySelector(".btn8-1").onclick = () => {
    document.querySelector(".div8-1").innerHTML = `<p>` + taskArray8.length + `</p>`;
}

// 9
let taskArray9 = [100, 200, 300, 400, 700, 121];
let lastIndex9 = taskArray9.length - 1;

document.querySelector(".btn9").onclick = () => {
    document.querySelector(".div9").innerHTML = `<p>` + taskArray9[lastIndex9] + `</p>`;
}

// 10
let taskArray10 = [100, 200, 300, 400, 700, 121];
let firstIndex10 = 0;
let lastIndex10 = taskArray10.length -1;

document.querySelector(".btn10").onclick = () => {
    document.querySelector(".div10").innerHTML = `<p>` + (taskArray10[firstIndex10] + taskArray10[lastIndex10]) + `</p>`;
}

// 11
let taskArray11 = [2,3,4,5,6,7];

function task11(array) {
    [array[2], array[4]] = [array[4], array[2]];
}

task11(taskArray11);

document.querySelector(".btn11").onclick = () => {
    document.querySelector(".div11").innerHTML = `<p>` + taskArray11.join(` `) + `</p>`;
};

// 12
let taskArray12 = ['test', 'west', 'list', 'class', 'best'];

function task12(array) {
    [array[0], array[array.length - 1]] = [array[array.length -1], array[0]]
}

task12(taskArray12);

document.querySelector(".btn12").onclick = () => {
    document.querySelector(".div12").innerHTML = `<p>` + taskArray12.join(` `) + `</p>`;
};

// 13
let taskArray13 = ['test', 'west', 'list', 'class', 'best'];
let outTaskArray13 = `<p>` + taskArray13.map((value, index) => `${index} ${value} `).join(`<br>`);

document.querySelector(".btn13").onclick = () => {
    document.querySelector(".div13").innerHTML = outTaskArray13;
};

// 14
let taskArray14 = [1, 2, 3, 'hello', 66];
let reversedTaskArray14 = []

for (i = taskArray14.length - 1; i >= 0; i--) {
    reversedTaskArray14.push(taskArray14[i]);
}

let outTaskArray14 = `<p>` + reversedTaskArray14.join(` `) + `</p>`;

document.querySelector(".btn14").onclick = () => {
    document.querySelector(".div14").innerHTML = outTaskArray14;
}

// 15
let taskArray15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let resultTask15 = "";

for (i = 0; i < taskArray15.length; i++) {
    if (taskArray15[i] > 0) {
        resultTask15 += taskArray15[i] + " ";
    }
}

document.querySelector(".btn15").onclick = () => {
    document.querySelector(".div15").innerHTML = resultTask15;
}

// 16
let taskArray16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]; 
let taskArray16_odd = []; 
let taskArray16_even = [];

for (i = 0; i < taskArray16.length; i++) {
    if (taskArray16[i] % 2 === 0) {
        taskArray16_even.push(taskArray16[i]);
    } else {
        taskArray16_odd.push(taskArray16[i]);
    }
}

document.querySelector(".btn16").onclick = () => {
    document.querySelector(".div16").innerHTML = `<p>`+ taskArray16_even.join(" ") + `</p>`;
}
document.querySelector(".btn16_2").onclick = () => {
    document.querySelector(".div16_2").innerHTML = `<p>`+ taskArray16_odd.join(" ") + `</p>`;
}

// 17
let taskArray17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let taskArray17Lenght = 0;

for (i = 0; i < taskArray17.length; i++) {
    if (taskArray17[i] > 3) {
        taskArray17Lenght++;
    }
}

document.querySelector(".btn17").onclick = () => {
    document.querySelector(".div17").innerHTML = `<p>`+ taskArray17Lenght + `</p>`
}

// 18
let taskArray18 = [15,24,13,78,21,4,45,67];
let taskArray18_maxElement = taskArray18[0];

for (i = 0; i < taskArray18.length; i++) {
    if (taskArray18[i] > taskArray18_maxElement) {
        taskArray18_maxElement = taskArray18[i];
    }
}

document.querySelector(".btn18").onclick = () => {
    document.querySelector(".div18").innerHTML = `<p>` + taskArray18_maxElement + `</p>`;
}

// 19
let taskArray19 = [15,24,13,78,21,4,45,67];
let taskArray19_minElement = taskArray18[0];

for (i = 0; i < taskArray19.length; i++) {
    if (taskArray19[i] < taskArray19_minElement) {
        taskArray19_minElement = taskArray19[i];
    }
}

document.querySelector(".btn19").onclick = () => {
    document.querySelector(".div19").innerHTML = `<p>` + taskArray19_minElement + `</p>`;
}

// 20
let taskArray20 = [4,5,6,7,8,9,10];
let sum20 = 0;

for (i = 0; i < taskArray20.length; i++) {
    sum20 += taskArray20[i];
}

document.querySelector(".btn20").onclick = () => {
    document.querySelector(".div20").innerHTML = `<p>` + sum20 + `</p>`;
}