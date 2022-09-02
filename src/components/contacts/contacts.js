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
            center: [59.880193, 30.428826],
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

        const MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="contacts_map__balloon-wrap">'+
            '<a class="contacts_map__close" href="#"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1 1L7.5 7.5" stroke="white"/>\n' +
            '<path d="M1 7.5L7.5 1" stroke="white"/>\n' +
            '</svg></a>' +
            '<div class="contacts_map__content_balloon">' +
            '$[[options.contentLayout observeSize]]' +
            '</div>' +
            '</div>', {
                build: function() {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.contacts_map__balloon-wrap', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.contacts_map__close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function() {
                    this._$element.find('.contacts_map__close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function() {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if (!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                /**
                 * Сдвигаем балун чтобы "хвостик" указывал на точку привязки.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function() {
                    this._$element.css({
                        left: 25,
                        top: -75
                    });
                },

                /**
                 * Закрывает баллун при клике на крестик, кидая событие "userclose" на макете.
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function(e) {
                    e.preventDefault();

                    this.events.fire('userclose');
                },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see http://api.yandex.ru/maps/doc/jsapi/2.x/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов
                 * шаблона относительно точки привязки.
                 */
                getShape: function() {
                    if (!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    const position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top], [
                            position.left + this._$element[0].offsetWidth,
                            // eslint-disable-next-line max-len
                            position.top + this._$element[0].offsetHeight + this._$element.find('.contacts_map__arrow')[0].offsetHeight
                        ]
                    ]));
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function(element) {
                    return element && element[0] && element.find('.b_contacts_map__arrow')[0];
                }
            });
        const MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="contacts_map__title_balloon">Головной офис АО «ЛОТЭК»</div>'+
            '<div class="contacts_map__balloon-body">192171, Санкт-Петербург, ул. Седова, д.57</div>'
        );

        var myPlacemark = new ymaps.Placemark([59.880216, 30.426208], {
            balloonHeader: $(this).data('name'),
            balloonContent: $(this).data('address')},
        {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/icon.png',
            iconImageSize: [32, 44],
            iconImageOffset: [-20, -40],
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false
        });
        myMap.geoObjects.add(myPlacemark);
    }
}
