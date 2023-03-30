'use strict'
window.addEventListener('DOMContentLoaded',() => {
    // настройка инпутов
    const inputs = document.querySelectorAll('input[type="text"]');
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
    // modalki
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.general-item__btn');
    const modalExitBtns = document.querySelectorAll('.modal-exit');

    
    if(modalBtns) {
        modalBtns.forEach((btn,i) => {
            btn.addEventListener('click', (e) => {
                modals.forEach((modal,j) => {
                    if(btn.id.slice(0, -3) === modal.id.slice(0, -5)) {
                        modal.classList.add('active');
                    }
                });
            });
        });
        modalExitBtns.forEach((item,i) => {
            item.addEventListener('click',(e) => {
                modals.forEach((modal,j) => {
                    modal.classList.remove('active');
                });
            });
        });
        modals.forEach((modal,i) => {
            modal.addEventListener('click',(e) => {
                if(e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        })
    }

    

    // window.addEventListener('click',(e) => {
    //     const target = e.target;

    //     if(target.id.slice(0, -3)) {
    //         modalBtns.forEach((btn,i) => {
    //             modals.forEach((modal,j) => {
    //                 if(btn.id.slice(0, -3) === modal.id.slice(0, -5)) {
    //                     modal.classList.add('active');
    //                 }
    //             });
    //         });
    //     }
    //     if(target.classList.contains('modal__header-exit') || target.classList.contains('modal__footer-btn_exit') || target.classList.contains('modal active')) {
    //         console.log(target);
    //     }
        
        
    // });
});