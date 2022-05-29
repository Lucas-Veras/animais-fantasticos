function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add("ativo") ;

        function activateTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activateTab(index);
            });
        })
    }
}

function initAcordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = 'ativo';

    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        })
    }
}

const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

if(sections.length){
    sections[0].classList.add('ativo');
    
    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0){
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        })
    }

    window.addEventListener("scroll", animaScroll)
}
initTabNav();
initAcordion();