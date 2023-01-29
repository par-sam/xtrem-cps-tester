let time = 10
let counter = document.getElementById("counter")
let timer = document.getElementById("timer")
let time_e = document.getElementById("time")
let result = document.getElementById("result")

document.getElementById("click_btn").addEventListener("click", function(event) {
    event.preventDefault()

    if (timer.innerHTML == 0) {
        timer.innerHTML = time
        let interval = setInterval(function() {
            timer.innerHTML = parseInt(timer.innerHTML) - 1
            if (timer.innerHTML == 0) {
                clearInterval(interval)
                result.innerHTML = Math.round((parseInt(counter.innerHTML) / time) * 10) / 10
                document.getElementById("modal").style.display = "flex"
                counter.innerHTML = "0"
            }
        }, 1000)
    }

    counter.innerHTML = parseInt(counter.innerHTML) + 1
})

document.getElementById("retry").addEventListener("click", function(event) {
    event.preventDefault()

    document.getElementById("modal").style.display = "none"
    document.getElementById("counter").innerHTML = "0"
})

document.getElementById("test_5").addEventListener("click", function(event) {
    event.preventDefault()
    console.log(parseInt(timer.innerHTML))
    if (parseInt(timer.innerHTML) > 0) return
    time = 5
    time_e.innerHTML = time
})

document.getElementById("test_10").addEventListener("click", function(event) {
    event.preventDefault()
    if (parseInt(timer.innerHTML) > 0) return
    time = 10
    time_e.innerHTML = time
})

document.getElementById("test_20").addEventListener("click", function(event) {
    event.preventDefault()
    if (parseInt(timer.innerHTML) > 0) return
    time = 20
    time_e.innerHTML = time
})

document.getElementById("test_30").addEventListener("click", function(event) {
    event.preventDefault()
    if (parseInt(timer.innerHTML) > 0) return
    time = 30
    time_e.innerHTML = time
})

document.getElementById("share").addEventListener("click", function(event) {
    event.preventDefault()
    // document.getElementById("modal").style.display = "none"
    document.getElementById("share_result").innerHTML = result.innerHTML
    document.getElementById("share_modal").style.display = "flex"
})

document.getElementById("share_cancel").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("share_modal").style.display = "none"
})