
/**
 * Generic content panel
 * 
 */
var Panel = Class.extend({
   
    /**
     * @type {jQuery}
     */
    container: null,
   
    /**
     * @constructor
     */
    init: function(){       
    },
   
    /**
     * Event fired after rendering
     */
    onShow: function(){
    },   
   
    /**
     * Create DOM of panel
     * 
     * @param {jQuery} to destination
     */
    onRender: function(to){
        this.wrapper = $("<div>")
            .addClass("panel-wrapper");
       
        this.loader = $("<div>Loading...</div>")
            .addClass("panel-loader")
            .hide()
            .appendTo(this.wrapper); 
       
        this.container = $("<div>")
            .addClass("panel-container")
            .appendTo(this.wrapper);
        
        to.append(this.wrapper);
    },
    
    /**
     * Show loading indicator
     */
    loading: function(){
        this.container.hide();
        this.loader.show();
    },
    
    /**
     * Hide loading indicator
     */
    loaded: function(){
       this.loader.hide();
       this.container.show();
    },
    
    /**
     * jQuery in container context
     * @param {String} arg selector
     */
    '$': function(arg){
        return $(arg, this.container);
    }
   
});


/**
 * jQuery plugin for render panel to element 
 * @param {Object} panel
 */
$.fn.appendPanel = function(panel){
    panel.onRender(this);
    panel.onShow();
};
