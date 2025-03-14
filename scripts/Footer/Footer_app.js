const input_location_text = document.querySelector(".__input-text");
const form_box = document.querySelector(".footer__location-input__type-location");
const nav_links_footer = document.querySelectorAll(".__nav-footer-container__nav-text a");
const Title_nav_links_footer = document.querySelectorAll(".__nav-footer-container__title");


input_location_text.addEventListener("focusin",function(){
    form_box.classList.remove("anim_for_boxS_border_OUT","anim_for_boxS_border_IN");

    form_box.style.border = "1px solid transparent";
    form_box.style.boxShadow = "0px 0px 0px  white";
    
    setTimeout(()=>{
        form_box.classList.add("anim_for_boxS_border_IN");
    },10); 
});


input_location_text.addEventListener("focusout",function(){
    form_box.classList.remove("anim_for_boxS_border_OUT","anim_for_boxS_border_IN");

    form_box.style.border = "1px solid wheat";
    form_box.style.boxShadow = "0px 0px 20px  white";
    
    setTimeout(()=>{
        form_box.classList.add("anim_for_boxS_border_OUT");
    },10); 
});

