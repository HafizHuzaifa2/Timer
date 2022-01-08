var hrs = 59
var mints = 59
var secs = 59
var setHrs = document.getElementById("Hrs")
var setMin = document.getElementById("Min")
var setSec = document.getElementById("Sec")

var interval;

function start () {
    
    interval = setInterval(function () {

        secs--
        setSec.innerHTML = secs
         if (secs == 0){
                secs = 59
                mints--
                setMin.innerHTML = mints
                if(mints == 0){
                    mints = 59
                    hrs--
                    setHrs.innerHTML = hrs
                }
            }
        


    }, 1000);
}

function stop () {
    clearInterval(interval)
}

function reset () {
    stop()
    var hrs = 00
    var mints = 00
    var secs = 00
    setHrs.innerHTML = hrs
    setMin.innerHTML = mints
    setSec.innerHTML = secs



}