const dropball = gsap.timeline({ paused: false, delay: 1 });

dropball.to(".ball", {
  duration: 2, 
  ease: CustomEase.create("custom", "M0,0 C0.023,0 0.152,0.473 0.176,0.561 0.222,0.728 0.269,0.963 0.278,1 0.287,0.985 0.337,0.873 0.383,0.811 0.445,0.726 0.516,0.753 0.531,0.762 0.617,0.812 0.652,0.983 0.66,1 0.73,0.916 0.811,0.997 0.812,0.998 0.824,0.994 0.833,0.986 0.85,0.986 0.857,0.986 0.915,1 0.915,1 0.915,1 1,1 1,1 "),
  y: window.innerHeight - (window.innerHeight / 3)
})

function elem(id){
  var element = document.getElementById(id);
  return element;
}

function releaseBall() {
  dropball.restart();
}

function goCelestialBody(id) {
  elem('cb').removeAttribute('class');
  elem('cb').classList.add(id);
  var vel;
  switch (id) {
    case     'sun': vel = 0.06; break;
    case 'mercury': vel = 5.40; break;
    case   'venus': vel = 2.25; break;
    case   'earth': vel = 2.00; break;
    case    'moon': vel = 12.3; break;
    case    'mars': vel = 5.36; break;
    case 'jupiter': vel = 0.80; break;
    case  'saturn': vel = 1.95; break;
    case  'uranus': vel = 2.30; break;
    case 'neptune': vel = 1.79; break;
    case   'pluto': vel = 32.2; break;
        deafault: vel = 1;
  }
  dropball.duration(vel).restart();
  
  elem('ufo').classList.add('open');
  setTimeout(function(){elem('ufo').classList.remove('open');}, 500);
  
  var btns = document.querySelectorAll('.cbs button')
  
  for(var i = 0; i<btns.length; i++){
    btns[i].classList.remove('info');
  }
  
  elem(id).classList.add('info');
  console.log(id);
}

elem('ufo').addEventListener("mouseup", function(){
	elem('ufo').classList.add('open');
  setTimeout(function(){elem('ufo').classList.remove('open');}, 500);
});

elem('earth').click();