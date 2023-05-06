
document.querySelector("#bar").addEventListener("click",function(){

    document.querySelector('.cross').style.visibility = 'visible';

    document.querySelector("#navbar2").style.right = '0';
    
});

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector("#navbar2").style.right = '-300px';

  

});



var lis = document.querySelectorAll(".small-img-col img");
var img1 = document.querySelector(".single-prod-img img");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    var index = this.getAttribute("data-index");
    var imgname = "img/products/f" + index + ".jpg";
    img1.setAttribute("src", imgname);
  });
}

