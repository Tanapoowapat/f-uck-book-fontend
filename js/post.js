$(document).ready(() => {

    console.log(localStorage.getItem('token'))
     var token = localStorage.getItem('token')
     
        const url = 'https://f-uck-backend-qy7vmzm5bq-as.a.run.app/post_list';    
    
        let request = new Request(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+token, 
            },
        });
    
        fetch(request)
            .then((response) => {
                // if (response.status != 201) {
                //     throw new Error("Bad Server Response");
                // }
                return response.text();
            })
            .then((data) => {
                data = JSON.parse(data)
                console.log(data)
            });


      // var comment = `
      //           <div class="d-flex flex-row mb-2">
      //             <img
      //               src="${comment.profile}"
      //               width="40"
      //               class="rounded-image"
      //             />
      //             <div class="d-flex flex-column ml-2">
      //               <span class="name">${comment.name}</span>
      //               <small class="comment-text">${comment.message}</small>
      //               <div class="d-flex flex-row align-items-center status">
      //                 <small>Like</small> 
      //               </div>
      //             </div>
      //           </div>
      //                   `


      // var data = `<div class="row d-flex align-items-center justify-content-center mt-4">
      //           <div class="col-md-6">
      //             <div class="card">
      //               <div class="d-flex justify-content-between p-2 px-3">
      //                 <div class="d-flex flex-row align-items-center">
      //                   <img
      //                     src="${user.profile}"
      //                     width="50"
      //                     class="rounded-circle"
      //                   />
      //                   <div class="d-flex flex-column ml-2">
      //                     <span class="font-weight-bold">${user.name}</span>
      //                   </div>
      //                 </div>
      //               </div>
      //               <img src="${user.post.image}" class="img-fluid" />
      //               <div class="p-2">
      //                 <p class="text-justify">
      //                   ${user.post.message}
      //                 </p>
      //                 <hr />
      //                 <div class="d-flex justify-content-between align-items-center">
      //                   <div class="d-flex flex-row icons d-flex align-items-center">
      //                     <i class="fa fa-heart"></i>
      //                   </div>
      //                 </div>
      //                 <hr />
      //                 <div class="comments">
      //                   ${comment}
      //                   <div class="comment-input">
      //                     <input type="text" class="form-control" />
      //                     <div class="fonts"><i class="fa fa-camera"></i></div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>`
        
      $("postContainer").append(
      )






    });
