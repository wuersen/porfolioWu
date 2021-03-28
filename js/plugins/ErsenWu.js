$( document ).ready(function() {


const textArray = ['$','{}','{','}','[]','[',']','const','var','i = 0;','i++','arr','str','typeOf','NAN','if ()','+=','for','id','else{}','<div>','src','<img>','<p>','</>', 'let', ';', '||','$','{}','{','}','[ ]','[',']','</>',';',':','$','{}','{','}','[]','[',']', '<', '>', '</>',';', ':','$','[',']', '<', '>', '</>',';', '||','$','{}','{','}','[ ]','[',']','</>',';', ':','$','{}','{','}','[ ]','[',']','id', '<', '>','const','var','i = 0;','i++','arr','str','typeOf','NAN','if ()','+=','for','&&','else{}','<div>','src','<img>','<p>', 'let'];
const getRandomValueWithin = function(maxValue){
  const randomValue = Math.floor(Math.random() * maxValue)
   return randomValue
}




const displayWord = function(){
  const randomIndex = getRandomValueWithin (textArray.length-1)

  randomWord = textArray[randomIndex]
   const word = $('<p>').text (randomWord)
   $('#ErsenWu').append(word)

   word.css({
     position: 'absolute',
     fontSize:(20 + getRandomValueWithin(30)) + 'px',
     top: getRandomValueWithin(window.innerHeight) + 'px',
     left: getRandomValueWithin(window.innerWidth) + 'px',
     color: 'rgb(' + getRandomValueWithin(225) + ','+ getRandomValueWithin(225) + ',' + getRandomValueWithin(225) + ')',
   })



  word.fadeIn(500).fadeOut(1000,function(){
    $(this).remove()
  })


}

setInterval(displayWord,100)

});//end of code
