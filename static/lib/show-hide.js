"use strict";

(function() {

    $(document).ready(function() {
        $('body').on('click', '[data-iframely-embed]', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $container = $this.parent().parent().find('.iframely-container');

            if ($container.is(':visible')) {
                $this.text('show details');
                $this.attr('data-iframely-embed', $container.html());
                $container.slideUp(200, function() {
                    $container.html('');
                });
                //$container.hide();
                //$container.html('');
            } else {
                $this.text('hide details');
                var html = $this.attr('data-iframely-embed');
                $container.html(html).slideDown(200);
            }
        });
    });
}());