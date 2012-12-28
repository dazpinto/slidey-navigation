(function( $ ) {
  $.fn.slidey_navigation = function(options) {
    var elements = $(this);
    var settings = $.extend( {
      'show' : {
        effect : 'fade',
        duration: 500
      },
      'hide' : {
        effect : 'slide',
        duration: 500
      },
      'container' : '#content',
      'selected' : 'selected'
    }, options);

    return this.each(function() {
      $(this).click(function(e){
        e.preventDefault();

        var target = $(this);
        $(elements).filter('.' + settings.selected).removeClass(settings.selected);

        url = target.attr('href');
        url += " " + settings.container;

        $(settings.container).hide(
          $.extend(settings.hide, {
            complete: function(){
              $.ajax(url,{
                success: function(data){
                  $(settings.container).html(data).show(
                    $.extend(settings.show, {
                      complete: function(){
                        target.addClass(settings.selected);
                      }
                    })
                  );
                }
              });
            }
          })
        );
      });
    });
  };
})( jQuery );
