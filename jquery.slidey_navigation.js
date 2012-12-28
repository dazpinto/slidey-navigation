(function( $ ) {
  $.fn.slidey_navigation = function(options) {
    var elements = $(this);
    var settings = $.extend( {
      'speed'  : 500,
      'effect' : 'slide',
      'container' : '#content',
      'selected' : 'selected'
    }, options);

    return this.each(function() {
      $(this).click(function(e){
        e.preventDefault();

        var target = $(this);
        $(elements).filter('.' + settings.selected).removeClass(settings.selected);

        url = target.attr('href');
        url += " " + settings.container

        $(settings.container).hide({
          effect: settings.effect,
          duration: settings.speed,
          complete: function(){
            $.ajax(url,{
              success: function(data){
                $(settings.container).html(data).show({
                  effect: settings.effect,
                  duration: settings.speed,
                  complete: function(){
                    target.addClass(settings.selected);
                  }
                });
              }
            });
          }
        });
      });
    });
  };
})( jQuery );
