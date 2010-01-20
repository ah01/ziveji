
/**
 * 
 * @param {Object} entry
 */
var LivePanel = Panel.extend({
    
    entry: null,
    
    search: null,
    rate: null,
    share: null,
    
    init: function(entry){
        this.entry = entry;
        
        this.search = new SearchLivePanel(entry);
        this.rate = new RateLivePanel(entry);
        //this.share = new ShareLivePanel(entry);
    },
    
    onShow: function(){
        
    },
    
    onRender: function(to){
        this._super(to);
      
        this.container.appendPanel(this.search);
        this.container.appendPanel(this.rate);
        //this.container.appendPanel(this.share);
    }
    
});


/**
 * Search panel 
 * 
 * @param {Object} entry
 */
var SearchLivePanel = Panel.extend({
      
    init: function(entry){
        this.entry = entry;
    },
   
    onShow: function(){
       
    },
    
    onRender: function(to){
       this._super(to);
       
        $("<h3><span>Hledat</span></h3>")
            .appendTo(this.container);
        
        this.keywords = $("<ul/>")
            .addClass("list");
        
        $("<div/>")
            .addClass("keywords")
            .append(
                $("<span/>")
                    .text("Klíčová slova:")
                    .addClass("title")
            )
            .append(
                $("<em/>")
                    .text("Loading...")
            )
            .append(this.keywords)
            .appendTo(this.container);
            
        this.searchContainer = $("<div/>")
            .appendTo(this.container);
        
        this.getTerms(this.entry.title + "\n" + this.entry.content, function(){});
        
        this._renderSearch();
    },
    
    _renderSearch: function(){
        this.searchControl = new google.search.SearchControl();

        this.searchControl.addSearcher(new google.search.NewsSearch());
        this.searchControl.addSearcher(new google.search.WebSearch());
        this.searchControl.addSearcher(new google.search.ImageSearch());
        
        this.searchControl.draw(this.searchContainer.get(0));
    },
    
    getTerms: function(text, callback){
        var that = this;
        
        google.language.translate(text, "cs", "en", function(result) {
            
            if (result.translation) {
              
                var query = 'http://query.yahooapis.com/v1/public/yql?q=select * from search.termextract where context="' 
                    + result.translation + '"&format=json&callback=?'
       
                $.getJSON(query, function(result){
                    if (result !== null && result.query !== null && result.query.count > 0) {
                        that._addKeywordsList(result.query.results.Result);
                    }
                    else
                    {
                        $("em", that.keywords.parent()).text("Nic nenalezeno");
                    }
                });
              
            }else{
                $("em", that.keywords.parent()).text("Nic nenalezeno");
            }
            
        });
    },
    
    _addKeywordsList: function(list){
       var that = this;
       console.log(list);
       
       $("em", this.keywords.parent()).remove();
       
       if(typeof list === "string"){
            this._addKeyword(list);
       }else{
            list.forEach(function(i){
                that._addKeyword(i);
            });
       }
       
       this._setUpSelectable();
    },
    
    _addKeyword: function(word){
        
        $("<li/>")
            .html(word)
            .addClass("item")
            .appendTo(this.keywords);
    },
    
    _setUpSelectable: function(){
        var that = this;
        this.keywords.selectable({
            stop: function(event, ui) {
                var items = [];
                $(".ui-selected", that.keywords).each(function(){
                    items.push($(this).text());
                });
                
                that._startSearch(items.join(" "));
            }
        });

    },
    
    _startSearch: function(query){
        
      // execute an inital search
      this.searchControl.execute(query);

    }
    
       
});



/**
 * Rate panel 
 * 
 * @param {Object} entry
 */
var RateLivePanel = Panel.extend({
      
    init: function(entry){
        this.entry = entry;
    },
   
   onShow: function(){
       
   },
   
   onRender: function(to){
       this._super(to);
       
        $("<h3><span>Hodnotit</span></h3>")
            .appendTo(this.container);
            
        this.box = $("<div />")
            .attr("id", "entry-box-" + this.entry.id)
            .appendTo(this.container);
                
        var data =        {
            id: this.box.attr("id"),
            site: '17482516410292132489',
            'view-params': {
                "disableMinMax":"false",
                "scope":"ID",
                "docId":"entry-" + this.entry.id,
                "startMaximized":"true"
            }
        };         
        google.friendconnect.container.renderReviewGadget(data, skin);
   }
    
});


/**
 * Share panel 
 * 
 * @param {Object} entry
 */
var ShareLivePanel = Panel.extend({
      
    init: function(entry){
        this.entry = entry;
    },
   
   onShow: function(){
       
   },
   
   onRender: function(to){
       this._super(to);
       
        $("<h3><span>Zdílet</span></h3>")
            .appendTo(this.container);
            
        $("<p/>")
            .text("Lorem ipsum")
            .appendTo(this.container);
   }
    
});

