const applicationFormObjectInfoBtn = document.querySelector('.application_form__object_info_btn');
const applicationFormObjectInfo = document.querySelector('.application_form__object_info');
const jsApplicationFormBlock = document.querySelector('.js_application_form_block');
if (applicationFormObjectInfo) {
    const applicationFormObjectInfoEmpty = applicationFormObjectInfo.cloneNode(true);

    applicationFormObjectInfoBtn.onclick = (e) => {
        e.preventDefault();
        let newObjectInfo = applicationFormObjectInfoEmpty.cloneNode(true);
        jsApplicationFormBlock.insertBefore(newObjectInfo, applicationFormObjectInfoBtn);
    }
}