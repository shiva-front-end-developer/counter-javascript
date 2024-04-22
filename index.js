// (function(){
//     const btn = document.querySelectorAll(".counterBtn");
//     let count = 0;

//     btn.forEach((e)=>{
//         e.addEventListener('click',function(){
//             if(e.classList.contains("preBtn")){
//                 count--
//             }else if(e.classList.contains("nextBtn")){
//                 count++
//             }
//             const counter = document.querySelector("#counter");
//             counter.textContent = count
//             if(count< 0){
//                 const n =document.querySelector(".name")
//                 n.innerHTML = "Decrease Counter "
//                 n.style.color = "red"
//                 counter.style.color = "red"
//             }
//             else if(count>0){
//                 const x = document.querySelector(".name")
//                 x.innerHTML = "Increase Counter"
//                 x.style.color="green"
//                 counter.style.color= "green"
                
//             }
//             else{
                
//                 const y = document.querySelector(".name")
//                 y.innerHTML = "JavaScript Project"
//                 y.style.color="black"
//                 counter.style.color = "black"
//             }
//         })
//     })

// }) ();




(()=>{
    const btn = document.querySelectorAll(".counterBtn");
    let count = 0;

    btn.forEach((e)=>{
        e.addEventListener('click',function(){
            if(e.classList.contains("preBtn")){
                // if(count > 0){

                    count--
                // }
            }else if(e.classList.contains("nextBtn")){
                count++
            }
            const counter = document.querySelector("#counter");
            counter.textContent = count
            if(count< 0){
                const n =document.querySelector(".name")
                n.innerHTML = "Decrease Counter "
                n.style.color = "red"
                counter.style.color = "red"
            }
            else if(count>0){
                const x = document.querySelector(".name")
                x.innerHTML = "Increase Counter"
                x.style.color="green"
                counter.style.color= "green"
                
            }
            else{
                
                const y = document.querySelector(".name")
                y.innerHTML = "JavaScript Project"
                y.style.color="black"
                counter.style.color = "black"
            }
        })
    })

}) ();



