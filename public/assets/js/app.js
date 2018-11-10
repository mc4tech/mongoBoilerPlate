const $content = $("#content");
const render = function () {
    $content.empty();
    let htmlstr = "";
    console.log("render");
    $.get('/api/example')
        .then(function (data) {
            console.log(data);
        })
}
render();