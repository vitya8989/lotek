const historyWaterIn = document.querySelectorAll('.history__water_in');
const historyWaterOut = document.querySelectorAll('.history__water_out');
const historyWarm = document.querySelectorAll('.history__warm');
const historyPopup = document.querySelector('.history__popup');

if (historyPopup) {
    const historyPopupCross = historyPopup.querySelector('.history__popup_cross');

    const historyWaterInContent = historyPopup.querySelector('.history__water_in_content');
    const historyPopupStatusProcessWaterIn = historyWaterInContent.querySelector('.history__popup_status_process');
    const historyPopupStatusDoneWaterIn = historyWaterInContent.querySelector('.history__popup_status_done');

    const historyWaterOutContent = historyPopup.querySelector('.history__water_out_content');
    const historyPopupStatusProcessWaterOut = historyWaterOutContent.querySelector('.history__popup_status_process');
    const historyPopupStatusDoneWaterOut = historyWaterOutContent.querySelector('.history__popup_status_done');

    const historyWarmContent = historyPopup.querySelector('.history__warm_content');
    const historyPopupStatusProcessWarm = historyWarmContent.querySelector('.history__popup_status_process');
    const historyPopupStatusDoneWarm = historyWarmContent.querySelector('.history__popup_status_done');

    for (let i = 0; i < historyWaterIn.length; i++) {
        historyWaterIn[i].onclick = () => {
            historyPopup.classList.add('open');
            historyWaterInContent.classList.add('active');
            if (historyWaterIn[i].classList.contains('this--process')) {
                historyPopupStatusProcessWaterIn.classList.add('active');
            } else {
                historyPopupStatusDoneWaterIn.classList.add('active');
            }
        }
    }

    for (let i = 0; i < historyWaterOut.length; i++) {
        historyWaterOut[i].onclick = () => {
            historyPopup.classList.add('open');
            historyWaterOutContent.classList.add('active');
            if (historyWaterOut[i].classList.contains('this--process')) {
                historyPopupStatusProcessWaterOut.classList.add('active');
            } else {
                historyPopupStatusDoneWaterOut.classList.add('active');
            }
        }
    }

    for (let i = 0; i < historyWarm.length; i++) {
        historyWarm[i].onclick = () => {
            historyPopup.classList.add('open');
            historyWarmContent.classList.add('active');
            if (historyWarm[i].classList.contains('this--process')) {
                historyPopupStatusProcessWarm.classList.add('active');
            } else {
                historyPopupStatusDoneWarm.classList.add('active');
            }
        }
    }



    historyPopupCross.onclick = () => {
        historyPopup.classList.remove('open');

        historyWaterInContent.classList.remove('active');
        historyPopupStatusProcessWaterIn.classList.remove('active');
        historyPopupStatusDoneWaterIn.classList.remove('active');

        historyWaterOutContent.classList.remove('active');
        historyPopupStatusProcessWaterOut.classList.remove('active');
        historyPopupStatusDoneWaterOut.classList.remove('active');

        historyWarmContent.classList.remove('active');
        historyPopupStatusProcessWarm.classList.remove('active');
        historyPopupStatusDoneWarm.classList.remove('active');
    }

    historyPopup.onclick = (e) => {
        if (!e.target.closest('.history__popup_body')) {
            historyPopup.classList.remove('open');

            historyWaterInContent.classList.remove('active');
            historyPopupStatusProcessWaterIn.classList.remove('active');
            historyPopupStatusDoneWaterIn.classList.remove('active');

            historyWaterOutContent.classList.remove('active');
            historyPopupStatusProcessWaterOut.classList.remove('active');
            historyPopupStatusDoneWaterOut.classList.remove('active');

            historyWarmContent.classList.remove('active');
            historyPopupStatusProcessWarm.classList.remove('active');
            historyPopupStatusDoneWarm.classList.remove('active');
        }
    }
}