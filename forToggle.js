document.querySelectorAll(".dropdownBtn").forEach((button) => {
  button.addEventListener("click", () => {
    // Find the associated dropdown menu
    const dropdownMenu = button.nextElementSibling;

    const dropdownContainer = button.closest(".dropdownContainer");
    // Toggle the visibility of the clicked dropdown
    dropdownMenu.classList.toggle("hidden");

    dropdownContainer.classList.add("bg-[#1b263b]"); // Active state
    dropdownContainer.classList.remove("bg-transparent"); // Default
    const icon = button.querySelector('.left-arrow');
    icon.classList.toggle('-rotate-90');

    // Close other open dropdowns
    document.querySelectorAll(".dropdownMenu").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.add("hidden");
      }
    });

    document.querySelectorAll(".dropdownContainer").forEach((me) => {
      if (me !== dropdownContainer) {
        me.classList.remove("bg-[#1b263b]");
        me.classList.add("bg-transparent");
      }
    });
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdownContainer")) {
    document.querySelectorAll(".dropdownMenu").forEach((menu) => {
      menu.classList.add("hidden");
      menu.classList.remove("bg-[#1b263b]");
      menu.classList.add("bg-transparent");
    });
  }
});

