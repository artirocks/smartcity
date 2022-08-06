// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.41/esri/copyright.txt for details.
//>>built
define("esri/tasks/locator","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/has ../kernel ../request ../deferredUtils ./Task ./AddressCandidate".split(" "),function(r,n,B,t,q,C,D,u,v,E,y){r=r(E,{declaredClass:"esri.tasks.Locator",_eventMap:{"address-to-locations-complete":["addresses"],"addresses-to-locations-complete":["addresses"],"location-to-address-complete":["address"],"suggest-locations-complete":["suggestions"]},constructor:function(a){this._geocodeHandler=
n.hitch(this,this._geocodeHandler);this._geocodeAddressesHandler=n.hitch(this,this._geocodeAddressesHandler);this._reverseGeocodeHandler=n.hitch(this,this._reverseGeocodeHandler);this.registerConnectEvents()},outSpatialReference:null,setOutSpatialReference:function(a){this.outSpatialReference=a},_geocodeHandler:function(a,b,c,g,d){try{var f=a.candidates;b=[];var e,h=f.length,l=a.spatialReference,k;for(e=0;e<h;e++){var m=f[e];if(k=m.location)k.spatialReference=l;b[e]=new y(m)}this._successHandler([b],
"onAddressToLocationsComplete",c,d)}catch(p){this._errorHandler(p,g,d)}},_geocodeAddressesHandler:function(a,b,c,g,d){try{var f=a.locations;b=[];var e,h=f.length,l=a.spatialReference,k;for(e=0;e<h;e++){if(k=f[e].location)k.spatialReference=l;b[e]=new y(f[e])}this._successHandler([b],"onAddressesToLocationsComplete",c,d)}catch(m){this._errorHandler(m,g,d)}},addressToLocations:function(a,b,c,g,d){var f;if(a.address){g=c;c=b;b=a.outFields;d=a.searchExtent;var e=a.countryCode;var h=a.magicKey;var l=a.distance;
var k=a.categories;a.location&&this.normalization&&(f=a.location.normalize());var m=a.locationType;var p=a.maxLocations;var w=a.forStorage;a=a.address}d&&(d=d.shiftCentralMeridian());var A=this.outSpatialReference;a=this._encode(n.mixin({},this._url.query,a,{f:"json",outSR:A&&q.toJson(A.toJson()),outFields:b&&b.join(",")||null,searchExtent:d&&q.toJson(d.toJson()),category:k&&k.join(",")||null,countryCode:e||null,magicKey:h||null,distance:l||null,location:f||null,locationType:m||null,maxLocations:p||
null,forStorage:w||null}));var F=this._geocodeHandler,G=this._errorHandler,x=new t(v._dfdCanceller);x._pendingDfd=u({url:this._url.path+"/findAddressCandidates",content:a,callbackParamName:"callback",load:function(z,H){F(z,H,c,g,x)},error:function(z){G(z,g,x)}});return x},suggestLocations:function(a){var b=new t(v._dfdCanceller);a.hasOwnProperty("location")&&this.normalization&&(a.location=a.location.normalize());a.searchExtent&&(a.searchExtent=a.searchExtent.shiftCentralMeridian());a=this._encode(n.mixin({},
this._url.query,{f:"json",text:a.text,maxSuggestions:a.maxSuggestions,searchExtent:a.searchExtent&&q.toJson(a.searchExtent.toJson()),category:a.categories&&a.categories.join(",")||null,countryCode:a.countryCode||null,location:a.location||null,distance:a.distance||null},{f:"json"}));a=u({url:this._url.path+"/suggest",content:a,callbackParamName:"callback"});b._pendingDfd=a;a.then(n.hitch(this,function(c){c=c.suggestions||[];this.onSuggestLocationsComplete(c);b.resolve(c)}),n.hitch(this,function(c){this._errorHandler(c);
b.reject(c)}));return b},addressesToLocations:function(a,b,c){var g=this.outSpatialReference,d=[],f=a.categories,e=a.locationType,h=a.countryCode;B.forEach(a.addresses,function(p,w){d.push({attributes:p})});a=this._encode(n.mixin({},this._url.query,{category:f&&f.join(",")||null,locationType:e||null,sourceCountry:h||null},{addresses:q.toJson({records:d})},{f:"json",outSR:g&&q.toJson(g.toJson())}));var l=this._geocodeAddressesHandler,k=this._errorHandler,m=new t(v._dfdCanceller);m._pendingDfd=u({url:this._url.path+
"/geocodeAddresses",content:a,callbackParamName:"callback",load:function(p,w){l(p,w,b,c,m)},error:function(p){k(p,c,m)}});return m},_reverseGeocodeHandler:function(a,b,c,g,d){try{var f=new y({address:a.address,location:a.location,score:100});this._successHandler([f],"onLocationToAddressComplete",c,d)}catch(e){this._errorHandler(e,g,d)}},locationToAddress:function(a,b,c,g){a&&this.normalization&&(a=a.normalize());var d=this.outSpatialReference;a=this._encode(n.mixin({},this._url.query,{outSR:d&&q.toJson(d.toJson()),
location:a&&q.toJson(a.toJson()),distance:b,f:"json"}));var f=this._reverseGeocodeHandler,e=this._errorHandler,h=new t(v._dfdCanceller);h._pendingDfd=u({url:this._url.path+"/reverseGeocode",content:a,callbackParamName:"callback",load:function(l,k){f(l,k,c,g,h)},error:function(l){e(l,g,h)}});return h},onSuggestLocationsComplete:function(){},onAddressToLocationsComplete:function(){},onAddressesToLocationsComplete:function(){},onLocationToAddressComplete:function(){}});C("extend-esri")&&n.setObject("tasks.Locator",
r,D);return r});