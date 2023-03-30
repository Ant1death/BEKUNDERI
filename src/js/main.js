'use strict'
window.addEventListener('DOMContentLoaded',() => {
    // настройка инпутов
    const inputs = document.querySelectorAll('input');
    if(inputs) {
        inputs.forEach((item,i) => {
            if(item.value.length > 0) {
                item.classList.add('focusedInput');
            }
            item.addEventListener('input',() => {
                if(item.value.length > 0) {
                    item.classList.add('focusedInput');
                } else {
                    item.classList.remove('focusedInput');
                }
            });
        });
    }
    // переключение в редакторе шаблона карт
    const sampleWalletBtns = document.querySelectorAll('.sample-wallets__btn');
    const sampleWalletWrappers = document.querySelectorAll('.sample__wrapper_wallet');

    function hideTabs() {
        sampleWalletWrappers.forEach(item => {
            item.classList.remove('active');
        });

        sampleWalletBtns.forEach(item => {
            item.classList.remove('active');
        });
    }
    function showTabs(i = 0) {
        sampleWalletWrappers[i].classList.add('active');
        sampleWalletBtns[i].classList.add('active');
    }
    window.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('sample-wallets__btn')) {
            sampleWalletBtns.forEach((item, i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });
});