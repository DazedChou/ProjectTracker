var timeEl = $("#currentTime");
var formModal = $("#form-modal");

function getTime() {
    var timeInterval = setInterval(function(){
        timeEl.text(moment().format("MMM Mo, YYYY , h:m:ss"))}, 1000
    )

}

$("#addProject").on("click", function(){
    formModal.modal("show");
})

getTime();