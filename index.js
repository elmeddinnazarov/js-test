/* 
const myArry=['cup', 'plate', 'spoon', 'knife', 'fork']

for(let i=0; i<myArry.length; i++ ){

    console.log(myArry[i]);
} 
*/


/* 
const terevez=['pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']

for (const i of terevez) {
    if (i[0] === "s") {
    console.log(i);
    }
    
}

 */


/* 
let a=0
for(let i=0; i<100; i++){

    q=a+=i
    console.log(q);

}
 */


//------------------------------------------------------------------------------------

/* 
let words=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
let a =[]
for(i=0; i<words.length; i++){
    while(words[i].length == 5){
        a.push(words[i])
        break
    }
}
 */

//------------------------------------------------------------------------------------


/* 

for(i=100000; i>0; i--){
    if(i%9999 ==0){
        console.log(i);
        break
    }
}

 */




//------------------------------------------------------------------------------------
/* let sentence="Men her gun Javascript oyrenirem"
let saitler="aıoueəiöü"
for() */
//------------------------------------------------------------------------------------





/* 
const lettercomputer = ['a', 'a', 'b', 'a', 'c', 'b', 'b', 'e']
const letterCount = { a: 0, b: 0, c: 0, e: 0 }

console.log(letterCount);

 */

/* 
const computer = {
    cpu: 'intel i5',
    ram: '8',
    gpu: 'NVIDIA',
}
for (let i in computer) {
  console.log(i);
  console.log(computer[i]);
}
 */







const letterList = ['a', 'a', 'a', 'b', 'b', 'a', 'c', 'b', 'b', 'e']
const letterCount = { a: 0, b: 0, c: 0, e: 0 }
let newlist1 = []
let newlist2 = []
let newlist3 = []
let newlist4 = []

for (i of letterList) {
    if (i === "a")
        newlist1.push(i)
    let a = newlist1.length
    letterCount.a = a

    if (i === "b")
        newlist2.push(i)
    let b = newlist2.length
    letterCount.b = b

    if (i === "c")
        newlist3.push(i)
    let c = newlist3.length
    letterCount.c = c

    if (i === "e")
        newlist4.push(i)
    let e = newlist4.length
    letterCount.e = e
}

console.log(letterCount);




