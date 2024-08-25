const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var ele =document.getElementById('timersec');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {        //função anonima

        mario.classList.remove('jump');
    },500)  //function and time
}


(function time() {
    var sec = 0;
    timer = setInterval(()=> {
        ele.innerHTML = 'Score :' + sec;
        sec ++;
    }, 1000) //each 1 second

})()

//tentando parar o contador
function pause() {
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
   
        clearInterval(time);

    }
}




const loop = setInterval(() => {

    

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','') //+ na frente passa para numerico

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {  //checa se o mario esbarrou

        pipe.style.animation= 'none'; //se esbarrou a animação para
        pipe.style.left = `${pipePosition}px`;

        //para a animação do Mario quando esbarra
        mario.style.animation= 'none'
        mario.style.bottom= `${marioPosition}px`; //MarioPosition é a posição do Mario

        mario.src ='imagens/game-over.png';
        mario.style.width= '70px';
        mario.style.marginLeft= '50px';

       
        var timer;



      
        //parando o loop
    clearInterval(loop);
    //////////
        
    } 

}, 10)

document.addEventListener('keydown', jump) // escuta para pular





