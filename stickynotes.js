const btn=document.querySelector(".add").addEventListener("click",stickynotes);
const stickynotescontiner=document.querySelector(".stickynotescontiner");
const colorbar =document.querySelector("#colorbar");
const textcolorbar=document.querySelector("#textcolorbar");

// btn.addEventListener("click",()=>{
//     const random=Math.floor(Math.random()*colors.length);
//     document.body.style.backgroundColor=colors[random];
//     color.textContent=colors[random];

// });
// background color btttin

function stickynotes(){

   
    // sticky notes
    const text=notesareat.value;
    const sticky=document.createElement("div");
     sticky.innerText=text;
    const cross=document.createElement("span");
    cross.innerHTML= '&times';
    sticky.append(cross);
    stickynotescontiner.append(sticky);
    cross.style.marginLeft= "20px";
    cross.style.cursor="pointer";
    cross.addEventListener("click",()=>{
        sticky.remove();
    });
    notesareat.value="";

    // div color
    sticky.style.backgroundColor=colorbar.value;
    // text color
    sticky.style.color=textcolorbar.value;
    // css stickydiv
    sticky.style.padding= "20px";
    sticky.style.borderRadius= "10px";
    sticky.style.boxShadow= "0 0 5px 0px black";
    sticky.style.margin="20px"
    
    
   
  
    
    
    // console.log("sticky");
   

}