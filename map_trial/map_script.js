let config = {
  minZoom: 7,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 13;
// co-ordinates
const lat = 52.52;
const lng = 13.405;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);
var marker = L.marker([52.511489923312524, 13.32434203866432]).addTo(map);
var circle = L.circle([52.51168987491753, 13.324270128875824], {
  color: 'green',
  fillColor: '#008000',
  fillOpacity: 0.25,
  radius: 500
}).addTo(map);

// Adding popup to the marker
marker.bindPopup('hello').openPopup();
marker.addTo(map); // Adding marker to the map  

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var imageUrl = 'https://mapandmaps.com/37996-thickbox_default/berlin-charlottenburg-antique-town-city-plan-germany-1892.jpg',
  imageBounds = [[52.507103, 13.316906], [52.516897, 13.330811]];
//L.imageOverlay(imageUrl, imageBounds, {opacity: 0.3}).addTo(map); 



var geojson = {
  "type": "FeatureCollection",
  "name": "floorplan_default",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
    { "type": "Feature", "properties": { "id": null, "name": "room 105", "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324664100857044, 52.511406172243817], [13.324580328577831, 52.511433253710543], [13.324624920301638, 52.511484384492434], [13.324708287437453, 52.511457245854068], [13.324665534175836, 52.511405700717972], [13.324664100857044, 52.511406172243817]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.32443583515486, 52.511546262347778], [13.324488209398297, 52.511529287468356], [13.324455165589377, 52.511491082177592], [13.324402268378227, 52.511508469655858], [13.32443583515486, 52.511546262347778]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324381795162505, 52.511564192057001], [13.324434556789399, 52.511546722083949], [13.324401203073769, 52.511508764358886], [13.324348925676194, 52.511526198982679], [13.324381795162505, 52.511564192057001]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324328897951448, 52.51158187420895], [13.324380342474587, 52.511564781462248], [13.324347259927332, 52.511526658719099], [13.324295815404192, 52.51154332710869], [13.324328897951448, 52.51158187420895]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324240477677259, 52.511610731465488], [13.324327484001785, 52.511582440037635], [13.324293762271866, 52.511543987242796], [13.324206775316471, 52.511572514457384], [13.324240477677259, 52.511610731465488]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324155175839991, 52.511638952146654], [13.324239586695306, 52.511611037955852], [13.324205748750353, 52.51157284452426], [13.324120687433819, 52.511600929212399], [13.324155175839991, 52.511638952146654]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324097107059723, 52.511657978109426], [13.32415374252119, 52.51163977731251], [13.324119032963413, 52.511601489601105], [13.324063559652316, 52.511619784718597], [13.324097107059723, 52.511657978109426]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324020482611861, 52.51168344035154], [13.324095441310863, 52.511658567513351], [13.324061274089924, 52.511620350546856], [13.323987012681144, 52.511644398240932], [13.324020482611861, 52.51168344035154]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324233311083306, 52.511533283638443], [13.324289133039526, 52.511514870603783], [13.324248806421592, 52.511470594414575], [13.324192906988694, 52.511488866010311], [13.324233311083306, 52.511533283638443]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324177295435396, 52.511551908851352], [13.32423191650288, 52.511533802315391], [13.324191241239854, 52.511489337535288], [13.324137782322744, 52.511506218125184], [13.324177295435396, 52.511551908851352]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324090211634202, 52.51158011778216], [13.324175900854918, 52.511552286070739], [13.324136271527234, 52.511506666073664], [13.324050311138045, 52.511534273839843], [13.324090211634202, 52.51158011778216]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.32429014023649, 52.51151456411273], [13.324346465791219, 52.511496009612777], [13.3243062941267, 52.511452039896064], [13.324249968571962, 52.511470170041946], [13.32429014023649, 52.51151456411273]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324347782894948, 52.511495514511651], [13.324435796416472, 52.51146752950099], [13.324397213024119, 52.511423489026917], [13.324307882398841, 52.511451521218149], [13.324347782894948, 52.511495514511651]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324031431277707, 52.511599274754495], [13.324088797788036, 52.511580651493404], [13.324048664758344, 52.511534757152411], [13.323991332006647, 52.511553264483602], [13.324031431277707, 52.511599274754495]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "room123", "type": "office", level: 2 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.323966366816039, 52.511620567940994], [13.324030285515839, 52.511599696323117], [13.323989317612678, 52.51155361812679], [13.323925941679047, 52.511574105851047], [13.323966366816039, 52.511620567940994]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "106/107", "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324454952528416, 52.511404828395179], [13.324484006287722, 52.511440004209867], [13.324531896567628, 52.511424532277388], [13.324547382221347, 52.511442361837204], [13.32466452697885, 52.511404710513702], [13.324620132834633, 52.511352583299406], [13.324454952528416, 52.511404828395179]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": "104", "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324623415909429, 52.511484828577643], [13.324606409775651, 52.511465472472267], [13.324529204252606, 52.511491123435889], [13.324546326601423, 52.51151012588641], [13.324623415909429, 52.511484828577643]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": null, "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.32448490695425, 52.511440870637877], [13.3245194228203, 52.511480337301819], [13.324550955833733, 52.51147010520716], [13.324531509184174, 52.511447519146458], [13.324545377511948, 52.511442921773622], [13.324530734417255, 52.51142592327799], [13.32448490695425, 52.511440870637877]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": null, "type": "kitchenette", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324520158848877, 52.511481103530016], [13.324528332639826, 52.511490333631627], [13.324552970227712, 52.511482129096947], [13.324544757698416, 52.51147307581553], [13.324520158848877, 52.511481103530016]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": null, "type": "office", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324546016694649, 52.511472627866659], [13.324554345438983, 52.51148170472441], [13.324605809331292, 52.511464753396382], [13.324578769965967, 52.511433915636722], [13.324533910961607, 52.511448344315937], [13.324553299503656, 52.511470282029087], [13.324546016694649, 52.511472627866659]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": null, "type": "hallway", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324456735467196, 52.51141125740557], [13.324404317951108, 52.511427377830834], [13.324439170022977, 52.511468018245132], [13.323967691194778, 52.511622179976065], [13.323985953680435, 52.511643475802828], [13.324509292391571, 52.511472260457438], [13.324456735467196, 52.51141125740557]]]] } },
    { "type": "Feature", "properties": { "id": null, "name": null, "type": "wc", level: 1 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[13.324485623478559, 52.511523519606158], [13.324539748746217, 52.511505797782341], [13.324509967650771, 52.511472994890312], [13.324456417442315, 52.511490642488681], [13.324485623478559, 52.511523519606158]]]] } }
  ]
}

// where data is a GeoJSON feature collection
var indoorLayer = new L.Indoor(geojson);

// set the initial level to show
indoorLayer.setLevel("1");

indoorLayer.addTo(map);

var levelControl = new L.Control.Level({
  level: "1",
  levels: indoorLayer.getLevels(),
  indoorLayer: indoorLayer
});

levelControl.addTo(map);


//L.geoJSON(geojson).addTo(map)





