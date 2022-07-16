const DATA_URL = 'https://api.thecatapi.com/v1/images/search/'

const img =  document.querySelector('.img')
const changeBtn = document.querySelector('.btn')

const getCats = async () => {
    try {
        const data = await fetch(DATA_URL)
        const api = await data.json()
        let json  = api[0]

        console.log(json.url)

        return json.url
    }
    catch (e){
        console.log(e.message)
    }
}

const loadImg = async () => {
    img.src = await getCats()
}

changeBtn.addEventListener('click',loadImg);

loadImg()