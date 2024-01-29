const formEl= document.querySelector('.input');
formEl.addEventListener('submit',(e)=>{
e.preventDefault();
const formData=new FormData(formEl); 
let skill=[];
let email=
document.querySelector('[name="email"]').value;
document.querySelectorAll('[type="checkbox"]').
forEach(item=>{
  if(item.checked ==true){
skill.push(item.value);
  }
})
const body={
  "email":email,
  "service":skill.toString()
}


fetch('https://honips-digital-hub-api.onrender.com/contact/news-letter-subcription',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(body),
  }).then(res=>res.json())
  .then(data=>{
   
    alert(`${data.message}`)
  
    })
  .catch(err=>console.log(err))
})