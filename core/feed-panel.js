
/**
 * 
 */
var FeedPanel = Panel.extend({
    
    /**
     * 
     * 
     * @constructor
     * @param {String} url URL of RSS
     * @param {Number} count Count of loaded feed entries
     */
    init: function(url, count){
        this._super();
        
        this.url = url;
        this.count = count;
    },
    
    /**
     * Show panel
     */
    onShow: function(){
        this.load();
    },
    
    /**
     * Load RSS feeds (call Google Ajax Feed API)
     */
    load: function(){
        this.loading();
        var feed = new google.feeds.Feed(this.url);
        feed.setNumEntries(this.count);
        var that = this;
        feed.load(function(result) {
            if (!result.error) {
                that.processEntries(result.feed.entries);
            }else{
                alert(result.error);
            }
        });
    },
    
    /**
     * Process feeds entries
     * 
     * @private
     * @param {Array} entries
     */
    processEntries: function(entries){
        
         for (var i = 0; i < entries.length; i++) {
                var panel = new EntryPanel(entries[i]);
                this.container.appendPanel(panel);
            }
            
            this.loaded();
    }
    
});


