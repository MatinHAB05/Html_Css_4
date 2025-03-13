const dollar_anim_container = document.querySelectorAll(".__anim_dollar_container"); 
const basket_price_basket = document.querySelectorAll(".menu__basket-item"); 
const Menu_itmes = document.querySelectorAll(".__Product-List-Menu__item");
const Menu_slaeoff_items = document.querySelectorAll(".__saleoff-items");
const red_titles = document.querySelectorAll(".red-title_underLine"); 
const yellow_underline = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--yellow_undeline');
const cyan_blue = "#E3F2FD";

red_titles[0].style.backgroundColor=yellow_underline;
red_titles[0].style.height = "20%";
red_titles[1].style.backgroundColor=yellow_underline;
red_titles[1].style.height = "20%";

// let x=parseInt(0);
// console.log(typeof(x));

for (let x = 0; x< basket_price_basket.length; x++) {
    // Item =;
    basket_price_basket[x].addEventListener("mouseenter", function() {
        basket_price_basket[x].classList.remove("bell_Ring_anim");

        setTimeout(() => {
            basket_price_basket[x].classList.add("bell_Ring_anim");
            console.log(5);
          }, 10); 

        
    });

    basket_price_basket[x].addEventListener("mouseleave", function() {
        basket_price_basket[x].classList.remove("bell_Ring_anim")
        
    });

    basket_price_basket[x].addEventListener("click", function() {
    dollar_anim_container[x].classList.remove("dollar_in_anim_class","dollar_out_anim_class");

    dollar_anim_container[x].style.backgroundColor ="rgba(66, 101 , 59,1)";
    setTimeout(() => {
        dollar_anim_container[x].style.paddingLeft = "0";
        dollar_anim_container[x].style.zIndex = "99";

        dollar_anim_container[x].classList.add("dollar_in_anim_class");

        }, 100); 
    dollar_anim_container[x].classList.remove("dollar_in_anim_class","dollar_out_anim_class");
    setTimeout(() => {
        
        dollar_anim_container[x].style.paddingLeft = "150%";
             dollar_anim_container[x].style.backgroundColor ="rgba(66, 101 , 59,1)";
             dollar_anim_container[x].classList.add("dollar_out_anim_class");

    
    }, 2200);         
    });
    console.log(x);
 }

for(let y=0 ; y<Menu_itmes.length ; y++){
    Menu_itmes[y].addEventListener("mouseenter" , function(){
        red_titles[0].classList.remove("red-title_animClass_in","red-title_animClass_out");
        red_titles[0].style.height = "20%";
        red_titles[0].style.backgroundColor=yellow_underline;
        setTimeout(()=>{
            red_titles[0].classList.add("red-title_animClass_in");
            setTimeout(()=>{
                red_titles[0].style.height = "65%";
                red_titles[0].style.backgroundColor=cyan_blue;        },500)
        },0)


    });

    Menu_itmes[y].addEventListener("mouseleave" , function(){
        red_titles[0].classList.remove("red-title_animClass_in","red-title_animClass_out");

        red_titles[0].style.height = "65%";
        red_titles[0].style.backgroundColor=cyan_blue;

        setTimeout(()=>{
            red_titles[0].classList.add("red-title_animClass_out");

            setTimeout(()=>{
                red_titles[0].style.height = "20%";
                red_titles[0].style.backgroundColor=yellow_underline;
                   },500)
        },0)



    });

}


for(let y=0 ; y<Menu_slaeoff_items.length ; y++){
    Menu_slaeoff_items[y].addEventListener("mouseenter" , function(){
        red_titles[1].classList.remove("red-title_animClass_in","red-title_animClass_out");
        red_titles[1].style.height = "20%";
        red_titles[1].style.backgroundColor=yellow_underline;
        setTimeout(()=>{
            red_titles[1].classList.add("red-title_animClass_in");
            setTimeout(()=>{
                red_titles[1].style.height = "65%";
                red_titles[1].style.backgroundColor=cyan_blue;        },500)
        },0)


    });

    Menu_slaeoff_items[y].addEventListener("mouseleave" , function(){
        red_titles[1].classList.remove("red-title_animClass_in","red-title_animClass_out");

        red_titles[1].style.height = "65%";
        red_titles[1].style.backgroundColor=cyan_blue;

        setTimeout(()=>{
            red_titles[1].classList.add("red-title_animClass_out");

            setTimeout(()=>{
                red_titles[1].style.height = "20%";
                red_titles[1].style.backgroundColor=yellow_underline;
                   },500)
        },0)



    });

}

