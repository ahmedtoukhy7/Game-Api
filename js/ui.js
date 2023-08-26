

 export class Ui{
    
     constructor(){
      
       
    }

 

    displayGames(response){
        let temp=""
        
        
        response.forEach(ele => {
            temp+=`
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class='bigitem'>
                <div data-id="${ele.id}" class="item">
                    <img src="${ele.thumbnail}" class="w-100" alt="">
                   <div class='title d-flex justify-content-between align-items-center'>
                   <h2>${ele.title}</h2>
                     <span class='free'>Free</span>                   
                   </div>
                    <h3 class="desc">${ele.short_description}</h3>
                    
                </div>
                <div class="foot text-light d-flex justify-content-between align-items-center">
                    <span>${ele.genre}</span>
                    <span>${ele.platform}</span>
                    

                  </div>
                </div>
            </div>
            `
         
        });

        document.getElementById('myrow').innerHTML=temp
        
        

       
    }

    displayDetails(data){
        let box=`
        <div class="col-md-4 md">
            <img src="${data.thumbnail}" class="w-100" alt="">
          </div>
          <div class="col-md-8 head">
            <h2 class='text-light'>Title : <span>${data.title}</span></h2>
            <h3 class="my-3 text-light">Category : <span>${data.genre}</span></h3>
            <h3 class='text-light'>Platform : <span>${data.platform}</span></h3>
            <h3 class="my-3 text-light">Status : <span>${data.status}</span></h3>

            <h4 class="descdet">${data.description}</h4>

            <div class="screen my-4" >
              <div class="row g-4">
               <div class="col-md-4 sm-12 "  >
                 <img src="${data.screenshots[0].image}" class='w-100' alt="">
               </div>
               <div class="col-md-4 sm-12 " >
                 <img src="${data.screenshots[1].image}" class='w-100' alt="">
               </div>
               <div class="col-md-4 sm-12 " >
                 <img src="${data.screenshots[2].image}" class='w-100' alt="">
               </div>
              </div>
            </div>

            <button class="btn btn-outline-warning">
            <a target='_blanck' href="${data.game_url}">Show Game</a>
            </button>



          </div>
        `
        document.querySelector('.mydata').innerHTML=box

        let images= document.querySelectorAll('.screen img')
        images.forEach(ele=>{
          ele.addEventListener('click',function(e){

            let specific= e.target.getAttribute('src')
            console.log(specific)
              document.querySelector('.Bigimg').classList.remove('d-none')
            document.querySelector('.sp-img').setAttribute('src',specific)

            document.querySelector('.close').addEventListener('click',function(){
              document.querySelector('.Bigimg').classList.add('d-none')
            })



          })
        })
    }


}



