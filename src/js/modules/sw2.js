import Swal from 'sweetalert2'
import axios from 'axios';

function sw2() {
    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.withCredentials = true
    // попап выйти с устройств
    const exitDevice = document.querySelector('.general-item__devices');
    if(exitDevice) {
        exitDevice.addEventListener('click', (e)=> {
            Swal.fire({
                title: 'Подтверждение',
                html:
                '<p>Вы действительно хотите завершить все другие сеансы?<p/>',
                showCancelButton: true,
                confirmButtonText: 'Продолжить',
                cancelButtonText: 'Отмена',
                buttonsStyling: false,
                customClass: {
                  actions: 'popup-actions',
                  cancelButton: 'button is-light',
                  confirmButton: 'button is-link',
                }
              }).then((result) => {
                if (result.isConfirmed) {
                // выйти с устройств конфирм
                } else if (result.isDenied) {
                
                }
              })
        });
    }
    // попап смена Apple Wallet 
    const certificateAppleChangeBtn = document.querySelector('#certificateChange');
    
    if(certificateAppleChangeBtn) {
        certificateAppleChangeBtn.addEventListener('click',(e) => {
            Swal.fire({
                title: 'Замена сертификата',
                html:
                '<p>При загрузке нового сертификата, старый будет удален<p/>'+
                '<p>Вы уверены, что хотите загрузить новый сертификат?<p/>',
                showCancelButton: true,
                confirmButtonText: 'Завершить',
                cancelButtonText: 'Отмена',
                buttonsStyling: false,
                customClass: {
                  actions: 'popup-actions',
                  cancelButton: 'button is-light',
                  confirmButton: 'button is-link',
                }
              }).then((result) => {
                if (result.isConfirmed) {
                const certificateAppleForms = document.querySelectorAll('.modal__certificate-inner');
                certificateAppleForms.forEach((item,i) => {
                    if(item.classList.contains('modal__certificate-info')) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                    }
                })
                } else if (result.isDenied) {
                
                }
              })
        });
    }
    const accessesNewBtn = document.querySelector('.accesses__wrapper-new');
    function createAccesses(emailValue) {
      const tbodyWrapper = document.querySelector('.table-item_accesses tbody')
      let trNew = document.createElement('tr');
      
      for(let i = 0; i <= 5; i++) {
        let arrayText = [`${emailValue}`, '','—','—', 'Ожидает приглашения ', '']
        let thNew = document.createElement('th');
        thNew.classList.add('table-column');
        thNew.classList.add('table-column_accesses');
        thNew.classList.add('table-column_accesses_accounts');
        thNew.classList.add('table-column_accesses_accounts_news');
        thNew.classList.add('table-column_accesses_accounts_news_btnd');
        thNew.innerText = arrayText[i]
        trNew.appendChild(thNew);
      }

      trNew.classList.add('table-row');
      trNew.classList.add('table-row_accesses');
      trNew.classList.add('table-row_accesses_new');
      tbodyWrapper.appendChild(trNew);
      
      let arrayTr = document.querySelectorAll('.table-row_accesses_new');
      
      arrayTr.forEach((item,i) => {
        let arrayTh = item.querySelectorAll('.table-column_accesses_accounts_news_btnd');
        arrayTh.forEach((item,i) => {
          if(i == 1) {
            let thDeleteBtn = document.createElement('button');
            let thDeleteImg = document.createElement('img');
            item.classList.remove('table-column_accesses_accounts_news');
            thDeleteBtn.classList.add('accesses__delete-btn');
            thDeleteImg.src = 'assets/icons/korzina.svg'
            thDeleteBtn.appendChild(thDeleteImg);
            item.appendChild(thDeleteBtn);
            item.classList.remove('table-column_accesses_accounts_news_btnd');
          } else {
            item.classList.remove('table-column_accesses_accounts_news_btnd');
          }
        });
      });
    }
    if(accessesNewBtn) {
      accessesNewBtn.addEventListener('click',(e) => {
        let accessesUrl = window.location.href;
        Swal.fire({
          title: 'Добавить пользователя',
          input: 'email',
          inputValue: '',
          inputPlaceholder: 'Введите email',
          showCancelButton: true,
          confirmButtonText: 'Отправить',
          cancelButtonText: 'Отмена',
          buttonsStyling: false,
          customClass: {
            actions: 'popup-actions',
            cancelButton: 'button is-light',
            confirmButton: 'button is-link',
            input: 'swal2-input input',
          },
          inputValidator: (value) => {
            if (!value) {
              return 'Неправильный email'
            }
          }
          }).then((result) => {
            if (result.isConfirmed) {
              // createAccesses(result.value);
              let formData = result.value;
              console.log(formData);
              axios({
                method: 'post',
                url: `${accessesUrl}`,
                headers: {},
                data: formData
              }).then((response) => {
                console.log(response);
              }).catch((error) => {
                console.log(error);
              });
            } else if (result.isDenied) {
            
            }
          });
      });
    }
    const tbodyAccesses = document.querySelector('.table-item_accesses tbody');
    if(tbodyAccesses) {
        tbodyAccesses.addEventListener('click',(e) => {
            if(e.target.classList.contains('accesses__delete-btn') || e.target.parentNode.classList.contains('accesses__delete-btn')) {
                if(e.target.closest('.table-row_accesses_new')){
                  let tr = e.target.closest('.table-row_accesses_new')
                  Swal.fire({
                    title: 'Подтверждение',
                    html:
                  '<p>Пользователь awd@mail.ru будет удалён и потеряет доступ к кабинету.<p/>',
                    showCancelButton: true,
                    confirmButtonText: 'Отправить',
                    cancelButtonText: 'Отмена',
                    buttonsStyling: false,
                    customClass: {
                      actions: 'popup-actions',
                      cancelButton: 'button is-light',
                      confirmButton: 'button is-link',
                    },
                  }).then((result) => {
                    if (result.isConfirmed) {
                      tr.remove();
                      // e.target.closest('.table-row_accesses_new').remove();
                    } else if (result.isDenied) {
                    
                    }
                  })
                }
            }
        });
    }
}
export default sw2;