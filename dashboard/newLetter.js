const fetchData= document.querySelector('.setData');
let output='';
const url='https://honips-digital-hub-api.onrender.com/contact/get-all-newLetter';

//Get --read the post
fetch(url)
.then(res=>res.json())
.then(data =>{
    data.data.forEach(element => {
        console.log(element._id)
       
        output+=`
        
        <tr class="bg-[#121212] border-b text-base dark:border-gray-700">
        <th scope="row" class="px-3 py-2 font-normal text-white">
            1
        </th>
        <th scope="row" class="px-3 py-2 font-normal text-white">
        ${element.email}
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