const map = document.getElementById('map');

if (map) {
    let scriptMap = document.createElement('script');
    scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
    setTimeout(() => document.head.append(scriptMap), 0);
    scriptMap.onload = function () {
        ymaps.ready(init);
    };

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.880216, 30.426208],
            zoom: 16,
            controls: []
        });
        myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                top: '40px',
                right: '20px'
            }
        });
        var myPlacemark = new ymaps.Placemark([59.880216, 30.426208], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/icon.png',
            iconImageSize: [32, 44],
            iconImageOffset: [-20, -40]
        });
        myMap.geoObjects.add(myPlacemark);

        const mapLink = document.querySelector('.contacts_page__map_link');

        mapLink.addEventListener('click', (e) => {
            e.preventDefault();
            myMap.setCenter([59.880216, 30.426208], 16, { checkZoomRange: true });
        });
    }
}
