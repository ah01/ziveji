
var EntryPanel = Panel.extend({
    
    live: null,
    isLive: false,
    
    init: function(entry){
       this.entry = entry;
       this._fillId();
       this.live = new LivePanel(entry);
    },
    
    _fillId: function(){
       var m = this.entry.link.match(/\d+/);
       if(m !== null && m[0] !== undefined){
           this.id = m[0];
       }else{
           this.id = 0; 
       }
       
       this.entry.id = this.id; 
    },
    
    onShow: function(){
       
    },
    
    onRender: function(to){
        this._super(to);
        
        var that = this;
        
        this.wrapper
            .addClass("entry-panel")
            .attr("id", "entry-" + this.id);
       
        $("<h2>")
            .append(
                $("<a>")
                    .attr("href", this.entry.link)
                    .attr("target", "_blank")
                    .text(this.entry.title)
            )
            .appendTo(this.container);
        
        $("<div>")
            .text(this.entry.content)
            .appendTo(this.container);
            
        this.expandLink = $("<div>")
            .append(
                $("<a>")
                    .attr("href", "javascript:;")
                    .html("Oživit &rarr;")
                    .click(function(){that.liveBtnClick();})
            )
            .addClass("expand-link")
            .appendTo(this.container);
        
    },
    
    liveBtnClick: function(){    
        if(!this.isLive){
            this.container.appendPanel(this.live);
            this.isLive = true;
            this.expandLink.hide();
        }
    }

});


