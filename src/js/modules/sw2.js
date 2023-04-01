import Swal from 'sweetalert2'
function sw2() {
    // попап выйти с устройств
    const exitDevice = document.querySelector('.general-item__devices');
    if(exitDevice) {
        exitDevice.addEventListener('click', (e)=> {
            Swal.fire({
                title: 'Подтверждение',
                html:
                '<p>Вы действительно хотите завершить все другие сеансы?<p/>',
                content: '',
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

                content: '',
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
    
}
export default sw2;