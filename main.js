let count = prompt('Введите число')
let i = 0;
do{
    i++;
    if(i == 10) break;
    if(prompt == 1 || 4 || 7 || 10){
    document.write('<div class="block1"></div>');
    }else if(prompt == 2 || 5 || 8){
    document.write('<div class=" block2 "></div>');
     }else if(prompt == 3 || 6 || 9){
    document.write('<div class=" block3"></div>');
    }
}while(i < count)