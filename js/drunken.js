$(function() {

    $('body').append('<div id="drunken" style="width: 100%; position: absolute; top: 10px; opacity:0.5"></div>');
    $('body').clone().appendTo('#drunken');

    /*
     var mylayer=$('body').clone();
     $("#from").clone().appendTo($("#to"));
     mylayer.remove('script');
     $("#drunken").css("left", $("#drunken").position().left).circulate({
     sizeAdjustment: 160,
     speed: 1000,
     width: 2,
     height: 1,
     loop: true,
     zIndexValues: [0, 0, 0, 0]
     });
     */
});