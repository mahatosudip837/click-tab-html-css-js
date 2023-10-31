let filterBtns = document.querySelectorAll('.filter-btn');
let tabItems = document.querySelectorAll('.tab-item');
let tabContainer = document.querySelector('.tab-filter-item-container');

filterBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        filterBtns.forEach((btn, j) => {
            btn.classList.remove('active');
        });

        let selectTab = btn.getAttribute('data-tab');
        btn.classList.add('active');

        tabItems.forEach((tab, t) => {
            tabContainer.style.height = tab.scrollHeight + 'px';

            if (tab.classList.contains(selectTab)) {
                tab.classList.add('select_tab');
            } else {
                tab.classList.remove('select_tab');
            }
        });
    });
});

tabItems.forEach((tab, th) => {
    tabContainer.style.height = tab.scrollHeight + 'px';
});
