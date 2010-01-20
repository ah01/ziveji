var skin = {};

skin['BORDER_COLOR'] = '#4A4A4A';
skin['ENDCAP_BG_COLOR'] = '#FFE1E0';
skin['ENDCAP_TEXT_COLOR'] = '#333333';
skin['ENDCAP_LINK_COLOR'] = '#CB0000';
skin['ALTERNATE_BG_COLOR'] = '#ffffff';
skin['CONTENT_BG_COLOR'] = '#ffffff';
skin['CONTENT_LINK_COLOR'] = '#0000cc';
skin['CONTENT_TEXT_COLOR'] = '#333333';
skin['CONTENT_SECONDARY_LINK_COLOR'] = '#CB0000';
skin['CONTENT_SECONDARY_TEXT_COLOR'] = '#666666';
skin['CONTENT_HEADLINE_COLOR'] = '#333333';
skin['NUMBER_ROWS'] = '8';

skin['DEFAULT_COMMENT_TEXT'] = '- sem p\u0159idejte sv\u016fj koment\xe1\u0159 -';
skin['HEADER_TEXT'] = 'Hodnocen\xed';
skin['POSTS_PER_PAGE'] = '5';

skin['DEFAULT_COMMENT_TEXT'] = '- sem p\u0159idejte sv\u016fj koment\xe1\u0159 -';
skin['HEADER_TEXT'] = 'Koment\xe1\u0159e';
skin['POSTS_PER_PAGE'] = '10';

google.friendconnect.container.setParentUrl('/ziveji/');
google.friendconnect.container.renderMembersGadget({
    id: 'div-6088636895350408121',
    site: '17482516410292132489' 
}, skin);
google.friendconnect.container.renderWallGadget({
    id: 'div-5383161988385432857',
    site: '17482516410292132489',
   'view-params':{
       "disableMinMax":"true",
       "scope":"SITE",
       "startMaximized":"true"
    }
}, skin);