const fetchData= document.querySelector('.setData');
let output='';
const url='https://honips-digital-hub-api.onrender.com/contact/get-all-newLetter';

//Get --read the post
fetch(url)
.then(res=>res.json())
.then(data =>{
       // Initialize counter variable
let count = 0;

// Function to increment the counter
function incrementCounter() {
   count++; // Increment count by 1
    console.log("Count:", count);
    return count
}
    data.data.forEach(element => {
   
        output+=`
        
        <tr class="bg-[#121212] border-b text-base dark:border-gray-700">
        <th scope="row" class="px-3 py-2 font-normal text-white">
            ${incrementCounter()}
        </th>
        <th scope="row" class="px-3 py-2 font-normal text-white">
        ${element.sub_email}
        </th>
        <th scope="row" class="px-3 py-2 font-normal text-white">
        ${element.service}  
        </th>
    </tr>

        `;
    });
    fetchData.innerHTML=output;
    
    
}
);