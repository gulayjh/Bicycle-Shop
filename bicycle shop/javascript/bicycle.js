/* WRAP LETTER */
var textWrapper = document.querySelector('.ml12');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml12 .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        }).add({
          targets: '.ml12 .letter',
          translateX: [0,-30],
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 1100,
          delay: (el, i) => 100 + 30 * i
        });
    
    /* FORM */
          function checkEmpty() {
           var name = document.getElementById('form-name').value;
           var email = document.getElementById('form-email').value;
            var text = document.getElementById('form-text').value;
           if((name == "")&&(email == "")&&(text == "") ){
              document.getElementById('form-name').style.borderColor = "red";
              document.getElementById('form-email').style.borderColor = "red";
              document.getElementById('form-text').style.borderColor = "red";
            } else if(name == "") {
              document.getElementById('form-name').style.borderColor = "red";}
             else if(email == "") {
              document.getElementById('form-email').style.borderColor = "red";}
             else if(text == "") {
              document.getElementById('form-text').style.borderColor = "red";}
   else {
      window.location.href = "./okpage.html";;
    }
  }