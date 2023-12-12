//Միջին թվաբանական

// let arr = [1, 2, 3, 4]
//
// function boo(arr) {
//     let res = 0
//     let lengthNumber = arr.length
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i]
//
//     }
//     return res / lengthNumber
// }
//
// console.log('Պ', boo(arr))

//?? and ||

// let a = ''
// let b = 'Hello'
// let c;
//
// console.log(c || a || b)
// console.log(c ?? b ?? a)


// կրկնվող տարերը

// let arr = [5,5,4,4,7]
// let arr2 = []
//
// function dub(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let a = false
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr2[j] === arr[i]) {
//                 a = true
//             }
//         }
//         if (!a) {
//             arr2.push(arr[i])
//         }
//     }
//     return arr2
//
// }
//
//
// console.log(dub(arr))

// Զանգվածի number արժեքներ և 0-ից մեծ

// let arr = [1, 2, 3, 'hi', 0, -1, 'What'];
//
// let fun = (arr) => {
//     let arr2 = []
//
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) === 'number' && arr[i] > 0) {
//             arr2.push(arr[i])
//         }
//     }
//     return arr2
// }
// console.log(fun(arr))


// 2-րդ ամենամեծ թիվը

// let arr = [1, 2, 3, 4]
//
// let func = (arr) => {
//     let arr2 = []
//     let res = 0
//
//     for (let i = 0; i < arr.length; i++) {
//         res = arr[i]
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 arr2.push(arr[arr[j]])
//             }
//         }
//
//     }
//     return arr2
// }
//
// console.log(func(arr))















