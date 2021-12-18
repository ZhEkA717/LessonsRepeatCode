// "use strict";
// // при создания копии объекта создается ссылка на данный объект
// const Obj={ 
//     a: 1,
//     b: 2,
//     c: {
//         x:3,
//         y:4
//     }
// };

// const copyObj=Obj;

// Obj.a=11;

// console.log(Obj);
// console.log(copyObj);

// // создание поверхностной копии на объект

// function newObj(mainObj){
//     let objCopy={};
//     let key;

//     for (key in mainObj){
//         objCopy[key]=mainObj[key];
//     }
    
//     return objCopy;
// }

// const Obj={
//     a: 1,// поверхностная копия
//     b: 2,// тоже
//     c: { 
//         x:3,// ссылка
//         y:4 // ссылка (см console.log)
//     }
// };

// const newCopyObj=newObj(Obj);
// newCopyObj.a=11111;
// newCopyObj.c.x=10;

// console.log(Obj);
// console.log(newCopyObj);

// // при объединении объектов создается поверхностная копия этих объектов
// const obj = { // куда добавляем
//     a: 1 ,
//     b: 2
// };

// const add = {// что добавляем
//     c : 2,
//     d : 3
// };


// const unionObj = Object.assign(obj,add); // совмещенный объект

// console.log(unionObj);
// console.log(obj);

// // для создания поверхностной копии объекта объединям пустой 
// // объект с объектом,копию которого хотим сделать

// const copyObj = Object.assign({},obj); 
// copyObj.a=111111;

// console.log(copyObj);

// создание копии массива
const oldArr = ['a','b','c'];
const newArr = oldArr.slice();

newArr.push('sdfsdfdsf');

console.log(oldArr);
console.log(newArr);

// разделяем массив на отдельные элементы
const video = ['youtube ','vimeo','rutube'],
      blogs = ['wordpress','livejournal','blogger'],
      internet =[...video,...blogs,'vk','instagram','facebook'];

      for( let i=0;i<internet.length;i++){
          console.log(`${i+1}:${internet[i]}`);
      }

function log(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)    
}
const num = [2,5,7];
log(...num);