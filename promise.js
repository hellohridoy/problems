function myDisplayer(some) {
  console.log(some);
}
let myPromise = new Promise(function (myResolve, myRecject) {
  let x = 2;
  if (x == 0) {
    myResolve("OK");
  } else {
    myRecject("Error");
  }
});
try {
  myPromise.then(
    function (value) {
      myDisplayer(value);
    }
    //function(error){myDisplayer(error)}
  );
} catch (e) {
  console.log(e);
}

// let myPromiseTimeout = new Promise(function(myResolve,myRecject){
//     setTimeout(function(){myResolve("I love you")},3000)
// })

// myPromiseTimeout.then(function(value){
//     console.log(value);
// });

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   let mPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });

//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
