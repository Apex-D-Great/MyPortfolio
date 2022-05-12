
// resize navbar 
var navbar = document.querySelector('.navbar');
// when the scroll is higher than 20 veiw port height add sticky class to the tag  with a class navbar(its in the css)
    window.onscroll = () =>{
        this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
    }

    /*---------------skill animation--------------------- */
const skill_wrap=document.querySelector(".about-skills"),
      skil_bar=document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () =>{
          skilleffect()
          // checkscroll(skill_wrap)
      })

       // very time we scroll checking, we exceed the about-skills or not

      function checkscroll(e){

        // getting the top of the about-skill relative to the veiw port, in other word
        // we need to get the amount of pixels between the about skills and window top  edge
          let rect = e.getBoundingClientRect();

        // console.log(window.innerHeight) inner height
        // console.log(e.offsetHeight) for element size or measure in pixels
        // console.log(rect.top) for top window

        // after knowing the amount of pixels between the top edge of about-skills and the window
        // now we will check if we exceed the bottom edge of the about skills or not


          if(window.innerHeight >= rect.top + e.offsetHeight) {
              return true;
          }
          return false;
      }
      function skilleffect(){
        if(!checkscroll(skill_wrap)) return;
        skil_bar.forEach((skill) =>{
            skill.style.width = skill.dataset.progress;
        })
      }

      // this means for every time i scroll and my window height does not exceed rect.top + e.offsetHeight; my checkscroll vakue becomes false 
    // while skilleffect becomes true, hence i target the progress bar which has a new variable name skil_bar under js, which then works on the values


      // ANIMATING MY ICONS

function codeiconone(){
  let code = document.getElementById('code');
  code.innerHTML = "&#xf121;";
  setTimeout(function(){
    code.innerHTML = "&#xf5fc;";
  },2000);
}
codeiconone()
setInterval(codeiconone,4000)


function codeicontwo(){
  let code = document.getElementById('design');
  code.innerHTML = "&#xf3cd;";
  setTimeout(function(){
    code.innerHTML = "&#xf53f;";
  },2000);
}
codeicontwo()
setInterval(codeicontwo,4000)


//  move up
function codeiconthree(){
  let code = document.getElementById('server');
  code.innerHTML = "&#xf233;";
  setTimeout(function(){
    code.innerHTML = "&#xe13c;";
  },2000);
}
codeiconthree()
setInterval(codeiconthree,4000)

const moveup = document.querySelector('.moveup');
moveup.addEventListener('click',()=>{
  window.scroll(0,0);
})

// toggle effect

const navmenu = document.querySelector('.menu')
const navicon= document.querySelector('.nav-icon')

  navicon.addEventListener('click', ()=>{
      navmenu.classList.toggle('active');
  })

  // closing menu when link is clicked 
  const navlink = document.querySelectorAll('.nav-link');
  navlink.forEach((m)=>{
    m.addEventListener('click',()=>{
      const navmenu = document.querySelector('.menu');
      navmenu.classList.remove('active')
    })
  })
