const form=document.getElementById("loginForm");
const fetchData= document.querySelector('.new');
let output='';
form.addEventListener("submit",function(e){
    e.preventDefault();

  const paylode=  new FormData(form);
  const fin=Object.fromEntries(paylode)

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
    
  
    
output=`
<label class="text-base text-center text-green-600">${data.message}</label>
`
   fetchData.innerHTML=output;
    }else{
      output=`<label class="text-base text-center text-red-600">${data.message}</label>`; fetchData.innerHTML=output;
      
        return;
    } })
  .catch(err=>console.log(err))
})