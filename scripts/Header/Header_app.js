const anim_box = document.getElementsByClassName("anim_Main-nav-btn__hover")[0];
const anim_box_h6 = document.getElementsByClassName("anim_Main-nav-btn__hover")[0];

const MAC_ICON = document.getElementsByClassName("header__MainmacIcon")[0];
const HOME_TITLE_links = document.querySelector('a[href="#HOME_TITLE"]');
const MENU_TITLE_links = document.querySelector('a[href="#MENU_TITLE"]');
const SALE_OFF_links = document.querySelector('a[href="#SALE_OFF"]');
const NEWS_links = document.querySelector('a[href="#NEWS"]');
const NAV_LINKS_links = document.querySelector('a[href="#NAV_LINKS"]');

const sign_btn = document.getElementsByClassName("header__navbtn-items")[0];
const log_btn = document.getElementsByClassName("header__navbtn-items")[1];

const number_order = document.querySelector("#order_conutHeader");
const plus_btn = document.getElementsByClassName("__plusCountOrder")[0];
const minus_btn = document.getElementsByClassName("__minussCountOrder")[0];


const animBox_z_index_value = "0";
const navicons_z_index_value = "99";

const elementsList = [
    MAC_ICON,
    HOME_TITLE_links,
    MENU_TITLE_links,
    SALE_OFF_links,
    NEWS_links,
    NAV_LINKS_links
  ];
  const elementsList_btn = [
    sign_btn,log_btn
  ];

function applyEffect(index,status){
    for (let i = 0; i < elementsList.length; i++) {
        if(status==0){
        if (elementsList[i] && index!=i) { 
            elementsList[i].style.zIndex="-1";
        }
        else if(elementsList[i] && index==i){
            elementsList[i].style.zIndex=navicons_z_index_value;

        }
    }
    else{
        if (elementsList[i] && index!=i) { 
            elementsList[i].style.zIndex=navicons_z_index_value;
        // console.log(i+navicons_z_index_value)
        }

    }
      }

      for (let i = 0; i < elementsList_btn.length; i++) {
        if(status==0){
            elementsList_btn[i].style.zIndex="-1";

        }
        else if(status==1){
            elementsList_btn[i].style.zIndex=navicons_z_index_value;

        }
      }
}



// ************************************************************************************************
    anim_box.style.zIndex = animBox_z_index_value;
    anim_box.style.color = "rgba(108, 117, 125,0.5)";
    anim_box.style.backgroundColor ="rgba(255, 0, 0, 0.5)";//default
    // Get CSS variable value
    const heightAll = getComputedStyle(anim_box).getPropertyValue("--height-all");

    // Convert to a number (remove % and divide by 100)
    const heightAllValue = parseFloat(heightAll) / 100;

    // Calculate the translateY value
    const translateYValue = -1 * ((heightAllValue - 1) / (2*heightAllValue)) * 100; // Convert back to %

    anim_box.style.transform = `translateY(${translateYValue}%)`;

// ************************************************************************************************


MAC_ICON.addEventListener("mouseenter", function () {
    anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");

    anim_box.style.letterSpacing = "50vw";
    anim_box.style.opacity="0";
    anim_box.style.backgroundColor ="rgb(255, 238, 88)";//default

    anim_box.style.display ="grid";
    anim_box.innerHTML = "THE GREAT MC-Donald's";
  
    applyEffect(0,0);
    setTimeout(() => {

      anim_box.classList.add("Header_hover_mainLink_ENTER");

    }, 100); 
  
    // console.log(0);
    
  });
  
  MAC_ICON.addEventListener("mouseleave", function () {
     anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
     anim_box.style.letterSpacing = "initial";
     anim_box.style.opacity="1";
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_OUT");  

    }, 0); 

    setTimeout(()=>{
        applyEffect(0,1);
    },500)
  
    // console.log(1);
  });

// ************************************************************************************************


HOME_TITLE_links.addEventListener("mouseenter", function () {

    anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
    anim_box.style.backgroundColor ="rgb(0, 230, 118)";

    anim_box.style.letterSpacing = "50vw";
    anim_box.style.opacity="0";
  
    anim_box.style.display ="grid";
    anim_box.innerHTML = "HOME PAGE";
    applyEffect(1,0);
  
  
    setTimeout(() => {

      anim_box.classList.add("Header_hover_mainLink_ENTER");
    }, 100); 
  
    // console.log(0);
    
  });
  
  HOME_TITLE_links.addEventListener("mouseleave", function () {
     anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
     anim_box.style.letterSpacing = "initial";
     anim_box.style.opacity="1";
  

    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_OUT");  

    }, 0); 
  
    setTimeout(()=>{
        applyEffect(1,1);
    },500)

    // console.log(1);
  });

// ************************************************************************************************


MENU_TITLE_links.addEventListener("mouseenter", function () {

    anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
  
    anim_box.style.letterSpacing = "50vw";
    anim_box.style.opacity="0";
    anim_box.style.backgroundColor ="rgb(79, 195, 247)";

    anim_box.style.display ="grid";
    anim_box.innerHTML = "MENU";
    applyEffect(2,0);
  
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_ENTER");
    }, 100); 
  
    // console.log(2);
    
  });
  
  MENU_TITLE_links.addEventListener("mouseleave", function () {
     anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
     anim_box.style.letterSpacing = "initial";
     anim_box.style.opacity="1";
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_OUT");  
    }, 0); 
  
    setTimeout(()=>{
        applyEffect(2,1);
    },500)
    // console.log(3);
  });

// ************************************************************************************************


SALE_OFF_links.addEventListener("mouseenter", function () {

    anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
  
    anim_box.style.letterSpacing = "50vw";
    anim_box.style.opacity="0";
    anim_box.style.backgroundColor ="rgb(133 ,187 ,101)";

    anim_box.style.display ="grid";
    anim_box.innerHTML = "SALE OFF";
  
    applyEffect(3,0);
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_ENTER");
    }, 100); 
  
    // console.log(4);
    
  });
  
  SALE_OFF_links.addEventListener("mouseleave", function () {
     anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
     anim_box.style.letterSpacing = "initial";
     anim_box.style.opacity="1";
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_OUT");  
    }, 0); 
  

    setTimeout(()=>{
        applyEffect(3,1);
    },500)
    // console.log(5);
  });



// ************************************************************************************************


NEWS_links.addEventListener("mouseenter", function () {

    anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
  
    anim_box.style.letterSpacing = "50vw";
    anim_box.style.opacity="0";
    anim_box.style.backgroundColor ="rgb(234, 128, 252)";
    anim_box.style.display ="grid";
    anim_box.innerHTML = "NEWS";
    applyEffect(4,0);
  
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_ENTER");
    }, 100); 
  
    // console.log(6);
    
  });
  
  NEWS_links.addEventListener("mouseleave", function () {
     anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
     anim_box.style.letterSpacing = "initial";
     anim_box.style.opacity="1";
  
    setTimeout(() => {
      anim_box.classList.add("Header_hover_mainLink_OUT");  
    }, 0); 
  

    setTimeout(()=>{
        applyEffect(4,1);
    },500)
    // console.log(7);
  });


// ************************************************************************************************


NAV_LINKS_links.addEventListener("mouseenter", function () {

  anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");

  anim_box.style.letterSpacing = "50vw";
  anim_box.style.opacity="0";
  anim_box.style.backgroundColor ="rgb(255, 128, 171)";
  anim_box.style.display ="grid";
  anim_box.innerHTML = "CONTACT";

  applyEffect(5,0);

  setTimeout(() => {
    anim_box.classList.add("Header_hover_mainLink_ENTER");
  }, 100); 

  // console.log(8);
  
});

NAV_LINKS_links.addEventListener("mouseleave", function () {
   anim_box.classList.remove("Header_hover_mainLink_ENTER","Header_hover_mainLink_OUT");
   anim_box.style.letterSpacing = "initial";
   anim_box.style.opacity="1";

  setTimeout(() => {
    anim_box.classList.add("Header_hover_mainLink_OUT");  
  }, 0); 


  setTimeout(()=>{
    applyEffect(5,1);
},500)
  // console.log(9);
});

// ************************************************************************************************
let number_order_int = parseInt(number_order.innerHTML);

plus_btn.addEventListener("click", function() {
    if(number_order_int>98){
        alert("Full Order List!")
        return;
    }
    number_order_int = number_order_int + 1;
    number_order.innerHTML = number_order_int.toString();
});
minus_btn.addEventListener("click", function() {
    if(number_order_int<1){
        alert("Empty Order List!")
        return;
    }
    number_order_int = number_order_int - 1;
    number_order.innerHTML = number_order_int.toString();
});








const root = getComputedStyle(document.documentElement); 
const primaryColor = root.getPropertyValue('--Red_theme_color');  
const light_black = root.getPropertyValue('--blackLight_text_color'); 
const secoandColor = root.getPropertyValue("--Yellow_theme_color"); 



let menu_status = false;

const menu_bar_icon = document.querySelector(".header_top_menubarMobile-container");
const menu_bar_icon_items =[ document.querySelector("#menu_path_1") , 
document.querySelector("#menu_path_2_1") ,  document.querySelector("#menu_path_2_2") ,  document.querySelector("#menu_path_2_3") , 
document.querySelector("#menu_path_3") ];
const menu_bar_box = document.querySelector(".header__Mainnavbtn-Container");


function menu_icon_anim_REMOVE(){
  menu_bar_icon_items[0].classList.remove("anim_menubar_ICON_in_top","anim_menubar_ICON_out_top");

  menu_bar_icon_items[1].classList.remove("anim_menubar_ICON_in_middle_notmid","anim_menubar_ICON_out_middle_notmid");
  menu_bar_icon_items[2].classList.remove("anim_menubar_ICON_in_middle_mid","anim_menubar_ICON_out_middle_mid");
  menu_bar_icon_items[3].classList.remove("anim_menubar_ICON_in_middle_notmid","anim_menubar_ICON_out_middle_notmid");

  menu_bar_icon_items[4].classList.remove("anim_menubar_ICON_in_bottom","anim_menubar_ICON_out_bottom");

}

function menu_icon_anim_IN(){
  menu_bar_icon_items[0].classList.add("anim_menubar_ICON_in_top");

  menu_bar_icon_items[1].classList.add("anim_menubar_ICON_in_middle_notmid");
  menu_bar_icon_items[2].classList.add("anim_menubar_ICON_in_middle_mid");
  menu_bar_icon_items[3].classList.add("anim_menubar_ICON_in_middle_notmid");

  menu_bar_icon_items[4].classList.add("anim_menubar_ICON_in_bottom");




}
function menu_icon_anim_IN_SETprop(){
  menu_bar_icon_items[0].style.transform = "translateY(0px)";
  menu_bar_icon_items[4].style.transform = "translateY(0px)";
  menu_bar_icon_items[0].setAttribute("fill", light_black);
  menu_bar_icon_items[4].setAttribute("fill", light_black);

  menu_bar_icon_items[1].style.transform = "scaleX(1)";
  menu_bar_icon_items[2].setAttribute("fill", light_black);
  menu_bar_icon_items[3].style.transform = "scaleX(1)";
  menu_bar_box.style.transform = "translateX(-105%)";
}

function menu_icon_anim_OUT(){
  menu_bar_icon_items[0].classList.add("anim_menubar_ICON_out_top");

  menu_bar_icon_items[1].classList.add("anim_menubar_ICON_out_middle_notmid");
  menu_bar_icon_items[2].classList.add("anim_menubar_ICON_out_middle_mid");
  menu_bar_icon_items[3].classList.add("anim_menubar_ICON_out_middle_notmid");

  menu_bar_icon_items[4].classList.add("anim_menubar_ICON_out_bottom");

}

function menu_icon_anim_OUT_SETprop(){
  menu_bar_icon_items[0].style.transform = "translateY(3px)";
  menu_bar_icon_items[4].style.transform = "translateY(-4px)";
  menu_bar_icon_items[0].setAttribute("fill", secoandColor);
  menu_bar_icon_items[4].setAttribute("fill", secoandColor);

  menu_bar_icon_items[1].style.transform = "scaleX(0)";
  menu_bar_icon_items[2].setAttribute("fill", primaryColor);
  menu_bar_icon_items[3].style.transform = "scaleX(0)";

  menu_bar_box.style.transform = "translateX(0%)";


}




menu_bar_icon.addEventListener("click", function() {


  menu_icon_anim_REMOVE();
  menu_bar_box.classList.remove("anim_menubar_out","anim_menubar_in");
  
  if(menu_status==false){
    menu_icon_anim_IN_SETprop();
    setTimeout(()=>{
      menu_icon_anim_IN();
      
       menu_bar_box.classList.add("anim_menubar_in");
    
      },100)
  }

  else{
    menu_icon_anim_OUT_SETprop();

    setTimeout(()=>{
      menu_icon_anim_OUT();

      
      menu_bar_box.classList.add("anim_menubar_out");

      },100)
  }
  
  menu_status=!menu_status;


});