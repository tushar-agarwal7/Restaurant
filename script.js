const home=document.querySelector(".home");
const menu=document.querySelector(".menu");
const contact=document.querySelector(".contact");
const homeBtn=document.querySelector("#homebtn");
const menuBtn=document.querySelector("#menubtn");
const contactBtn=document.querySelector("#contactbtn");



let openHome =true;
let openMenu=false;
let openContact=false;

const content=document.querySelector("#content");
const box=document.createElement("div");
box.classList.add("cont");
content.appendChild(box);

home.addEventListener("click",()=>{
    openHome=true;
    openMenu=false;
    openContact=false;
  
    show();
})

menu.addEventListener("click",()=>{
    openHome=false;
    openMenu=true;
    openContact=false;
   
    show();
})

contact.addEventListener("click",()=>{
    openHome=false;
    openMenu=false;
    openContact=true;

    show();
})

function show(){
    homeBtn.style.borderBottom = "";
    menuBtn.style.borderBottom = "";
    contactBtn.style.borderBottom = "";
    if(openHome){
        homeBtn.style.borderBottom="1px solid white";
      box.innerHTML=`
      <div class="homediv">
      <div class="description">
      <p>Welocme to Chandigarh Foods</p>
      <p>Best Restaurant in your country</p>
      <div class="divImg">
      <img src="images/home.avif" class="homeimg"/>
      </div>
      </div>
      </div>
      `
    }

    if(openMenu){
        menuBtn.style.borderBottom="1px solid white";
        box.innerHTML=`
        <div class="card">

        <div class="menudiv">
        <img src="images/salsiccia.png" class="menuimg"/>
        <div class="card-body">
        <h2>Salsiccia</h2>
          <p class="card-text">Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p>
        </div>
        </div>

        <div class="menudiv">
        <img src="images/salsiccia.png" class="menuimg"/>
        <div class="card-body">
        <h2>Gamberi</h2>
          <p class="card-text">Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil</p>
        </div>
        </div>

        <div class="menudiv">
        <img src="images/salsiccia.png" class="menuimg"/>
        <div class="card-body">
        <h2>Pepe</h2>
          <p class="card-text">Tomato sauce, Mozarella, Chilli flakes, Olives, Basil</p>
        </div>
        </div>

        <div class="menudiv">
        <img src="images/salsiccia.png" class="menuimg"/>
        <div class="card-body">
        <h2>Disgustoso</h2>
          <p class="card-text">Tomato sauce, Mozarella, Chilli flakes, Olives, Basil</p>
        </div>
        </div>
        <div class="menudiv">
        <img src="images/salsiccia.png" class="menuimg"/>
        <div class="card-body">
        <h2>Coloroto</h2>
          <p class="card-text">Tomato sauce, Mozarella, Chilli flakes, Olives, Basil</p>
        </div>
        </div>
        <div class="menudiv">
        <img src="images/salsiccia.png" class="menuimg"/>
        <div class="card-body">
        <h2>Pomodoro</h2>
          <p class="card-text">Tomato sauce, Mozarella, Chilli flakes, Olives, Basil</p>
        </div>
        </div>
      </div>`;
        
    }
    if(openContact){
        contactBtn.style.borderBottom="1px solid white"; 
        box.innerHTML=`
        <div class="contactdiv">
       <p> <i class="fa-solid fa-phone"></i> &nbsp; 123 456 789</p>
       <p><i class="fa-solid fa-shop"></i>Mohali, Chandigarh ,India</p>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7893.59315958759!2d76.74395605533567!3d30.72017669306676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb5cfffffff%3A0x283a79da0286bea7!2sMcDonald&#39;s!5e0!3m2!1sen!2sjp!4v1707226762819!5m2!1sen!2sjp" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
        `  
    }
}

show();