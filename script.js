// var ans = new Promise((res, rej) => {
//     if (false) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// })
// ans.then(() => {
//     console.log("resolve hogaya tha")
// })
// ans.catch(() => {
//     console.log("reject hua tha !")
// })
// function askForName() {
//     const name = window.prompt('What is your name?');

//     const elem = document.querySelector('#greeting');
//     elem.innerText = `Hi ${name}!`
// }

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
    let p = document.querySelector('p');

    p.innerText = "5…";
    await wait(1000);

    p.innerText = "4…";
    await wait(1000);

    p.innerText = "3…";
    await wait(1000);

    p.innerText = "2…";
    await wait(1000);

    p.innerText = "1…";
    await wait(1000);

    p.innerText = "🎉 Happy New Year!";
}

countdown();


let pt = document.cookie()
