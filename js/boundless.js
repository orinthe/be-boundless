(function(){(function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}).call(this),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):a.eventie=f}(this),function(a,b){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("eventie")):a.imagesLoaded=b(a,a.EventEmitter,a.eventie)}(window,function(a,b,c){function d(a,b){for(var c in b)a[c]=b[c];return a}function e(a){return"[object Array]"===m.call(a)}function f(a){var b=[];if(e(a))b=a;else if("number"==typeof a.length)for(var c=0,d=a.length;d>c;c++)b.push(a[c]);else b.push(a);return b}function g(a,b,c){if(!(this instanceof g))return new g(a,b);"string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=f(a),this.options=d({},this.options),"function"==typeof b?c=b:d(this.options,b),c&&this.on("always",c),this.getImages(),j&&(this.jqDeferred=new j.Deferred);var e=this;setTimeout(function(){e.check()})}function h(a){this.img=a}function i(a){this.src=a,n[a]=this}var j=a.jQuery,k=a.console,l="undefined"!=typeof k,m=Object.prototype.toString;g.prototype=new b,g.prototype.options={},g.prototype.getImages=function(){this.images=[];for(var a=0,b=this.elements.length;b>a;a++){var c=this.elements[a];"IMG"===c.nodeName&&this.addImage(c);var d=c.nodeType;if(d&&(1===d||9===d||11===d))for(var e=c.querySelectorAll("img"),f=0,g=e.length;g>f;f++){var h=e[f];this.addImage(h)}}},g.prototype.addImage=function(a){var b=new h(a);this.images.push(b)},g.prototype.check=function(){function a(a,e){return b.options.debug&&l&&k.log("confirm",a,e),b.progress(a),c++,c===d&&b.complete(),!0}var b=this,c=0,d=this.images.length;if(this.hasAnyBroken=!1,!d)return void this.complete();for(var e=0;d>e;e++){var f=this.images[e];f.on("confirm",a),f.check()}},g.prototype.progress=function(a){this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded;var b=this;setTimeout(function(){b.emit("progress",b,a),b.jqDeferred&&b.jqDeferred.notify&&b.jqDeferred.notify(b,a)})},g.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var b=this;setTimeout(function(){if(b.emit(a,b),b.emit("always",b),b.jqDeferred){var c=b.hasAnyBroken?"reject":"resolve";b.jqDeferred[c](b)}})},j&&(j.fn.imagesLoaded=function(a,b){var c=new g(this,a,b);return c.jqDeferred.promise(j(this))}),h.prototype=new b,h.prototype.check=function(){var a=n[this.img.src]||new i(this.img.src);if(a.isConfirmed)return void this.confirm(a.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var b=this;a.on("confirm",function(a,c){return b.confirm(a.isLoaded,c),!0}),a.check()},h.prototype.confirm=function(a,b){this.isLoaded=a,this.emit("confirm",this,b)};var n={};return i.prototype=new b,i.prototype.check=function(){if(!this.isChecked){var a=new Image;c.bind(a,"load",this),c.bind(a,"error",this),a.src=this.src,this.isChecked=!0}},i.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},i.prototype.onload=function(a){this.confirm(!0,"onload"),this.unbindProxyEvents(a)},i.prototype.onerror=function(a){this.confirm(!1,"onerror"),this.unbindProxyEvents(a)},i.prototype.confirm=function(a,b){this.isConfirmed=!0,this.isLoaded=a,this.emit("confirm",this,b)},i.prototype.unbindProxyEvents=function(a){c.unbind(a.target,"load",this),c.unbind(a.target,"error",this)},g});var a=this,b=function(a){return a instanceof b?a:!this instanceof b?new b(a):void(this._wrapped=a)};a.BOUNDLESS=b,b.VERSION="0.1",b.TransitionEvents="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",b.AnimationDuration=1e3,b.begin=function(){b.initialize()},b.initialize=function(){b.router=new b.Router,b.navigation=new b.Navigation,b.uwtiles=new b.UWTiles,b.videos=new b.Videos,b.search=new b.Search,Backbone.history.start()},jQuery(document).ready(b.begin),b.Beginning=Backbone.View.extend({el:"body",events:{},initialize:function(){b.initialize()}}),b.Navigation=Backbone.View.extend({el:".navigation",hidden:!0,message:"#message",events:{"click li":"segueOut","click .show-nav":"segueIn"},initialize:function(){this.$toggle=this.$(".show-nav")},segueOut:function(){this.$toggle.addClass("close"),this.$el.transition({left:-1600},b.AnimationDuration,"easeInOutQuad"),this.hidden=!0},segueIn:function(){this.$toggle.removeClass("close"),this.$el.transition({left:-230},b.AnimationDuration,"easeInOutQuad"),this.hidden=!1},segue:function(){this.hidden&&!Backbone.history.fragment&&this.segueIn(),!this.hidden&&Backbone.history.fragment.length&&this.segueOut(),Backbone.history.fragment.length&&this.$toggle.addClass("close")}}),b.Search=Backbone.View.extend({el:"li.search",searchBar:"input.search-bar",events:{click:"expandTheSearchBar"},initialize:function(){_.bindAll(this,"expandTheSearchBar"),this.$searchBar=$(this.searchBar)},expandTheSearchBar:function(){this.$searchBar.toggleClass("open")}}),b.UWTiles=Backbone.View.extend({name:"UW Campus",alt:"UW Map",tileSize:new google.maps.Size(256,256),maxZoom:19,minZoom:1,scrollwheel:!1,streetViewControl:!1,initialize:function(){},getTile:function(a,b,c){var d=c.createElement("DIV");if(!this.withinLoadingBounds(a,b))return d.style.width="256px",d.style.height="256px",d.style.background="#FFFFFF",d;var e=c.createElement("IMG");return e.src="http://www.washington.edu/wp-content/themes/maps/tiles/"+b+"_"+a.x+"_"+a.y+".png",e.onerror=function(){d.removeChild(e),d.style.width="256px",d.style.height="256px",d.style.background="#FFFFFF"},d.appendChild(e),d},withinLoadingBounds:function(a,b){return!(a.x>Math.floor(84049/Math.pow(2,19-b))||a.x<Math.floor(83996/Math.pow(2,19-b))||a.y<Math.floor(182980/Math.pow(2,19-b))||a.y>Math.floor(183017/Math.pow(2,19-b)))}}),b.youtube_api_ready=!1,b.YouTubeAPIReady=new Event("youtube_api_ready"),window.onYouTubeIframeAPIReady=function(){b.youtube_api_ready=!0,this.dispatchEvent(b.YouTubeAPIReady)},b.Video=Backbone.Model.extend({}),b.Videos=Backbone.Collection.extend({model:b.Video,is_ready:!1,view_to_render:void 0,initialize:function(){_.bindAll(this,"fetch_success"),this.url="?json=boundless_video.get_videos",this.fetch({success:this.fetch_success})},fetch_success:function(){this.is_ready=!0,void 0!==this.view_to_render&&this.view_to_render.data_prep()}}),b.Video.View=Backbone.View.extend({template:'<div id="<%= slug %>" class="fullscreen behind" style="background-image:url(<%= image %>)"><h2 class="video-title"><%= title %></h2><button class="play"><span class="top"></span><span class="left"></span><span class="bottom"></span></button><div class="behind boundless-youtube" id="video<%= video %>" aria-label="Video: <%= title %>"></div><div class="blurb"><%= text %></div></div>',el:"#message",is_playing:!1,events:{"click button.play":"buttonClick",keyup:"checkEscape"},initialize:function(a){_.bindAll(this,"render","data_prep","onReady","buttonClick","checkEscape","onStateChange","youtube_iframe","hide","show"),this.collection=b.videos,this.slug=a.slug,this.collection.is_ready?this.data_prep(a):this.collection.view_to_render=this,this.player_ready=!1},data_prep:function(){for(var a=0;a<this.collection.models.length;a++)this.collection.models[a].get("slug")==this.slug&&(this.model=this.collection.models[a]);this.model?(this.render(),b.youtube_api_ready?this.youtube_iframe():window.addEventListener("youtube_api_ready",this.youtube_iframe)):console.log("no model with slug "+this.slug)},render:function(){var a=this.model.toJSON(),b=_.template(this.template,a);this.$el.append(b),this.$el=this.$el.find("#"+this.slug),this.$button=this.$el.find("button.play"),this.show()},youtube_iframe:function(){var a={};this.modest&&(a={rel:0,controls:0,modestbranding:1}),this.uwplayer=new YT.Player("video"+this.model.get("video"),{videoId:this.model.get("video"),playerVars:a,width:"100%",height:"100%",events:{onReady:this.onReady,onStateChange:this.onStateChange}}),this.$iframe=this.$el.find("#video"+this.model.get("video"))},onReady:function(){this.play(this.model.get("video"))},onStateChange:function(a){0===a.data&&this.is_playing&&this.buttonClick()},play:function(a,b){b=b||!1,b?(this.uwplayer.loadVideoById(a),this.is_playing=!0):this.uwplayer.cueVideoById(a)},buttonClick:function(){this.is_playing?(this.is_playing=!1,this.uwplayer.stopVideo(),this.$iframe.addClass("behind"),_.delay(function(){this.$button.removeClass("close")}.bind(this),250)):(this.$button.addClass("close"),_.delay(function(){this.$iframe.removeClass("behind"),this.play(this.model.get("video"),!0),this.$button.focus()}.bind(this),250))},checkEscape:function(a){this.is_playing&&27==a.keyCode&&(a.preventDefault(),this.buttonClick())},hide:function(){this.is_playing&&this.uwplayer&&this.uwplayer.stopVideo(),this.$button.removeClass("close"),this.$iframe.addClass("behind"),this.$el.fadeOut()},show:function(){this.$el.fadeIn()}}),b.Map=Backbone.View.extend({id:"map",tagName:"div",settings:{name:"campusmap",allowedBounds:new google.maps.LatLngBounds(new google.maps.LatLng(47.647523,-122.325039),new google.maps.LatLng(47.664983,-122.290106)),allowedZoom:16,map:{zoom:17,center:new google.maps.LatLng(47.653851681095,-122.30780562698),minZoom:1,maxZoom:19,disableDoubleClickZoom:!1,styles:[{featureType:"poi",stylers:[{visibility:"off"}]}]},icon:{url:"wp-content/themes/be-boundless/less/svg/map-marker.svg",size:new google.maps.Size(85,85),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(42.5,42.5)},marker:{animation:google.maps.Animation.DROP}},initialize:function(){_.bindAll(this,"delegateGoogleMapEvents","handleCenterChanged","removeInfoWindows","handleZoomChanged","getMapType","putMarkersOnMap","render","segueIn","hide","googleMapLoaded"),this.points=new b.Map.Points,this.points.on("sync",this.render)},render:function(){b.replaceSlide(this.el),this.map=new google.maps.Map($("#slide").find("#map").get(0),this.settings.map),this.delegateGoogleMapEvents(),this.infowindow=new b.Map.InfoWindow(this.map),this.bounds=new google.maps.LatLngBounds,this.points.each(this.putMarkersOnMap)},delegateGoogleMapEvents:function(){google.maps.event.addListenerOnce(this.map,"tilesloaded",this.googleMapLoaded),google.maps.event.addListener(this.map,"center_changed",this.handleCenterChanged),google.maps.event.addListener(this.map,"zoom_changed",this.handleZoomChanged),google.maps.event.addListener(this.map,"click",this.removeInfoWindows)},handleCenterChanged:function(){},handleZoomChanged:function(){},getMapType:function(){},putMarkersOnMap:function(a){var b=new google.maps.Marker(this.settings.marker),c=new google.maps.LatLng(a.get("coordinate").latitude,a.get("coordinate").longitude);this.bounds.extend(c),b.setPosition(c),b.setTitle(a.get("title")),b.setText(a.get("text")),b.setMap(this.map),b.setIcon(this.settings.icon),b.set("information",a),google.maps.event.addListener(b,"click",_.bind(function(){this.handleClickMarker(b)},this)),this.map.fitBounds(this.bounds)},handleClickMarker:function(a){this.map.panTo(a.getPosition()),this.infowindow.render(a),this.infowindow.segueIn()},removeInfoWindows:function(){$(".infowindow").removeClass("open")},segueIn:function(){b.router.trigger("newViewLoaded"),this.$el.hide().css("z-index",0).fadeIn(b.AnimationDuration)},show:function(){this.googleMapIsLoaded&&this.segueIn()},hide:function(){this.$el.fadeOut(1e3,function(){$(this).css("z-index",0).hide()})},googleMapLoaded:function(){this.trigger("slideloaded")}}),b.Map.Point=Backbone.Model.extend({}),b.Map.Points=Backbone.Collection.extend({url:"?json=map_point.get_map_points",model:b.Map.Point,initialize:function(){this.on("error",this.error),this.fetch()},error:function(){console.log("There was an error retrieving the map points.")}}),b.Map.InfoWindow=function(a){this.div=document.createElement("div"),this.div.className="infowindow",this.setMap(a)},b.Map.InfoWindow.prototype=new google.maps.OverlayView,b.Map.InfoWindow.prototype.render=function(a){var b=this.getProjection(),c=a.getPosition(),d=a.get("information"),e=b.fromLatLngToDivPixel(c),f=40;this.div.innerHTML=_.template('<div class="image-mask"><div class="image"><img src="<%= _.first(info.get("image")) %>" title="<%= info.get("title") %>" /><h3><%= info.get("title") %></h3></div></div><div class="text"><p><%= info.get("text") %></p><span class="close"></span><span class="open"></span></div><div class="arrow"></div>',{info:d}),this.div.style.top=e.y-(this.div.offsetHeight+f)+"px",this.div.style.left=e.x-this.div.offsetWidth/2+"px"},b.Map.InfoWindow.prototype.segueIn=function(){this.div.style.display="inline",this.div.className+=" open"},b.Map.InfoWindow.prototype.onAdd=function(){var a=this.getPanes();a.floatPane.appendChild(this.div)},b.Map.InfoWindow.prototype.draw=function(){},b.Map.InfoWindow.prototype.onRemove=function(){this.div.style.display="none"},b.getSlide=function(){return this.$slide=this.$slide||$("#slide"),this.$slide},b.replaceSlide=function(a){this.getSlide().html(a)},b.Router=Backbone.Router.extend({settings:{mprogress:{template:3}},routes:{"!/map":"segueToMap","":"default"},initialize:function(){_.bindAll(this,"segueToMap","initializeVideo","reveal","conceal"),this.mprogress=new Mprogress(this.settings.mprogress),this.$slide=$("#slide"),this.$slide.bind(b.TransitionEvents,this.conceal)},initializeVideo:function(a){b.videoView||(b.videoView={}),b.videoView[a]?b.videoView[a].show():b.videoView[a]=new b.Video.View({slug:a}),this.currentView=b.videoView[a]},"default":function(){this.$slide.removeClass("open"),this.mprogress.end(),this.currentView&&this.currentView.unbind("slideloaded")},execute:function(a,c){this.mprogress.start(),b.navigation.segue(),a&&a.apply(this,c)},segueToMap:function(){this.currentView=new b.Map,this.currentView.on("slideloaded",this.reveal)},reveal:function(){this.mprogress.end(),this.$slide.addClass("open")},conceal:function(){return Backbone.history.fragment.length?void 0:this.currentView&&this.currentView.remove()}})}).call(this);
//# sourceMappingURL=boundless.js.map