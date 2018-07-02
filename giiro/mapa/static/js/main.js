(function () {
    var map, csrfCookie, loadMarkers, addMarker, finishAddMarker, removeMarker, dragMarker,
    onAddMarker;

    /**
     * Carrega todos os marcadores no mapa
     */
    loadMarkers =  function () {
        /**
         * Implemente aqui a função de carregar todos os marcadores ao carregar o mapa.
         */
        
        successAjax = function (response) {
            var responseJson;

            responseJson = JSON.parse(response);
            responseJson.map(
                (marker) => {
                    finishAddMarker(marker);
                }
            );
        };

        errorAjax = function (e) {
            window.alert('Erro ao carregar marcadores');
            console.log('Internal Error', e);
        };

        $.ajax({
            type: 'GET',
            url: '/load-markers/',
            headers: { 'X-CSRFToken': csrfCookie },
            success: function (response) {
                successAjax(response);
            },

            error: function (error) {
                errorAjax(error);
            }
        });
    };

    /**
     * Adiciona marcador no banco e em caso de sucesso ao mapa
     */
    addMarker = function (marker) {
        var data = {}, successAjax, errorAjax;

        data.lat = marker.latlng.lat;
        data.lng = marker.latlng.lng;
        
        successAjax = function (response) {
            var responseJson;

            responseJson = JSON.parse(response);
            finishAddMarker(responseJson);
        };

        errorAjax = function (e) {
            window.alert('Erro ao adicionar marcador');
            console.log('Internal Error', e);
        };

        $.ajax({
            type: 'POST',
            url: '/add-marker/',
            headers: { 'X-CSRFToken': csrfCookie },
            data: data,
            success: function (response) {
                successAjax(response);
            },

            error: function (error) {
                errorAjax(error);
            }
        });
    };

    /**
     * Adiciona marcador no mapa
     */
    finishAddMarker = function (data) {
        var marker, lat, lng, buttonHTML;

        lat = data.lat;
        lng = data.lng;

        marker = L.marker([lat, lng], { draggable: true, id: data.id }).addTo(map);

        buttonHTML = $('<a class="btn-floating red"><i class="material-icons">delete</i></a>').click(removeMarker.bind(this, marker))[0];

        marker.bindPopup(buttonHTML);
        marker.on('dragend', dragMarker.bind(this));
    };

    /**
     * Remove marcador do mapa
     */
    removeMarker = function (marker) {
        /**
         * Implemente aqui a função de remover o marcador do mapa e do banco.
         */
        var data = {'pk': marker.options.id};

        successAjax = function (response) {
            map.removeLayer(response); 
        };

        errorAjax = function (e) {
            window.alert('Erro ao remover marcador');
            console.log('Internal Error', e);
        };
        
        $.ajax({
            type: 'POST',
            url: '/remove-marker/',
            headers: { 'X-CSRFToken': csrfCookie },
            data: data,
            success: function (response) {
                successAjax(marker);
            },

            error: function (error) {
                errorAjax(error);
            }
        });
    };

    /**
     * Move marcador no mapa
     */
    dragMarker = function (marker) {
        /**
         * Implemente aqui a função de mover o marcador no mapa e no banco.
         */
        var data = {}, successAjax, errorAjax;

        var pk =  marker.target.options.id;
        var position = marker.target.getLatLng();

        data.pk = pk;
        data.lat = position.lat;
        data.lng = position.lng;

        successAjax = function (response) {
            console.log('Passou do update');
        };

        errorAjax = function (e) {
            window.alert('Erro ao atualizar marcador');
            console.log('Internal Error', e);
        };
        
        $.ajax({
            type: 'POST',
            url: '/update-marker/',
            headers: { 'X-CSRFToken': csrfCookie },
            data: data,
            success: function (response) {
                successAjax(marker);
            },

            error: function (error) {
                errorAjax(error);
            }
        });
    };

    refreshCookie = function () {
        $.cookie('my-zoom', map._zoom);
        $.cookie('my-lat', map._animateToCenter.lat);
        $.cookie('my-lng', map._animateToCenter.lng);
    };

    map = L.map('map');
    
    map.on('load', loadMarkers.bind(this));

    if( $.cookie('my-zoom') != undefined && $.cookie('my-lat') != undefined && $.cookie('my-lng') != undefined ){
        map.setView([$.cookie('my-lat'), $.cookie('my-lng')], $.cookie('my-zoom'))
    }else {
        map.setView([-12.9858, -38.4835], 13);
    }

    csrfCookie = $.cookie('csrftoken');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', addMarker.bind(this));
    map.on('zoomend', refreshCookie.bind(this));

    /**
     * Caso queira implementar a funcionalodade bônus, utilize o $.cookie para persistir
     * tanto a última posição quanto o último zoom.
     */

}(window));
