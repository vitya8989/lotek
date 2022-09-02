const accordionsHead = document.querySelectorAll('.application__accordion_head');
const accordionsBody = document.querySelectorAll('.application__accordion_body');

if (accordionsHead) {
    for (let i = 0; i < accordionsBody.length; i++) {
        if (accordionsBody[i].classList.contains('open')) {
            accordionsBody[i].style.maxHeight = `${accordionsBody[i].scrollHeight + 10000}px`;
        }
    }
    for (let i = 0; i < accordionsHead.length; i++) {
        accordionsHead[i].onclick = () => {
            if (accordionsHead[i].nextElementSibling.classList.contains('open')) {
                accordionsHead[i].classList.remove('active');
                accordionsHead[i].nextElementSibling.classList.remove('open');
                accordionsHead[i].nextElementSibling.style.maxHeight = '0';
            } else {
                accordionsHead[i].classList.add('active');
                accordionsHead[i].nextElementSibling.classList.add('open');
                accordionsHead[i].nextElementSibling.style.maxHeight = `${accordionsHead[i].nextElementSibling.scrollHeight + 10000}px`;
            }
        }
    }
}



const applicationAdminBtnsBtn = document.querySelectorAll('.application__admin_btns_btn');
const applicationAdminPopup = document.querySelector('.application__admin_popup');

if (applicationAdminPopup) {
    const applicationAdminPopupContents = applicationAdminPopup.querySelectorAll('.application__admin_popup_content');
    const applicationAdminPopupCross = applicationAdminPopup.querySelector('.application__admin_popup_cross');

    for (let i = 0; i < applicationAdminBtnsBtn.length; i++) {
        applicationAdminBtnsBtn[i].onclick = () => {
            applicationAdminPopup.classList.add('open');
            for (let j = 0; j < applicationAdminPopupContents.length; j++) {
                if (applicationAdminBtnsBtn[i].dataset.value === applicationAdminPopupContents[j].dataset.value) {
                    applicationAdminPopupContents[j].classList.add('active');
                }
            }
        }
    }

    applicationAdminPopup.onclick = (e) => {
        if (!e.target.closest('.application__admin_popup_body')) {
            applicationAdminPopup.classList.remove('open');
            for (let i = 0; i < applicationAdminPopupContents.length; i++) {
                applicationAdminPopupContents[i].classList.remove('active');
            }
        }
    }
    applicationAdminPopupCross.onclick = () => {
        applicationAdminPopup.classList.remove('open');
        for (let i = 0; i < applicationAdminPopupContents.length; i++) {
            applicationAdminPopupContents[i].classList.remove('active');
        }
    }
}

const applicationAbortBtn = document.querySelector('.application__abort_btn');

if (applicationAbortBtn) {
    const applicationDelPopup = document.querySelector('.application__del_popup');
    const applicationDelPopupCross = applicationDelPopup.querySelector('.application__del_popup_cross');
    applicationAbortBtn.onclick = () => {
        applicationDelPopup.classList.add('open');
    }

    applicationDelPopup.onclick = (e) => {
        if (!e.target.closest('.application__del_popup_body')) {
            applicationDelPopup.classList.remove('open');
        }
    }

    applicationDelPopupCross.onclick = () => {
        applicationDelPopup.classList.remove('open');
    }
}