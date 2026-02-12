
let randomNumero1 = Math.floor(Math.random() * 6) + 1

let randomDiceImg = 'dice' + randomNumero1 + '.png'
let randomImgSource = 'images/' + randomDiceImg

let img1 = document.querySelectorAll('img')[0]

img1.setAttribute('src', randomImgSource)




let randomNumero2 = Math.floor(Math.random() * 6) + 1

let raqndomImgSource2 = 'images/dice' + randomNumero2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', raqndomImgSource2)


if (randomNumero1 > randomNumero2) { 
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 ganhou'

}

else if (randomNumero2 > randomNumero1) { 
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 ganhou'

}
else   { 
    document.querySelector('h1').innerHTML = '🤝 O jogo empatou'

}
