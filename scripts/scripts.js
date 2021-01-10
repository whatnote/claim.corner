

//rotating cards

//property
$(document).ready(function(){
  $(".frontflipprop, flipbackprop").click(function(){
    $(".motorcard").toggleClass("backflip");
  });
});

//motor
$(document).ready(function(){
  $(".frontflipm, .flipbackm").click(function(){
    $(".propertycard").toggleClass("backflip");
  });
});

//git
$(document).ready(function(){
  $(".frontflipgit, .flipbackgit").click(function(){
    $(".gitcard").toggleClass("backflip");
  });
});

//expanding cards
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () =>{
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(panel =>{
      panel.classList.remove('active')
  })
}