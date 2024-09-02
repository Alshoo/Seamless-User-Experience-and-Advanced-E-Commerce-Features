// GSAP
// hidden right
let observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement = document.querySelectorAll('.hidddenright');
hidddenElement.forEach((el) => observer.observe(el))

// hidden left
let observer2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement2 = document.querySelectorAll('.hidddenleft');
hidddenElement2.forEach((el) => observer2.observe(el))

// hiddden
let observer3 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showw')
    }else{
      entry.target.classList.remove('showw')
    }
  })
})
let hidddenElement3 = document.querySelectorAll('.hiddden');
hidddenElement3.forEach((el) => observer3.observe(el))







// navbar
let Home_rout = document.querySelector("#Home_rout a p");
let About_rout = document.querySelector("#About_rout a p");
let Category_rout = document.querySelector("#Category_rout a p");
let Products_rout = document.querySelector("#Products_rout a p");
let Repair_rout = document.querySelector("#Repair_rout a p");
let Contact_rout = document.querySelector("#Contact_rout a p");



let coloring = () => {
  if (
    window.location.pathname == "/" ||
     window.location.pathname == "/index.html"
     ) {
    document.querySelector("#Home_rout a").style.color = "#3470AB";
    Home_rout.style.transform = "scale(1.02)!important";
    Home_rout.style.borderBottom = "#3470AB solid 1px";
  }
  if (window.location.pathname == "/about.html" || window.location.pathname == "/about") {
    document.querySelector("#About_rout a").style.color = "#3470AB";
    About_rout.style.transform = "scale(1.02)!important";
    About_rout.style.borderBottom = "#3470AB solid 1px";
  }

  if (
    window.location.pathname == "/products.html"||
     window.location.pathname == "/products" ||
     window.location.pathname == "/productDetailes.html"||
     window.location.pathname == "/productDetailes"
     
     ) {
    document.querySelector("#Products_rout a").style.color = "#3470AB";
    document.querySelector("#Products_rout2 a").style.color = "#3470AB";
    Products_rout.style.transform = "scale(1.02)!important";
    Products_rout.style.borderBottom = "#3470AB solid 1px";

  }
  if (window.location.pathname == "/category.html"||window.location.pathname == "/category" ) {
    document.querySelector("#Category_rout a").style.color = "#3470AB";
    Category_rout.style.transform = "scale(1.02)!important";
    Category_rout.style.borderBottom = "#3470AB solid 1px";
    document.querySelector("#Products_rout a").style.color = "#3470AB";
    Products_rout.style.transform = "scale(1.02)!important";
    Products_rout.style.borderBottom = "#3470AB solid 1px";
  }
  if (window.location.pathname == "/repair.html"||window.location.pathname == "/repair" ) {
    document.querySelector("#Repair_rout a").style.color = "#3470AB";
    Repair_rout.style.transform = "scale(1.02)!important";
    Repair_rout.style.borderBottom = "#3470AB solid 1px";

  }
  if (window.location.pathname == "/contact.html"||window.location.pathname == "/contact") {
    document.querySelector("#Contact_rout a").style.color = "#3470AB";
    Contact_rout.style.transform ="scale(1.02)!important";
    Contact_rout.style.borderBottom = "#3470AB solid 1px";

  }
};
coloring(); 



// fourth sec

// timer

let counterDown = new Date("Jan 15, 2024 20:59:59").getTime();

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();

    let dateDiff = counterDown - dateNow;

    let day = Math.floor( dateDiff / (1000 * 60 * 60 *24));
    let hour = Math.floor((dateDiff % (1000 * 60 * 60 *24 ))/(1000 * 60 * 60));
    let min = Math.floor((dateDiff % (1000 * 60 * 60  ))/(1000 * 60 ));
    let sec = Math.floor((dateDiff % (1000 * 60 ))/(1000 ));


    document.querySelector("#sec").innerHTML = sec< 10 ? `0${sec}`:sec;
    document.querySelector("#min").innerHTML = min < 10 ? `0${min}`:min ;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#day").innerHTML = day;

    if(dateDiff < 0){
        clearInterval(counter);
    }

}, 1000)



// filter by price
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


const rangeInput2 = document.querySelectorAll(".range-input2 input"),
priceInput2 = document.querySelectorAll(".price-input2 input"),
range2 = document.querySelector(".slider2 .progress");
let priceGap2 = 1000;

priceInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput2[0].value),
        maxPrice = parseInt(priceInput2[1].value);
        
        if((maxPrice - minPrice >= priceGap2) && maxPrice <= rangeInput2[1].max){
            if(e.target.className === "input-min"){
              rangeInput2[0].value = minPrice;
              range2.style.left = ((minPrice / rangeInput2[0].max) * 100) + "%";
            }else{
              rangeInput2[1].value = maxPrice;
              range2.style.right = 100 - (maxPrice / rangeInput2[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput2[0].value),
        maxVal = parseInt(rangeInput2[1].value);

        if((maxVal - minVal) < priceGap2){
            if(e.target.className === "range-min"){
              rangeInput2[0].value = maxVal - priceGap2
            }else{
              rangeInput2[1].value = minVal + priceGap2;
            }
        }else{
          priceInput2[0].value = minVal;
          priceInput2[1].value = maxVal;
          range2.style.left = ((minVal / rangeInput2[0].max) * 100) + "%";
          range2.style.right = 100 - (maxVal / rangeInput2[1].max) * 100 + "%";
        }
    });
});




let cart_comp = document.getElementById('cart_comp');
cart_comp.style.cursor = "pointer";
cart_comp.onclick=()=>{
  window.location.href="./cart.html"
}
let sign_ico = document.getElementById('sign_ico');
sign_ico.style.cursor = "pointer";
sign_ico.onclick=()=>{
  window.location.href="./login.html"
}



// increase and decrease num of selected product
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let increase1 = document.querySelector("#increase1")
let decrease1 = document.querySelector("#decrease1")
let increase2 = document.querySelector("#increase2")
let decrease2 = document.querySelector("#decrease2")
let num_of_operation = document.getElementById("num_of_operation")


function plus(){
  var input_el=$(this).prev('input');
  var v= input_el.val()*1+1;
  if(v<=input_el.attr('max'))
  input_el.val(v)
}

function minus(){
  var input_el=$(this).next('input');
  var v= input_el.val()-1;
  if(v>=input_el.attr('min'))
  input_el.val(v)
}

increase.onclick = plus
decrease.onclick = minus
increase1.onclick = plus
decrease1.onclick = minus
increase2.onclick = plus
decrease2.onclick = minus





