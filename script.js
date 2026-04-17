let status=document.getElementById("status");
let acceptbtn=document.getElementById("accept");
let check=0;
acceptbtn.addEventListener("click",()=>{
    if(check==0){
        acceptbtn.textContent="Unfriend";
        status.textContent="Friend";
        acceptbtn.style.backgroundColor="red";
        check=1;
    }
    else{
        acceptbtn.textContent="friend";
        status.textContent="stranger";
        acceptbtn.style.backgroundColor="green";
        check=0;  
    }
});
let card=document.getElementById("card");
let heart=document.querySelector(".ri-heart-3-fill");
card.addEventListener("dblclick",()=>{
    heart.style.transform="translate(-50%, -50%) scale(1)";
    heart.style.opacity="0.8";
    setTimeout(()=>{
    heart.style.opacity="0.3";
    },1000);
    setTimeout(()=>{
        heart.style.transform="translate(-50%, -50%) scale(0)";
    },1200);
});
let main=document.querySelector(".main");
let cursor=document.querySelector(".cursor");
main.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX+ "px";
    cursor.style.top = e.clientY+ "px";
});