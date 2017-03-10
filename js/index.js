(function() {

    var app = {

        // carte interactive Carole, Julien
        initmap: function() {
            var map = new L.Map('cdf_map', { fullscreenControl: true });
            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
            var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

            map.setView(new L.LatLng(43.1083, 0.7234), 16);
            map.addLayer(osm);
            map.scrollWheelZoom.disable();
            map.on('fullscreenchange', function() {
                if (map.isFullscreen()) {
                    return;
                } else {
                    map.remove();
                    app.initmap();
                }
            });

            //button pour ouvrir la gallerie sur la map
            L.easyButton('gallerie', function(btn, map) {
                console.log('ok');
                $("button").click(function() {
                    $("#cdf_map").remove();
                    $("#gallery").removeClass('hide');
                    app.initgallery();
                });
            }).addTo(map);

            //circuit ocre
            var Ocre = function(lat, long) {
                this.lat = lat;
                this.long = long;
                this.size = 5;
                this.color = '#FF5200';
                this.fillColor = '#FF5200';
                this.fillOpacity = 1;
            };
            var m1Ocre = new Ocre(43.108053, 0.725208);
            m1Ocre = L.circle([m1Ocre.lat, m1Ocre.long], m1Ocre.size, { color: m1Ocre.color, fillColor: m1Ocre.fillColor, fillOpacity: m1Ocre.fillOpacity }).addTo(map);

            var m2Ocre = new Ocre(43.107483, 0.724824);
            m2Ocre = L.circle([m2Ocre.lat, m2Ocre.long], m2Ocre.size, { color: m2Ocre.color, fillColor: m2Ocre.fillColor, fillOpacity: m2Ocre.fillOpacity }).addTo(map);

            var m3Ocre = new Ocre(43.107288, 0.724600);
            m3Ocre = L.circle([m3Ocre.lat, m3Ocre.long], m3Ocre.size, { color: m3Ocre.color, fillColor: m3Ocre.fillColor, fillOpacity: m3Ocre.fillOpacity }).addTo(map);

            var m4Ocre = new Ocre(43.107448, 0.725673);
            m4Ocre = L.circle([m4Ocre.lat, m4Ocre.long], m4Ocre.size, { color: m4Ocre.color, fillColor: m4Ocre.fillColor, fillOpacity: m4Ocre.fillOpacity }).addTo(map);

            var m5Ocre = new Ocre(43.107065, 0.725235);
            m5Ocre = L.circle([m5Ocre.lat, m5Ocre.long], m5Ocre.size, { color: m5Ocre.color, fillColor: m5Ocre.fillColor, fillOpacity: m5Ocre.fillOpacity }).addTo(map);

            var m6Ocre = new Ocre(43.107166, 0.725182);
            m6Ocre = L.circle([m6Ocre.lat, m6Ocre.long], m6Ocre.size, { color: m6Ocre.color, fillColor: m6Ocre.fillColor, fillOpacity: m6Ocre.fillOpacity }).addTo(map);

            var m7Ocre = new Ocre(43.107483, 0.725024);
            m7Ocre = L.circle([m7Ocre.lat, m7Ocre.long], m7Ocre.size, { color: m7Ocre.color, fillColor: m7Ocre.fillColor, fillOpacity: m7Ocre.fillOpacity }).addTo(map);

            var m8Ocre = new Ocre(43.106316, 0.720450);
            m8Ocre = L.circle([m8Ocre.lat, m8Ocre.long], m8Ocre.size, { color: m8Ocre.color, fillColor: m8Ocre.fillColor, fillOpacity: m8Ocre.fillOpacity }).addTo(map);

            var m9Ocre = new Ocre(43.106210, 0.720790);
            m9Ocre = L.circle([m9Ocre.lat, m9Ocre.long], m9Ocre.size, { color: m9Ocre.color, fillColor: m9Ocre.fillColor, fillOpacity: m9Ocre.fillOpacity }).addTo(map);

            var m10Ocre = new Ocre(43.106436, 0.719825);
            m10Ocre = L.circle([m10Ocre.lat, m10Ocre.long], m10Ocre.size, { color: m10Ocre.color, fillColor: m10Ocre.fillColor, fillOpacity: m10Ocre.fillOpacity }).addTo(map);

            var m11Ocre = new Ocre(43.107202, 0.722536);
            m11Ocre = L.circle([m11Ocre.lat, m11Ocre.long], m11Ocre.size, { color: m11Ocre.color, fillColor: m11Ocre.fillColor, fillOpacity: m11Ocre.fillOpacity }).addTo(map);

            var m12Ocre = new Ocre(43.108430, 0.723737);
            m12Ocre = L.circle([m12Ocre.lat, m12Ocre.long], m12Ocre.size, { color: m12Ocre.color, fillColor: m12Ocre.fillColor, fillOpacity: m12Ocre.fillOpacity }).addTo(map);

            var m13Ocre = new Ocre(43.109000, 0.724839);
            m13Ocre = L.circle([m13Ocre.lat, m13Ocre.long], m13Ocre.size, { color: m13Ocre.color, fillColor: m13Ocre.fillColor, fillOpacity: m13Ocre.fillOpacity }).addTo(map);




            //circuit vert clair
            /*var Vert = function(lat, long) {
                this.lat = lat;
                this.long = long;
                this.size = 5;
                this.color = '#32CD32';
                this.fillColor = '#32CD32';
                this.fillOpacity = 1;
            };
            var m1Vert = new Vert(43.108053, 0.725208);
            L.circle([m1Vert.lat, m1Vert.long], m1Vert.size, { color: m1Vert.color, fillColor: m1Vert.fillColor, fillOpacity: m1Vert.fillOpacity }).addTo(map);

            var m2Vert = new Vert(43.108053, 0.725208);
            L.circle([m2Vert.lat, m2Vert.long], m2Vert.size, { color: m2Vert.color, fillColor: m2Vert.fillColor, fillOpacity: m2Vert.fillOpacity }).addTo(map);

            var m3Vert = new Vert(43.108053, 0.725208);
            L.circle([m3Vert.lat, m3Vert.long], m3Vert.size, { color: m3Vert.color, fillColor: m3Vert.fillColor, fillOpacity: m3Vert.fillOpacity }).addTo(map);

            var m4Vert = new Vert(43.108053, 0.725208);
            L.circle([m4Vert.lat, m4Vert.long], m4Vert.size, { color: m4Vert.color, fillColor: m4Vert.fillColor, fillOpacity: m4Vert.fillOpacity }).addTo(map);   


            /*  A    var vert = L.circle ([43.108053, 0.725208], 5, {
                        color:'#32CD32',
                        fillColor:'#32CD32',
                        fillOpacity: 1
                    }).addTo(map);

                B    L.circle ([43.108053, 0.725208], 5, {
                        color:'#32CD32',
                        fillColor:'#32CD32',
                        fillOpacity: 1
                    }).addTo(map);

                C    L.circle ([43.108053, 0.725208], 5, {
                        color:'#32CD32',
                        fillColor:'#32CD32',
                        fillOpacity: 1
                    }).addTo(map);


                D    L.circle ([43.108053, 0.725208], 5, {
                        color:'#32CD32',
                        fillColor:'#32CD32',
                        fillOpacity: 1
                    }).addTo(map);*/



            //batiments officiels

            /*var Annexes = function(lat, long) {
                this.lat = lat;
                this.long = long;
                this.size = 5;
                this.color = '#32CD32';
                this.fillColor = '#32CD32';
                this.fillOpacity = 1;
            };
            var m1Annexes = new Annexes(43.108053, 0.725208);
            L.circle([m1Annexes.lat, m1Annexes.long], m1Annexes.size, { color: m1Annexes.color, fillColor: m1Annexes.fillColor, fillOpacity: m1Annexes.fillOpacity }).addTo(map);

            var m2Annexes = new Annexes(43.108053, 0.725208);
            L.circle([m2Annexes.lat, m2Annexes.long], m2Annexes.size, { color: m2Annexes.color, fillColor: m2Annexes.fillColor, fillOpacity: m2Annexes.fillOpacity }).addTo(map);

            var m3Annexes = new 3Annexes(43.108053, 0.725208);
            L.circle([m3Annexes.lat, m3Annexes.long], m3Annexes.size, { color: m3Annexes.color, fillColor: m3Annexes.fillColor, fillOpacity: m3Annexes.fillOpacity }).addTo(map);

            var m4Annexes = new Annexes(43.108053, 0.725208);
            L.circle([m4Annexes.lat, m4Annexes.long], m4Annexes.size, { color: m4Annexes.color, fillColor: m4Annexes.fillColor, fillOpacity: m4Annexes.fillOpacity }).addTo(map);

            var m5Annexes = new Annexes(43.108053, 0.725208);
            L.circle([m5Annexes.lat, m5Annexes.long], m5Annexes.size, { color: m5Annexes.color, fillColor: m5Annexes.fillColor, fillOpacity: m5Annexes.fillOpacity }).addTo(map);

            var m6Annexes = new Annexes(43.108053, 0.725208);
            L.circle([m6Annexes.lat, m6Annexes.long], m6Annexes.size, { color: m6Annexes.color, fillColor: m6Annexes.fillColor, fillOpacity: m6Annexes.fillOpacity }).addTo(map);*/



            /* 1 var annexes = L.circle([43.106970, 0.723584], 5, {
                   color: '#006400',
                   fillColor: '#006400',
                   fillOpacity: 1
               }).addTo(map);

               2    L.circle ([43.108053, 0.725208], 5, {
                       color:'#006400',
                       fillColor:'#006400',
                       fillOpacity: 1
                   }).addTo(map);

               3    L.circle ([43.108053, 0.725208], 5, {
                       color:'#006400',
                       fillColor:'#006400',
                       fillOpacity: 1
                   }).addTo(map);

               4    L.circle ([43.108053, 0.725208], 5, {
                       color:'#006400',
                       fillColor:'#006400',
                       fillOpacity: 1
                   }).addTo(map);

               5    L.circle ([43.108053, 0.725208], 5, {
                       color:'#006400',
                       fillColor:'#006400',
                       fillOpacity: 1
                   }).addTo(map);

               6    L.circle ([43.108053, 0.725208], 5, {
                       color:'#006400',
                       fillColor:'#006400',
                       fillOpacity: 1
                   }).addTo(map);*/




            $(m1Ocre).on("click", function() { //Julien
                console.log("OK!")
                m1Ocre.bindPopup("<h2>Hello world!</h2>" + "<br>" + '<img src="../images/1.JPG" width="200" height="150">' + '' + '<img src="../images/3.JPG" width="200" height="300">' +
                    "<br><p>I am a popup.</p>").openPopup();
            });


            // var circle = L.circle([43.108053, 0.725208]).addTo(map);
            // $(ocre).on("click", function() {
            //     console.log("OK!")
            //     ocre.bindPopup("<b>Hello world!</b><br><br>I am a popup.").openPopup();
            //     //(Placeholder.disable["()"])
            // });

        },
        // phototheque Odile, Aymeric

        // admin David

        init: function() {
            console.log("init ok");
            this.url = "../data/galerie.json";
            this.listener();
        },

        listener: function() {
            console.log("listener ok");
            this.getGalerie(app.url);
        },

        getGalerie: function(url) {
            console.log("getGalerie ok");
            $.ajax({
                url: url,
                success: this.read,
                error: function() {
                    if (err) {
                        console.log(err);
                    };
                }
            });
        },

        read: function(data) {
            console.log("read ok");
            for (i = 0; i < data.ocre.length; i++) {
                app.ocre(data.ocre[i]);
            };
            for (i = 0; i < data.vert.length; i++) {
                app.vert(data.vert[i]);
            };
            for (i = 0; i < data.annexes.length; i++) {
                app.annexes(data.annexes[i]);
            };
            for (i = 0; i < data.etoiles.length; i++) {
                app.etoiles(data.etoiles[i]);
            };
        },

        ocre: function(dataOcre) {
            console.log(dataOcre);
        },

        vert: function(dataVert) {
            console.log(dataVert);
        },


        annexes: function(dataAnnexes) {
            console.log(dataAnnexes);
        },

        etoiles: function(dataEtoiles) {
            console.log(dataEtoiles);
        },
        // unitegallery
        initgallery: function() {
            $("#gallery").unitegallery({

                //theme options:

                theme_gallery_padding: 200, //the horizontal padding of the gallery from the sides

                //gallery options:

                
                gallery_theme: "tiles", //choose gallery theme (if more then one themes includes)
                gallery_width: "60%", //gallery width
                gallery_background_color: "grey", //set custom background color. If not set it will be taken from css.

                //tiles options:

                tiles_type: "justified", //must option for the tiles - justified type
                tiles_justified_row_height: 60, //base row height of the justified type
                tiles_justified_space_between: 3, //space between the tiles justified type
                tiles_set_initial_height: true, //columns type related only
                tiles_enable_transition: true, //enable transition when screen width change

                tile_overlay_opacity: 0.4, //tile overlay opacity
                tile_overlay_color: "#000000", //tile overlay color

                tile_enable_image_effect: false, //enable tile image effect

                tile_enable_textpanel: true,
                tile_textpanel_title_text_align: "center",
                tile_textpanel_always_on: true,

                lightbox_textpanel_enable_description: true, //enable the description text
                lightbox_type: "compact", //compact / wide - lightbox type
                lightbox_overlay_opacity: 0.8, //the opacity of the overlay. for compact type - 0.6
                lightbox_slider_image_border: false, //enable border around the image (for compact type only)
            });
        }
    }
    app.initmap();
    app.init();


})();