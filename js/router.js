BOUNDLESS.Router = Backbone.Router.extend({

  settings : {
    mprogress : {
          template : 3
    }
  },

  routes : {
    "!/map" : "segueToMap",
    // "!/video/:video" : "initializeVideo",
    "" : "default"
  },

  initialize : function(options) {

    _.bindAll( this,
       'segueToMap',
       'initializeVideo',
       'reveal',
       'conceal'
    )

    this.mprogress = new Mprogress( this.settings.mprogress )
    this.$slide = $('#slide')
    this.$slide.bind( BOUNDLESS.TransitionEvents, this.conceal )
  },

  initializeVideo : function (video){
    if (!BOUNDLESS.videoView){
      BOUNDLESS.videoView = {};
    }
    if (!BOUNDLESS.videoView[video]){
      BOUNDLESS.videoView[video] = new BOUNDLESS.Video.View({slug:video});
    }
    else {
      BOUNDLESS.videoView[video].show();
    }
    this.currentView = BOUNDLESS.videoView[video];
  },


  default : function() {
    // Temp transition

    this.$slide.removeClass('open')

    this.mprogress.end()

    if ( this.currentView ) this.currentView.unbind('slideloaded')

  },

  // Preforms before each segue
  // Should hide or show the navigation
   execute: function(callback, args) {

      this.mprogress.start()
      BOUNDLESS.navigation.segue()

      if (callback) callback.apply(this, args);
  },

// If the router is map create a new map
  segueToMap : function ()
  {
    // Set the current view reference
    this.currentView = new BOUNDLESS.Map()
    this.currentView.on( 'slideloaded' , this.reveal )
  },

  reveal : function () {
    this.mprogress.end()
    this.$slide.addClass('open')
  },

  conceal : function()
  {
    if ( ! Backbone.history.fragment.length )
      return this.currentView && this.currentView.remove()
  }

})
