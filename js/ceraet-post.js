


const url_info = 'https://f-uck-backend-qy7vmzm5bq-as.a.run.app/user';    
var token = localStorage.getItem('token')

let request2 = new Request(url_info, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer '+token, 
    },
});
    
fetch(request2).then((response) => { return response.text() }).then((data) => {
    data = JSON.parse(data)
    console.log(data)
    $('#displayName').text(data.display_name)
    $("#displayImage").attr("src","https://f-uck-backend-qy7vmzm5bq-as.a.run.app/image/" + data.display_image);
})


$('#postForm').submit((event) => {

    event.preventDefault();

    const url_info = 'http://127.0.0.1:5000/post';    
    var token = localStorage.getItem('token')

    let formData = new FormData();
    var input = document.querySelector('input[type="file"]')
    var message = $("#message").val()

    formData.append('image', input.files[0]);
    formData.append('message', message);

    let request2 = new Request(url_info, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer '+token, 
        },
        body: formData,
    });
    
    fetch(request2).then((response) => { return response.text() }).then((data) => {
        data = JSON.parse(data)
        console.log(data)
        $('#displayName').text(data.display_name)
        $("#displayImage").attr("src","https://f-uck-backend-qy7vmzm5bq-as.a.run.app/image/" + data.display_image);
    })
   


});