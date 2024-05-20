

const drawbutton = () => {

    const resultparagraph = document.querySelector('p')

    const mini = Math.ceil(document.querySelector('.value-min').value)
    const maxi = Math.floor(document.querySelector('.value-max').value)

    const result = Math.floor(Math.random() * (maxi - mini + 1)) + mini;



    mini <= maxi ? resultparagraph.innerHTML = result : `${alert('O VALOR MINIMO PRECISA SER MENOR QUE O VALOR MAXIMO')}`



}



