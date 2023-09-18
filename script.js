function initTabMenu() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabMenu();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    if (accordionList.length) {
        function activeAccordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');

        }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }


}
initAccordion();

const linksInterno = document.querySelectorAll('.js-menu a[href^"#"]');

