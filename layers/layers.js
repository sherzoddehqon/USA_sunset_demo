var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uscities_mainlandcopy_1 = new ol.format.GeoJSON();
var features_uscities_mainlandcopy_1 = format_uscities_mainlandcopy_1.readFeatures(json_uscities_mainlandcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uscities_mainlandcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uscities_mainlandcopy_1.addFeatures(features_uscities_mainlandcopy_1);
var lyr_uscities_mainlandcopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uscities_mainlandcopy_1, 
                style: style_uscities_mainlandcopy_1,
                interactive: true,
    title: 'uscities_mainland copy<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_0.png" /> 4:15 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_1.png" /> 4:30 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_2.png" /> 4:45 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_3.png" /> 5:00 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_4.png" /> 5:15 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_5.png" /> 5:30 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_6.png" /> 5:45 pm<br />\
    <img src="styles/legend/uscities_mainlandcopy_1_7.png" /> 5:50 pm<br />'
        });
var format_UScitizenpopulation_2 = new ol.format.GeoJSON();
var features_UScitizenpopulation_2 = format_UScitizenpopulation_2.readFeatures(json_UScitizenpopulation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UScitizenpopulation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UScitizenpopulation_2.addFeatures(features_UScitizenpopulation_2);
var lyr_UScitizenpopulation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UScitizenpopulation_2, 
                style: style_UScitizenpopulation_2,
                interactive: true,
    title: 'US citizen - population<br />\
    <img src="styles/legend/UScitizenpopulation_2_0.png" /> 49848 - 195805<br />\
    <img src="styles/legend/UScitizenpopulation_2_1.png" /> 195805 - 518012<br />\
    <img src="styles/legend/UScitizenpopulation_2_2.png" /> 518012 - 1203230<br />\
    <img src="styles/legend/UScitizenpopulation_2_3.png" /> 1203230 - 2230722<br />\
    <img src="styles/legend/UScitizenpopulation_2_4.png" /> 2230722 - 4219697<br />\
    <img src="styles/legend/UScitizenpopulation_2_5.png" /> 4219697 - 6445545<br />\
    <img src="styles/legend/UScitizenpopulation_2_6.png" /> 6445545 - 12750807<br />\
    <img src="styles/legend/UScitizenpopulation_2_7.png" /> 12750807 - 18713220<br />'
        });
var format_UScitizensunset_3 = new ol.format.GeoJSON();
var features_UScitizensunset_3 = format_UScitizensunset_3.readFeatures(json_UScitizensunset_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UScitizensunset_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UScitizensunset_3.addFeatures(features_UScitizensunset_3);
var lyr_UScitizensunset_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UScitizensunset_3, 
                style: style_UScitizensunset_3,
                interactive: true,
    title: 'US citizen sunset<br />\
    <img src="styles/legend/UScitizensunset_3_0.png" /> 4:15 pm<br />\
    <img src="styles/legend/UScitizensunset_3_1.png" /> 4:30 pm<br />\
    <img src="styles/legend/UScitizensunset_3_2.png" /> 4:45 pm<br />\
    <img src="styles/legend/UScitizensunset_3_3.png" /> 5:00 pm<br />\
    <img src="styles/legend/UScitizensunset_3_4.png" /> 5:15 pm<br />\
    <img src="styles/legend/UScitizensunset_3_5.png" /> 5:30 pm<br />\
    <img src="styles/legend/UScitizensunset_3_6.png" /> 5:45 pm<br />\
    <img src="styles/legend/UScitizensunset_3_7.png" /> 5:50 pm<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_uscities_mainlandcopy_1.setVisible(true);lyr_UScitizenpopulation_2.setVisible(true);lyr_UScitizensunset_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_uscities_mainlandcopy_1,lyr_UScitizenpopulation_2,lyr_UScitizensunset_3];
lyr_uscities_mainlandcopy_1.set('fieldAliases', {'city': 'city', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'population', 'density': 'density', 'timezone': 'timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'sunrise_sh', 'sunset_sho': 'sunset_sho', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'daylight', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_UScitizenpopulation_2.set('fieldAliases', {'city': 'City', 'state_id': 'State', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'Population', 'density': 'Pop.Density', 'timezone': 'Timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'sunrise_sh', 'sunset_sho': 'sunset_sho', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'daylight', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_UScitizensunset_3.set('fieldAliases', {'city': 'city', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'population', 'density': 'density', 'timezone': 'timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'sunrise_sh', 'sunset_sho': 'sunset_sho', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'daylight', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_uscities_mainlandcopy_1.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'TextEdit', 'sunset_lon': 'TextEdit', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_UScitizenpopulation_2.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'TextEdit', 'sunset_lon': 'TextEdit', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_UScitizensunset_3.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'TextEdit', 'sunset_lon': 'TextEdit', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_uscities_mainlandcopy_1.set('fieldLabels', {'city': 'no label', 'state_id': 'no label', 'state_name': 'no label', 'lat': 'no label', 'lng': 'no label', 'population': 'no label', 'density': 'no label', 'timezone': 'no label', 'sunrise_lo': 'no label', 'sunset_lon': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'day_length': 'no label', 'night_leng': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_UScitizenpopulation_2.set('fieldLabels', {'city': 'inline label', 'state_id': 'no label', 'state_name': 'inline label', 'lat': 'no label', 'lng': 'no label', 'population': 'no label', 'density': 'no label', 'timezone': 'no label', 'sunrise_lo': 'no label', 'sunset_lon': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'day_length': 'no label', 'night_leng': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_UScitizensunset_3.set('fieldLabels', {'city': 'inline label', 'state_id': 'inline label', 'state_name': 'inline label', 'lat': 'inline label', 'lng': 'no label', 'population': 'no label', 'density': 'no label', 'timezone': 'inline label', 'sunrise_lo': 'no label', 'sunset_lon': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'day_length': 'no label', 'night_leng': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_UScitizensunset_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});