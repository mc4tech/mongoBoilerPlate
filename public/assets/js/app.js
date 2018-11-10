const $content = $("#content");
const render = function () {
    $content.empty();
    let htmlstr = "";
    console.log("render");
    $.get('/api/example')
        .then(function (data) {
            data.forEach((element, i) => {
                let date = new Date(data[i].createdAt); // dateStr you get from mongolet
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let dateStr = `${month}/${day}/${year}`;
                htmlstr += `<ul>${element.todo} created at ${dateStr}</ul>`
                $content.append(htmlstr);
            });
        })
}

$('.submit').on('click', function (e) {
    e.preventDefault();
    const task = {
        todo: $('#task').val().trim()
    }
    $.post('/api/addexample', {
        data: task
    }).then(function (data) {
        $('#task').val('');
        render();
    })
})
render();