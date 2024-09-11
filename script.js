let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top > offset && top < offset + height){

            navLinks.forEach(links =>{
                links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }


    })
}

const toggleBtn = document.querySelector('.toggle_btn')
const togglebtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function (){

    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    togglebtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    :  'fa-solid fa-bars'
}

