// let center = document.querySelector("#center");

// center.addEventListener("mousemove", function (details) {
//   let centerPosition = center.getBoundingClientRect();
//   let insiderectval = details.clientX - centerPosition.left;
//   console.log(insiderectval)

//   if (insiderectval < centerPosition.width / 2) {
//     let redColor = gsap.utils.mapRange(
//       0,
//       centerPosition.width / 2,
//       255,
//       0,
//       insiderectval
//     );
//     gsap.to(center, {
//       backgroundColor: `rgb(${redColor},0,0)`,
//       ease: Power4,
//     });
//   } else {
//     let blueColor = gsap.utils.mapRange(
//       centerPosition.width / 2,
//       centerPosition.width ,
//       0,
//       255,
//       insiderectval
//     );
//     gsap.to(center, {
//       backgroundColor: `rgb(0,0,${blueColor})`,
//       ease: Power4,
//     });
//   }
// });

// center.addEventListener("mouseleave",()=>{
//   gsap.to(
//     center,{
//       backgroundColor : "white"
//     }
//   )
// })

