var screenOut = document.querySelector(".screen");

var del = document.querySelector("#del");

var calc = document.querySelector("#calc");
var reset = document.querySelector("#reset");

var buttons = document.getElementsByClassName('button');

var body = document.getElementsByTagName('body');

var toggle = document.querySelector('.tri-state-toggle');

var keypads_cont = document.querySelector(".btn-cont")

var button_tags = document.getElementsByTagName('button');

var para = document.querySelector('p')

var head = document.querySelector('h1');

var btns = [...button_tags];

var btn_wrap = document.querySelector('.btns');


var switches = [...buttons]


// Calculator Functions 🔥✅
function input(num) {

  screenOut.value += num;

}

del.addEventListener("click", () => {
  screenOut.value = screenOut.value.slice(0, -1);

})

calc.addEventListener("click", () => {
  try {
    screenOut.value = eval(screenOut.value);

  } catch (e) {
    screenOut.value = "ERROR"
  }

});
reset.addEventListener('click', () => {
  screenOut.value = " "
})
/// Toggle navigation 🖐️

switches.forEach((elem, index) => {


  elem.addEventListener("click", () => {
   
// Theme 1:
    if (index == 0) {
      
      switches[0].style.opacity =1
      switches[1].style.opacity =0
      switches[2].style.opacity =0
  
      body[0].style.backgroundColor = "hsl(222,26%,31%)";

      toggle.classList.add('toggle-mode-1')
      toggle.classList.remove('toggle-mode-2')
      toggle.classList.remove('toggle-mode-3')

      screenOut.classList.add("screen-mode-1")
      screenOut.classList.remove("screen-mode-2")
      screenOut.classList.remove("screen-mode-3")


      keypads_cont.classList.remove('btn-cont-mode-2')
      keypads_cont.classList.remove('btn-cont-mode-3')
      keypads_cont.classList.add('btn-cont-mode-1');

      btns.forEach((btn, i) => {

        btn.style.backgroundColor = 'hsl(30, 25%, 89%)';

        btn.style.boxShadow = '-0.51px 3px hsl(28, 16%, 65%)';

        btn.style.color = 'hsl(221, 14%, 31%)'

        btns[3].style.background = 'hsl(225,21%,49%)'

        btns[3].style.boxShadow = '-0.51px 2px hsl(224, 28%, 35%)'
        btns[3].style.color = 'white'

        btns[16].style.background = 'hsl(225,21%,49%)'

        btns[16].style.boxShadow = '-0.51px 2px hsl(224, 28%, 35%)'
        btns[16].style.color = 'white'


        btns[17].style.background = 'hsl(6,63%,50%)'

        btns[17].style.boxShadow = '-0.51px 2px hsl(6,70%,34%)'
        btns[17].style.color = 'hsl(198, 20%, 13%)'

        para.style.color = 'white'
        head.style.color = 'white'
        screenOut.style.color = 'white';
      });
    }

    else if (index == 1) {
     
      switches[0].style.opacity =0
      switches[1].style.opacity =1
      switches[2].style.opacity =0

      body[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      elem.style.backgroundColor = "hsl(25, 98%, 40%)";

      toggle.classList.remove('toggle-mode-1')
      toggle.classList.add('toggle-mode-2')
      toggle.classList.remove('toggle-mode-3')

      screenOut.classList.add('screen-mode-2')
      screenOut.classList.remove('screen-mode-1')
      screenOut.classList.remove('screen-mode-3')


      keypads_cont.classList.remove('btn-cont-mode-1');
      keypads_cont.classList.remove('btn-cont-mode-3')
      keypads_cont.classList.add('btn-cont-mode-2')

      btns.forEach((btn, i) => {

        btn.style.backgroundColor = 'hsl(45,7%,89%)';

        btn.style.boxShadow = '-0.51px 3px hsl(35, 11%, 61%) ';

        btn.style.color = 'hsl(60, 10%, 19%)'

        btns[3].style.background = 'hsl(185, 42%, 37%)'

        btns[3].style.boxShadow = '-0.51px 2px hsl(185, 58%, 25%)';

        btns[3].style.color = 'white'


        btns[16].style.background = 'hsl(185, 42%, 37%)'

        btns[16].style.boxShadow = '-0.51px 2px hsl(185, 58%, 25%)';

        btns[16].style.color = 'white'


        btns[17].style.background = 'hsl(25, 98%, 40%)'

        btns[17].style.boxShadow = '-0.51px 2px hsl(25, 99%, 27%) '
        btns[17].style.color = 'white';

        para.style.color = 'hsl(60, 10%, 19%)'
        head.style.color = 'hsl(60, 10%, 19%)'
        screenOut.style.color = 'hsl(60, 10%, 19%)';

        
   

      });

    }

    else {
      switches[0].style.opacity =0
      switches[1].style.opacity =0
      switches[2].style.opacity =1
    
     
      body[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      elem.style.backgroundColor = "hsl(176,100%,44%)";

      toggle.classList.remove('toggle-mode-1')
      toggle.classList.remove('toggle-mode-2')
      toggle.classList.add('toggle-mode-3')

      screenOut.classList.add('screen-mode-3')
      screenOut.classList.remove('screen-mode-1')
      screenOut.classList.remove('screen-mode-2')


      keypads_cont.classList.remove('btn-cont-mode-1');
      keypads_cont.classList.remove('btn-cont-mode-2')
      keypads_cont.classList.add('btn-cont-mode-3')

      btns.forEach((btn, i) => {

        btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        btn.style.boxShadow = '-0.51px 3px hsl(290, 70%, 36%) '
        btn.style.color = 'hsl(52, 100%, 62%)'

        btns[3].style.background = 'hsl(281, 89%, 26%)'

        btns[3].style.boxShadow = '-0.51px 2px hsl(285, 91%, 52%)'
        btns[3].style.color = 'white'

        btns[16].style.background = 'hsl(281, 89%, 26%)'

        btns[16].style.boxShadow = '-0.51px 2px hsl(285, 91%, 52%)'
        btns[16].style.color = 'white'


        btns[17].style.background = 'hsl(176,100%,44%)'

        btns[17].style.boxShadow = '-0.51px 2px  hsl(177, 92%, 70%)'
        btns[17].style.color = 'hsl(198, 20%, 13%)'

        para.style.color = 'hsl(52, 100%, 62%)'
        head.style.color = 'hsl(52, 100%, 62%)'
        screenOut.style.color = 'hsl(52, 100%, 62%)'

      });

    }
  });

});
