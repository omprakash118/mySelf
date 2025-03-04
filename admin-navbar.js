const navBar = document.getElementById("admin-sidebar");

navBar.innerHTML = `
    <nav class="flex-col text-[#8e9baa]">
        <div class="logo text-center p-3 border-b text-3xl rounded-2xl shadow-2xl shadow-black  ">
          MLSU
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div class="myMenu mt-8 ">
          <ul class=" flex-col rounded-2xl text-xl">
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77]">
              <a href="" class="block ">Dashboard</a>
            </li>

            <li class=" pt-7 pb-3 pl-1.5 text-[#737b85] ">Managment</li>

            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77] block relative dropdownContainer">
              <button class="flex justify-between items-center container cursor-pointer dropdownBtn transition-all duration-500" >
              <span>Manage Teacher</span>
              <i class="fa-solid fa-angle-left left-arrow transition-transform duration-400" ></i>
              </button>
          
              <div class="mt-4 hidden dropdownMenu transition-all duration-500" >
                <ul class="flex-col rounded-2xl text-xl text-[#737b85] ">
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-plus  pr-3.5 text-xl"></i> 
                      <span>Add</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-minus pr-3.5  text-xl"></i>
                      <span>Remove</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-list text-xl pr-3.5"></i>
                      <span>List</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77] block relative dropdownContainer">
              <button class="flex justify-between items-center container cursor-pointer dropdownBtn transition-all duration-500"  >
              <span>Manage Student</span>
              <i class="fa-solid fa-angle-left left-arrow transition-transform duration-400"></i>
              </button>
              <div class="mt-4 hidden dropdownMenu transition-all duration-500" >
                <ul class="flex-col rounded-2xl text-xl text-[#737b85] ">
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-plus  pr-3.5 text-xl"></i> 
                      <span>Add</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-user-minus pr-3.5  text-xl"></i>
                      <span>Remove</span>
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#0d1b2a] rounded-2xl hover:text-white active:bg-[#415a77]">
                    <a href="" class="block ">
                      <i class="fa-solid fa-list text-xl pr-3.5"></i>
                      <span>List</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>  

            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77] dropdownContainer">
              <a href="" class="block ">Courses</a>
            </li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77]">
              <a href="" class="block ">class</a>
            </li>
            
            <li class="text-[#737b85] pt-7 pb-3 pl-1.5 ">Notification</li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:text-white  hover:shadow-2xl shadow-black active:bg-[#415a77]">
              <a href="" class="block ">Notice</a>
            </li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77]">
              <a href="" class="block ">Message</a>
            </li>
            
            <li class="text-[#737b85] pt-7 pb-3 pl-1.5 ">Personal</li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-2xl shadow-black hover:text-white active:bg-[#415a77]">
              <a href="" class="block ">Setting</a>
            </li>
            
            <li class="p-3 pl-7 hover:bg-[#1b263b] hover:rounded-2xl hover:shadow-red-600 shadow-red-600 hover:text-red-500 active:bg-[#415a77]">
              <a href="" class="block ">Logout</a>
            </li>

          </ul>
        </div>
      </nav>
`

