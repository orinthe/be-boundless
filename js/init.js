BOUNDLESS.TransitionEvents = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd';
// List out the classes that each component searches for
BOUNDLESS.AnimationDuration = 1000

BOUNDLESS.begin = function() {

// Initialize all components when the DOM is ready

  // BOUNDLESS.beginning = new BOUNDLESS.Beginning()

BOUNDLESS.initialize()
}

BOUNDLESS.initialize = function( $ )
{

  // Initialize mobile checks
  // BOUNDLESS.mobile = new BOUNDLESS.Mobile()

  // Initialize the router
  BOUNDLESS.router  = new BOUNDLESS.Router()

  // Initialize the Boundless navigation
  BOUNDLESS.navigation = new BOUNDLESS.Navigation()

  // get and parse video data now, build view later
  // BOUNDLESS.uwtiles = new BOUNDLESS.UWTiles()

  // get and parse video data now, build view later
  // BOUNDLESS.videos = new BOUNDLESS.Videos()

  // BOUNDLESS.api = new BOUNDLESS.Video.API()
  // Initialize the search
  BOUNDLESS.search = new BOUNDLESS.Search()
 
  // analytics logic for boundless
  BOUNDLESS.analytics = new BOUNDLESS.Analytics();


  Backbone.history.start()
}

jQuery(document).ready( BOUNDLESS.begin )

