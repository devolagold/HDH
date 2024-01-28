const form=document.getElementById("loginForm");
form.addEventListener("submit",function(e){
    e.preventDefault();

  const paylode=  new FormData(form);
  const fin=Object.fromEntries(paylode)
  console.log([fin,])
  fetch('https://honips-digital-hub-api.onrender.com/contact/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(fin),
  }).then(res=>res.json())
  .then(data=>{
    if(data.message=='login succesful'){
    window.location.assign('dashboard.html')
    alert(`${data.message}`)
  
    }else{
        alert(`${data.message}`)
        return;
    } })
  .catch(err=>console.log(err))
})