const fetchData= document.querySelector('.putData');
let output='';
const url='https://honips-digital-hub-api.onrender.com/contact/get-all-contacts';

//Get --read the post
fetch(url)
.then(res=>res.json())
.then(data =>{
    data.data.forEach(element => {
      
        output+=`
        
        <tr class="bg-[#121212] border-b dark:border-gray-700">
        <th scope="row" class="px-3 py-2 font-normal text-white">
            ${element.full_name}
        </th>
        <td class="px-3 py-2">
        ${element.work_email}
        </td>
        <td class="px-3 py-2">
        ${element.business_name}
        </td>
        <td class="px-3 py-2">
        ${element.business_description}
        </td>
        <td class="px-3 py-2">
        ${element.Select_Service_Category}
        </td>
        <td class="flex flex-col space-y-4 px-3 py-2">
            <p>        ${element.file}</p>
            <a href="https://honips-digital-hub-api.onrender.com/contact/${element._id}/download-pdf" class="flex space-x-1">
                <p class="text-sm">Download</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_49_52)">
                    <path d="M2.5 15.8334H17.5V17.5H2.5V15.8334ZM10.8333 10.9767L15.8925 5.91669L17.0708 7.09502L10 14.1667L2.92917 7.09585L4.1075 5.91669L9.16667 10.975V1.66669H10.8333V10.9767Z" fill="#9ca3af"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_49_52">
                    <rect width="20" height="20" fill="#9ca3af"/>
                    </clipPath>
                    </defs>
                </svg>                                    
            </a>
        </td>
        <td class="px-3 py-2">
        ${element.message}
        </td>
    </tr>

        `;
    });
    fetchData.innerHTML=output;
    
    
}
);