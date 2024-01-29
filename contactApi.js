const form=document.getElementById("inputForm");
form.addEventListener("submit",function(e){
    e.preventDefault();

  const paylode=  new FormData(form);
 
  fetch('https://honips-digital-hub-api.onrender.com/contact/register',{
    method:"POST",
    body:paylode,
  }).then(res=>res.json())
  .then(data=>alert(`${data.message}`))
  .catch(err=>console.log(err))
})