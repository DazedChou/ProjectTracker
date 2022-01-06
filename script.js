var timeEl = $("#currentTime");

function getTime() {
    var timeInterval = setInterval(function(){
        timeEl.text(moment().format("MMM Mo, YYYY , h:m:ss"))}, 1000
    )

}
getTime();