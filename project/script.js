function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("learn-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read-more";
      moreText.style.display = "none";
      btnText.style.backgroundColor = "green"
      btnText.style.padding = "20px"
    } else{
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read-less";
      btnText.style.backgroundColor = "red"
      btnText.style.padding = "20px"
    }
    

  }
  let duration = 2000
  let duration2 = 1000
  setTimeout( ()=> {
    document.querySelector(".intro11, .intro22").remove()
 },duration )
 let improve = document.querySelector("span")
setTimeout(()=>{
  improve.classList().add(".improvee")
},1000)