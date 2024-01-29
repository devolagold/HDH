
const form=document.getElementById("inputForm");
form.addEventListener("submit",function(e){
  e.preventDefault();
  const file=document.querySelector('[name="file"]').value;
  const full_name=document.querySelector('[name="full_name"]').value;
  const work_email=document.querySelector('[name="work_email"]').value;
  const business_name=document.querySelector('[name="business_name"]').value;
  const business_description=document.querySelector('[name="business_description"]').value;
  const Select_Service_Category=document.querySelector('[name="Select_Service_Category"]').value;
  const message=document.querySelector('[name="message"]').value;
  const body={
    "full_name":full_name,
    "work_email":work_email,
    "business_name":business_name,
    "business_description":business_description,
    "Select_Service_Category":Select_Service_Category,
    "message":message
  }
  if(file==''){
 
    fetch('https://honips-digital-hub-api.onrender.com/contact/register-no-file',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body),
      
    }).then(res=>res.json())
    .then(data=>alert(`${data.message}`))
    .catch(err=>console.log(err))
  
  }else{
    const paylode=  new FormData(form);
    fetch('https://honips-digital-hub-api.onrender.com/contact/register',{
      method:"POST",
      body:paylode,
    }).then(res=>res.json())
    .then(data=>alert(`${data.message}`))
    .catch(err=>console.log(err))
  }
})
