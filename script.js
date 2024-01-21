// function getData(dataId) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Data id ", dataId);
//     //   res("success")
//     rej("rejected")
//     }, 5000);
//   });
// }

// let some = getData(123);

//////////////////////////////////////------then and catch-------////////////////////////////////////////////

// function getPromise(){

//     return new Promise((res,rej)=>{

//         console.log("i am a promise");
//         // rej("sorry");
//         res("success");

//             })
// }

// let promise=getPromise();
// promise.then((res)=>{
// console.log("resolved",res)
// })

// promise.catch((rej)=>{
//     console.log("rejected",rej)
// })

//////////////////////////////////////------promise chaining-------////////////////////////////////////////////

// function getPromise1() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("data done ");
//       res("success");
//       //   rej("rejected")
//     }, 5000);
//   });
// }
///////////////////////////
// function getPromise2() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("data done ");
//       res("success");
//       //   rej("rejected")
//     }, 5000);
//   });
// }
// /////////////////
// console.log("fetching data1");
// getPromise1().then(() => {
//   console.log("geting data 2");
//   return getPromise2().then((res) => {
//     console.log(res);
//   });
// });

//////////////////////////////////////------async await-------////////////////////////////////////////////

// easy way to understand

// function getApi(){

// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Weather data");
//         resolve(200); // api success message code 200
//     },4000)
// })
// }

// async function getWearher (){
// console.log("getting data....")
//     await getApi();
//     console.log("got it move to other ");
//     await getApi();
// }

// getWeather() //we have to call function once

//////////////////////------IIFE(to prevent un necessary func calling)-------/////////////////////////////

// function getApi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data 1");
//       resolve(200); // api success message code 200
//     }, 4000);
//   });
// }
// function getApi1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data 2");
//       resolve(200); // api success message code 200
//     }, 1000);
//   });
// }

// (async function getWearher() {
//   console.log("getting data....");
//   await getApi();
//   console.log("got it move to other ");
//   await getApi1();
// })();
