var toggle = document.getElementById('toggle')
var nav_container = document.querySelector('.nav_container')
toggle.addEventListener("click", function() {
  nav_container.classList.toggle("side_nav_active")
  slider.classList.toggle("paused_slider")
})
// header active sticky
var header = document.querySelector("header")
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0)
})
// slider img hover ot active class in slider div
var img = document.querySelectorAll("img")
var slider = document.querySelector(".slider")
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function() {
    slider.classList.add("paused_slider")
  })
  img[i].addEventListener("mouseout", function() {
    slider.classList.remove("paused_slider")
  })
}
// count Total
var count=document.querySelectorAll("#count")
count1=0;
count2=0;
count3=0;
count4=0;
window.addEventListener("load",function(){

  for(var i=0;i<count.length;i++){
    setInterval(()=>{
      count1++
      count2++
      count3++
      count4++
      count[0].innerText=count1+'.k'
      count[1].innerText=count2+'.k'
      count[2].innerText=count3+'.k'
      count[3].innerText=count4+'.k'
      if(count1===555){
        count1--;
      }
      if(count2===999){
        count2--;
      }
      if(count3===666){
        count3--;
      }
      if(count4===995){
        count4--;
      }
    })
  }
})
// IMAGE LISHT BOX JS
var light_btn=document.querySelectorAll(".light_btn")
var items=document.querySelectorAll(".img");
var modal_body=document.querySelector(".modal-body")

for (var i = 0; i <items.length; i++) {
     let newIndex = i;
  items[i].onclick=function(){
    var imgURL=items[newIndex].querySelector("img").src;
    document.getElementById("preview_box").src=imgURL;
  }
}
