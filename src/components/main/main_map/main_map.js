const mapPoints = document.querySelectorAll('.main_map__point');
const mapContacts = document.querySelectorAll('.main_map__contacts');
if (mapPoints.length > 0 && mapContacts.length > 0) {
    for (let i = 0; i < mapPoints.length; i++) {
        mapPoints[i].onclick = function () {
            if (!mapPoints[i].classList.contains('active')) {
                for (let j = 0; j < mapPoints.length; j++) {
                    mapPoints[j].classList.remove('active');
                    mapContacts[j].classList.remove('active');

                    if (this.dataset.index === mapContacts[j].dataset.index) {
                        mapContacts[j].classList.add('active');
                    }
                }
                this.classList.add('active');
            }
        }
    }
}
