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
            item.addEventListener('input',(e) => {
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
    // const sampleWalletBtns = document.querySelectorAll('.sample-wallets__btn');
    // const sampleWalletWrappers = document.querySelectorAll('.sample__wrapper_wallet');

    // function hideTabs() {
    //     sampleWalletWrappers.forEach(item => {
    //         item.classList.remove('active');
    //     });

    //     sampleWalletBtns.forEach(item => {
    //         item.classList.remove('active');
    //     });
    // }
    // function showTabs(i = 0) {
    //     sampleWalletWrappers[i].classList.add('active');
    //     sampleWalletBtns[i].classList.add('active');
    // }
    // window.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if(target && target.classList.contains('sample-wallets__btn')) {
    //         sampleWalletBtns.forEach((item, i) => {
    //             if (target == item) {
    //                 hideTabs();
    //                 showTabs(i);
    //             }
    //         });
    //     }
    // });
    // переключение на форму настроек
    const sampleWalletSelect = document.querySelector('.sample__settings-item_select');
    const sampleWalletLi = document.querySelectorAll('.sample__settings-item_select li');
    const sampleWalletSettingsForm = document.querySelector('.sample__settings-item_form');
    const sampleWalletSettingsLi = document.querySelectorAll('.sample__settings-item_form li');
    const returnBtn = document.querySelectorAll('.settings-exit');

    if(sampleWalletLi) {
        sampleWalletLi.forEach((item,i) => {
            item.addEventListener('click', () => {
                sampleWalletSelect.classList.remove('active');
                sampleWalletSettingsForm.classList.add('active');
                sampleWalletSettingsLi[i].classList.add('active');
                console.log(i);
            });
        })
    }
    if(returnBtn) {
        returnBtn.forEach((btn,j) => {
            btn.addEventListener('click',(e) => {
                sampleWalletSettingsLi.forEach((item,i) => {
                    item.classList.remove('active');
                });
                sampleWalletSettingsForm.classList.remove('active');
                sampleWalletSelect.classList.add('active');
            });
            
        });
    }
    
    
    // window.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if(target && target.classList.contains('sample-wallets__btn')) {
    //         sampleWalletBtns.forEach((item, i) => {
    //             if (target == item) {
    //                 hideTabs();
    //                 showTabs(i);
    //             }
    //         });
    //     }
    // });
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
    //integration menu
    const integrationContent = document.querySelector('.integration-content')
    const integrationButton = document.querySelector('#integration-btns__integration');
    const limitsApiButton = document.querySelector('#integration-btns__limitsAPI');
    if(limitsApiButton) {
        limitsApiButton.addEventListener('click', ()=>{
            integrationContent.classList.remove('open')
            limitsApiButton.classList.add('active')
            integrationButton.classList.remove('active')
        });
    }
    if(integrationButton) {
        integrationButton.addEventListener('click', ()=>{
            integrationContent.classList.add('open')
            integrationButton.classList.add('active')
            limitsApiButton.classList.remove('active')
        });
    }

    

    //intergration select
    const selectItems = document.querySelectorAll('.select__item')
    const selectWrapper = document.querySelector('.select__wrapper') ;
    const selectButton = document.querySelector('.select__button');
    const selectIcon = document.querySelector('.select__icon')
    const integrationConfigure = document.querySelector('.integration-configure')
    const selectScrollbar = document.querySelector('.select__scrollbar')


    if(selectItems) {
        selectItems.forEach((item)=>{
            item.addEventListener('click', ()=>{
                //Пока просто показывают блок 'Свойства'
                integrationConfigure.classList.add('open')
                selectWrapper.classList.add('hide')
                selectIcon.classList.remove('active');
                selectButton.classList.remove('active')
            })
        })
    }
    
    if(selectButton) {
        selectButton.addEventListener('click', (e)=>{
            if(selectWrapper.classList.contains('hide')) {
                selectWrapper.classList.remove('hide');
                selectIcon.classList.add('active');
                selectButton.classList.add('active')
            }
            else {
                selectWrapper.classList.add('hide')
                selectIcon.classList.remove('active');
                selectButton.classList.remove('active')
            }
        })
    }
    if(selectWrapper) {
        //let scrollPosition = 0
        selectWrapper.addEventListener('wheel', (e)=>{
        /*  const scroll = e.deltaY;
          
          if(scroll < 0 && scrollPosition >= 30) {
              scrollPosition = scrollPosition - 30
              console.log(scrollPosition)
              selectScrollbar.style.top = scrollPosition +'px'
          }
          else if (scrollPosition <= 90){
              scrollPosition = scrollPosition + 30
              selectScrollbar.style.top =scrollPosition +'px'
          }     */
      })
    }

    //finance page
    //inputs 
    const inputForRefLink = document.querySelector('#ref_link')
    const inputTarifForPay = document.querySelector('#sum_for_pay')
    const inputFinancePayer = document.querySelector('#finance-payer')

    //buttons
    const shortcats = document.querySelectorAll('.finance-block__shortcat')
    const buttonsTarif = document.querySelectorAll('.finance-block__button')
    const buttonFinancePayOnline = document.querySelector('#button-finance-pay-online')
    const buttonFinanceIssueAnInvoice = document.querySelector('#button-finance-issue-an-invoice')
    const buttonsPopupCancel = document.querySelectorAll('.popup-button-cancel')
    const buttonsPopupExit = document.querySelectorAll('.popup__header-exit')
    const buttonCopyReferralLink = document.querySelector('.finance-block-referall__icon')

    //message validation
    const messageRequired = document.querySelector('.input-message__required')

    //popups
    const popupFinancePayOnline = document.querySelector('.popup_pay_online')
    const popupIssueAnInvoice = document.querySelector('.popup_issue_an_invoice')

    if(inputFinancePayer)
    {
        inputFinancePayer.addEventListener('input', (e)=>{
            if(e.target.value.length===0){
                inputFinancePayer.classList.remove('focusedInput') //Добавляю вручную так как не срабатывает основная
            }
            else {
                inputFinancePayer.classList.add('focusedInput')
            }
        })
    }

    if(inputForRefLink){
        buttonCopyReferralLink.addEventListener('click', (e)=>{
            navigator.clipboard.writeText(inputForRefLink.value);
        })        
    }

    if(buttonFinancePayOnline)
    {
        buttonFinancePayOnline.addEventListener('click', (e)=>{
            popupFinancePayOnline.classList.add('open')
        })

    }

    if(buttonFinanceIssueAnInvoice)
    {
        buttonFinanceIssueAnInvoice.addEventListener('click', (e)=>{
            popupIssueAnInvoice.classList.add('open')
        })
    }

    if(buttonsPopupExit)
    {
        buttonsPopupExit.forEach((button)=>{ 
            button.addEventListener('click', ()=>{
                popupFinancePayOnline.classList.remove('open')
                popupIssueAnInvoice.classList.remove('open')
                })
        })   
    }

    if(buttonsPopupCancel)
    {
        buttonsPopupCancel.forEach((button)=>{ 
            button.addEventListener('click', ()=>{
                popupFinancePayOnline.classList.remove('open')
                popupIssueAnInvoice.classList.remove('open')
                })
        })   
    }

    if(inputTarifForPay){
        inputTarifForPay.addEventListener('input',(e)=>{
            console.log(e.target)
            if (e.target.value.match(/[^0-9]/g)) {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }           
            if(e.target.value.length === 0){
                e.target.classList.add('required')
                e.target.classList.remove('focusedInput')
                messageRequired.classList.add('active')
                buttonsTarif.forEach(button=> button.classList.add('disabled'))
            }
            else{
                e.target.classList.remove('required')
                e.target.classList.add('focusedInput')
                messageRequired.classList.remove('active')
                buttonsTarif.forEach(button=> button.classList.remove('disabled'))
            }
        })
    }

    if(shortcats){
        shortcats.forEach((shortcat)=>{
            shortcat.addEventListener('click', (e)=>{
                shortcats.forEach((item)=>{
                    item.classList.remove('active')
                })
            e.target.classList.add('active')
            })
        })
    }



    
    

