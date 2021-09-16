/*function animation() {
    x += vectorX;
    y += vectorY;

    if (x > 380) {
        vectorX = -1;
    } else if (x < 0) {
        vectorX = 1;
    }

    if (y > 380) {
        vectorY = -2;
    } else if (y < 0) {
        vectorY = 2;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px'
}


const ball = document.querySelector('#ball')

let x = 28;
let y = 137;
let vectorX = 1;
let vectorY = 2;


ball.style.left = x + 'px';
ball.style.top = y + 'px';

setInterval(animation, 10);
*

function logGreeting() {
    let myN = "pasha";
    console.log('$(myN) is js developer`);
  }

logGreeting();



function newName() {
    balance += price;
    console.log('Баланс пополнен');
    console.log(`Доступно: ${balance}`);
  }
  
  let balance = 0;
  
  fillBalance(5);*/




//   function getBalance(rub, doll) {
//     const rate = 75;

//     const summ = rub + doll * rate;

//     console.log(summ)



//   }
  
//   getBalance(1200,20);


//   function min(a , b ){
//       if (a < b){
//           console.log(a)
//       }
//       else if( b < a ){
//           console.log(b)
//       }
//       else{
        
//         console.log("числа равны")
              
//           }
//       }
  
//       min(7, 5 );
//       // 5
//       min(20, 15);
//       // 3
//       min(5, 5); 



    //   function diff(a, b) {
    //     let res = a - b;
    //     return res;
    //   }

    //   console.log( diff(5,3))



  
// function min(a , b ) {
//     if (a < 0 || b < 0) {
//         return null;
//     } else {
//         return a - b;
//     }
// }
  
// console.log( min(-7, 5 ));
// // 5
// console.log (min(20, 15));
// // 3
// console.log(min(5, 5)); 

// console.log(min(-7,5))
//   let min  = (20,15)
//   console.log(min)


// let min = (a , b ) => {
//      if (a < b){
//          console.log(a)
//      }
// }


// let amount = 5000;

  

// let yearDeposit = (rate) => {
//   return rate + 10;  
//   amount += rate*amount*0.01;
// }

// amount = yearDeposit(amount)
// console.log(amount); 
 



// let yearDeposit = (amount , rate) => {
//     amount += rate*amount*0.01; 
//     return amount;
    
    
//   }
// let acc  = 5000
// let summa = yearDeposit(acc , 10)
// console.log(summa)




// let sum = 0;

// for (let i = 1; i < sum.lenght; i++) {
//   sum += i;
// }

// console.log(`The sum of numbers up to 10 is ${sum}`);

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//  ];

//     for (let j = 0; j < matrix[1 ].length; j++){
//         console.log(matrix[1][j]);
//     }

// console.log(matrix[0][2])
// console.log(matrix[2][0])



const userForm = document.querySelector('.user-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const data = new FormData(event.target);

  console.log(data.get('fastname'));
  console.log(data.get('passport'));
  console.log(data.get('massege'));
  console.log(data.get('gender'));
  console.log(data.get('checkbox'));
  console.log(data.get('age'));
  console.log(data.get('post'));
  console.log(data.get('phone'));
});
