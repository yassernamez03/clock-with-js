let s = document.querySelector("#sec")
let m = document.querySelector("#min")
let h = document.querySelector("#hour")

function dat() {
    let date = new Date()
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hr === 0) {
        hr = 12;
    }
    if (hr > 12) {
        hr = hh - 12;
    }
    h.setAttribute('transform', `rotate(${hr*30})`)
    m.setAttribute('transform', `rotate(${min*6})`)
    s.setAttribute('transform', `rotate(${sec*6})`)
}

let v = setInterval(dat, 1000)