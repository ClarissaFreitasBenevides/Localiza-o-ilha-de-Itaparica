var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ilha_itaparica_1 = new ol.format.GeoJSON();
var features_ilha_itaparica_1 = format_ilha_itaparica_1.readFeatures(json_ilha_itaparica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ilha_itaparica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ilha_itaparica_1.addFeatures(features_ilha_itaparica_1);
var lyr_ilha_itaparica_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ilha_itaparica_1, 
                style: style_ilha_itaparica_1,
                popuplayertitle: 'ilha_itaparica',
                interactive: true,
                title: '<img src="styles/legend/ilha_itaparica_1.png" /> ilha_itaparica'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ilha_itaparica_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ilha_itaparica_1];
lyr_ilha_itaparica_1.set('fieldAliases', {'Area': 'Area', 'BACIA': 'BACIA', 'LEGENDA': 'LEGENDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ilha_itaparica_1.set('fieldImages', {'Area': 'TextEdit', 'BACIA': 'TextEdit', 'LEGENDA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ilha_itaparica_1.set('fieldLabels', {'Area': 'no label', 'BACIA': 'no label', 'LEGENDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ilha_itaparica_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});