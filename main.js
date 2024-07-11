document.addEventListener('DOMContentLoaded', function() {
    const dropdownIcon = document.querySelector('.dropdown-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    dropdownMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') { 
            handleDropdownOptionClick(event.target);
            dropdownMenu.classList.remove('show'); 
        }
    });
});

function handleDropdownOptionClick(target) {
    console.log('Clicked dropdown option:', target.textContent.trim());
}

function openLoginModal() {
    var loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
}

function closeLoginModal() {
    var loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
}

var closeButton = document.getElementsByClassName("close")[0];
if (closeButton) {
    closeButton.onclick = function() {
        closeLoginModal();
        closeRegisterModal();
    }
}

function openregister(){
    let RegisterModel=document.getElementById("RegisterModel");
    RegisterModel.style.display="block";
}

function closeRegisterModal() {
    let RegisterModel = document.getElementById("RegisterModel");
    RegisterModel.style.display = "none";
}

const logInsideLink = document.querySelector('.loginside');
if (logInsideLink) {
    logInsideLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        closeLoginModal(); 
        openregister(); 
    });
}

const registerside=document.querySelector('.registerside')

registerside.addEventListener('click',(e)=>{
    e.preventDefault();
      closeRegisterModal();
      openLoginModal();
})
function changeTab(selectedTab) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    selectedTab.classList.add('active');
}