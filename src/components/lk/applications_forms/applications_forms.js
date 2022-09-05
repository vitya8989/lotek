const applicationFormObjectInfoBtn = document.querySelector('.application_form__object_info_btn');
const applicationFormObjectInfo = document.querySelector('.application_form__object_info');
const jsApplicationFormBlock = document.querySelector('.js_application_form_block');
if (applicationFormObjectInfo) {
    const applicationFormObjectInfoEmpty = applicationFormObjectInfo.cloneNode(true);
    applicationFormObjectInfoEmpty.classList.add('this--mt_30');
    const applicationFormObjectInfoEmptyCross = document.createElement('span');
    applicationFormObjectInfoEmptyCross.classList.add('application_form__object_info_cross');
    applicationFormObjectInfoEmpty.append(applicationFormObjectInfoEmptyCross);

    applicationFormObjectInfoBtn.onclick = (e) => {
        e.preventDefault();
        let newObjectInfo = applicationFormObjectInfoEmpty.cloneNode(true);
        jsApplicationFormBlock.insertBefore(newObjectInfo, applicationFormObjectInfoBtn);
        let newObjectInfoCross = newObjectInfo.querySelector('.application_form__object_info_cross');
        newObjectInfoCross.onclick = () => {
            newObjectInfo.remove();
        }
    }
}