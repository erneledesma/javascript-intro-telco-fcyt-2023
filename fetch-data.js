const apikey = 'dTVOOHuMdTNXXlix9ZTOcxzcOLneLtxX'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

peticion
.then( resp => resp.json() )
.then( ({data}) => {
    console.log(data.images.original.url)
})
.catch(console.warn)

