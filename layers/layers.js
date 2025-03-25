ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.131882, -36.723760, -73.106723, -36.709937]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MatiasPalma_1 = new ol.format.GeoJSON();
var features_MatiasPalma_1 = format_MatiasPalma_1.readFeatures(json_MatiasPalma_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MatiasPalma_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MatiasPalma_1.addFeatures(features_MatiasPalma_1);
cluster_MatiasPalma_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MatiasPalma_1
});
var lyr_MatiasPalma_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MatiasPalma_1, 
                style: style_MatiasPalma_1,
                popuplayertitle: 'Matias Palma',
                interactive: true,
                title: '<img src="styles/legend/MatiasPalma_1.png" /> Matias Palma'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MatiasPalma_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MatiasPalma_1];
lyr_MatiasPalma_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunta': 'T_Pregunta', 'N_Preg_Inc': 'N_Preg_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'Por_Corr': 'Por_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_incor': 'Preg_incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_MatiasPalma_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunta': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'Por_Corr': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_MatiasPalma_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunta': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'Por_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_MatiasPalma_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});