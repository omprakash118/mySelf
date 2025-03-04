const myHeader = document.getElementById("admin-header");

myHeader.innerHTML = `
    <div class="flex ml-[5rem]  ">
        <button class="cursor-pointer bg-[#e0e1dd] hover:bg-[#415a77] text-[#415a77] hover:text-[#e0e1dd] p-1.5 pl-2.5 pr-2.5  rounded-[8px] w-[2.2rem] mr-5">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>

        <form action="#">
            <div class="border rounded-[8px] bg-[#e0e1dd]  text-[#415a77]  border-none ">
              <input type="text" placeholder="search" class="pl-5 pt-1.5 pb-1.5 w-[14rem] hover:text-[#415a77] text-[#415a77] font-bold text-xl" >
              <span>
                <i class="fa-solid fa-magnifying-glass pr-2 cursor-pointer"></i>
              </span>
            </div>
        </form>
      </div>

        <div class="relative mr-[4rem]  ">
        <!-- Button -->
        <button id="dropdownBtn" class="flex items-center px-4 py-2 bg-[#e0e1dd] hover:text-[#e0e1dd] active:bg-[#8e9baa] hover:bg-[#415a77] rounded-lg shadow-md  text-[#415a77] transition cursor-pointer">
            <i class="fa-regular fa-user  mr-2"></i>
            <span class="font-semibold ">josh</span>
            <i class="fa-solid fa-angle-left ml-2 left-arrow "></i>
        </button>

        <!-- Dropdown Menu -->
        <div id="dropdownMenu" class="absolute right-0 mt-4 w-50 h-auto text-[#8e9baa] bg-[#e0e1dd] hidden shadow-lg rounded-2xl transition-all z-10 border-[#415a77] border">
            <div class="px-4 py-3 text-center border-b  m-3 rounded-2xl shadow-xs shadow-black">
                <i class="fa-regular fa-user text-[#1b263b] text-3xl"></i>
                <p class="text-[#1b263b] font-semibold mt-1">josh prajapat</p>
            </div>
            <ul class="text-[#1b263b]  m-3 rounded-2xl border-[#1b263b]">
                <ul class="flex-col rounded-2xl text-xl text-[#737b85] ">
                  <li class="p-3 pl-7   hover:bg-[#1b263b] rounded-2xl hover:text-white active:bg-[#415a77] shadow-xs shadow-black hover:drop-shadow-2xl">
                    <a href="" class="block ">
                        Profile
                    </a>
                  </li>
                  <li class="p-3 pl-7  hover:bg-[#1b263b] rounded-2xl hover:text-white active:bg-[#415a77] shadow-xs shadow-black hover:drop-shadow-2xl">
                    <a href="" class="block ">
                        Setting
                    </a>
                  </li>
                </ul>
            </ul>
            <div class="border-b  m-3 rounded-2xl text-xl">
                <a href="#" class="block px-4 py-2 p-3 pl-7 hover:bg-[#1b263b] shadow-black rounded-2xl shadow-xs hover:text-red-500 active:bg-[#415a77] ">Log Out</a>
            </div>
        </div>
    </div>
`;
