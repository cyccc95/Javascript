// for(let i =0 ; i < 3 ; i++) {
//   document.querySelectorAll('.tab-button')[i].addEventListener('click', function() {
//     removeOrange();
//     addOrange(i);
//     removeShow();
//     addShow(i);
//   })
// }

function removeOrange(){
  document.querySelectorAll('.tab-button')[0].classList.remove('orange');
  document.querySelectorAll('.tab-button')[1].classList.remove('orange');
  document.querySelectorAll('.tab-button')[2].classList.remove('orange');
}
function removeShow(){
  document.querySelectorAll('.tab-content')[0].classList.remove('show');
  document.querySelectorAll('.tab-content')[1].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.remove('show');
}
function addOrange(i){
  document.querySelectorAll('.tab-button')[i].classList.add('orange');
}
function addShow(i){
  document.querySelectorAll('.tab-content')[i].classList.add('show');
}
function openTab(i){
  removeOrange();
  removeShow();
  addOrange(i);
  addShow(i);
}
document.querySelector('.list').addEventListener('click', function(e){
  // if(e.target == document.querySelectorAll('.tab-button')[0]){
  //   openTab(0);
  // }
  // if(e.target == document.querySelectorAll('.tab-button')[1]){
  //   openTab(1);
  // }
  // if(e.target == document.querySelectorAll('.tab-button')[2]){
  //   openTab(2);
  // }
  openTab(e.target.dataset.id);
})