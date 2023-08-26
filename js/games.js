import { Details } from "./details.js"
import { Ui } from "./ui.js"

export class Games {
    constructor() {
        this.games=document.querySelector('.games')
        this.details=document.querySelector('.details')
        let links = document.querySelectorAll('.nav-link')

        links.forEach(ele => {
            ele.addEventListener("click",(e)=> {

                links.forEach(ele =>{
                    ele.classList.remove('active')
                })
                e.target.classList.add('active')

                let category = e.target.getAttribute('cat')
                console.log(category)
                this.getGames(category)
            })

        })


        this.ui= new Ui()

        this.getGames('mmorpg')

    }

    async getGames(category) {
        document.querySelector('.loading').classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '92b5603311msh4a7143f635bf4e8p10fcf6jsn9732cce7494f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let response = await api.json()
        console.log(response)
        document.querySelector('.loading').classList.add('d-none')

        this.ui.displayGames(response)

        

        let listDet=document.querySelectorAll('.item')
        listDet.forEach(ele =>{
            ele.addEventListener('click',()=>{
                
                document.querySelector('.games').classList.add('d-none')
                document.querySelector('.details').classList.remove('d-none')
                
                new Details(ele.getAttribute('data-id'))
               
                


            })
        })
    }


}







