// переписать большую часть на классы для переопределения + разбить на модули, коммент остается пока работа по рефакторингу не завершена
'use strict'
import sw2 from './modules/sw2'
window.addEventListener('DOMContentLoaded',() => {
    sw2();
    // настройка инпутов
    const inputs = document.querySelectorAll('input[type="text"]');
    const textAreas = document.querySelectorAll('textarea')
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
    if(textAreas) {
        textAreas.forEach((item,i) => {
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
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modalExitBtns = document.querySelectorAll('.modal-exit');
    const certificateAppleForms = document.querySelectorAll('.modal__certificate-inner');

    
    
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
                    if(certificateAppleForms) {
                        certificateAppleForms.forEach((forma,j) => {
                            if(forma.classList.contains('modal__certificate-change')) {
                                forma.classList.remove('active');
                            } else {
                                forma.classList.add('active');
                            }
                        })
                    }
                });
            });
            
            
        });

        modals.forEach((modal,i) => {
            modal.addEventListener('click',(e) => {
                if(e.target === modal) {
                    modal.classList.remove('active');
                    if(certificateAppleForms) {
                        certificateAppleForms.forEach((forma,j) => {
                            if(forma.classList.contains('modal__certificate-change')) {
                                forma.classList.remove('active');
                            } else {
                                forma.classList.add('active');
                            }
                        })
                    }
                }
            });
        })
    }
    // variable settings
    const variableWrapperTr = document.querySelectorAll('.table-row_variables_items');

    if(variableWrapperTr) {
        variableWrapperTr.forEach((item,i) => {
            item.addEventListener('click',(e) => {
                const target = e.target;
                if(target.classList.contains('variableModal-settings') || target.parentNode.classList.contains('variables-settings')) {
                    let variableName = item.querySelector('.variable-name').value;
                    let variableDefaultValue = item.querySelector('.variable-defaultValue').innerText;
                    let variableDescription = item.querySelector('.variable-description').innerText;
                    
                    modals.forEach((modal,j) => {
                        if(modal.classList.contains('variableModal-settings')) {
                            let variableNameInput = modal.querySelector('#variableNameInput');
                            let variableDefaultValueInput = modal.querySelector('#variableDefaultValueInput');
                            let variableDescriptionInput = modal.querySelector('#variableDescriptionInput');
                            variableNameInput.value = variableName;
                            variableDefaultValueInput.value = variableDefaultValue;
                            variableDescriptionInput.value = variableDescription;
                            modal.classList.add('active');
                        }
                    });
                }
            });
        });
    }
    // copyBtn api
    const apiInputWrapper = document.querySelectorAll('.api__keys-wrapper')
    // const copyBtnApi = document.querySelectorAll('.copy-btn__keys');
    if(apiInputWrapper) {
        apiInputWrapper.forEach((item,i) => {
            item.addEventListener('click',(e) => {
                const target = e.target;
                if(target.classList.contains('copy-btn__keys') || target.parentNode.classList.contains('copy-btn__keys')) {
                    let input = item.querySelector('input');
                    input.select()
                    document.execCommand("copy");
                    alert('Скопировано');
                }
            });
        });
    };
    // copyBtn variables
    const variablesWrapper = document.querySelectorAll('.table-row_variables_items')
    if(variablesWrapper) {
        variablesWrapper.forEach((item,i) => {
            item.addEventListener('click',(e) => {
                const target = e.target;
                if(target.classList.contains('variables-copy') || target.parentNode.classList.contains('variables-copy')) {
                    let name = item.querySelector('.variable-name');
                    name.select()
                    document.execCommand("copy");
                    alert('Скопировано');
                }
            });
        });
    };
    // integration form
    const optionIntegration = document.querySelector('.form__verification-select');
    const integrationTypeInput = document.querySelector('#other-input')
    if(optionIntegration) {
        optionIntegration.addEventListener('change',() => {
            if(optionIntegration.value == 'other') {
                integrationTypeInput.style.display = 'flex'
            } else {
                integrationTypeInput.style.display = 'none'
            }
        });
    }
});