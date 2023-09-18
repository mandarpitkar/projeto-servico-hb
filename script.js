function inittabMenu() {
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
inittabMenu();


function initlinkInternos(){
    const linkInternos = document.querySelectorAll('a[href^="#"]')

    function handleLink(event) {
        console.log(event);
    }
    linkInternos.forEach((link) => {
        link.addEventListener('click', handleLink);
    })
}
initlinkInternos();


// function clickMenu() {
//     if(menu.style.display == 'block'){
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }