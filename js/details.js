import { Ui } from "./ui.js"


export class Details{
    constructor(id){
        
        this.closeBtn=document.querySelector(".closeBtn")
        this.closeBtn.addEventListener("click",()=>{
            document.querySelector('.games').classList.remove('d-none')
            document.querySelector('.details').classList.add('d-none')
        })
        this.getDetails(id)
       
    }

    async getDetails(id){
        document.querySelector('.loading').classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '92b5603311msh4a7143f635bf4e8p10fcf6jsn9732cce7494f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        let response = await api.json()
        console.log(response)
        document.querySelector('.loading').classList.add('d-none')
       new Ui().displayDetails(response)
       
        

        
    }
}