
//Search 
const  search =document.getElementById("search")
const box=document.getElementsByClassName("box")


search.addEventListener('input',function(){
  const search_value=search.value.toLowerCase().split(" ").join('');
      for(i=0;i<box.length; i++) {
        const name=box[i].getElementsByTagName("H3")[0].innerHTML.toLowerCase().split(" ").join('');
        if (name.includes(search_value)){
          box[i].style.display="block"
        }else{
          box[i].style.display="none"
        }
      }
})

//Search End 

//resposive menu
const icon =document.getElementById("menu")
const navbar=document.getElementById("nav")

icon.addEventListener('click',function(){
  if(navbar.style.display==="block"){
    navbar.style.display="none"
  }else{
    navbar.style.display="block"
  }
})

//resposive menu end



