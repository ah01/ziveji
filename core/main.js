
google.load("feeds", "1");
google.load("language", "1");
google.load('search', '1');


google.setOnLoadCallback(function (){
    
    var feeds = new FeedPanel("http://www.zive.cz/rss/sc-47/default.aspx", 25);
    $("#content").appendPanel(feeds);
    
});

