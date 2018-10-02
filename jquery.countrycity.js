(function( $ ) {

    $.fn.CountryCity = function() {

        var sel = this;
 
        var scripts = document.getElementsByTagName( 'script' );
        for (var i = 0; i < scripts.length; i++) {
            if(scripts[i].src.endsWith('jquery.countrycity.js')) {
                var jsonUrl = scripts[i].src.replace('jquery.countrycity.js', 'countries.min.json')
            }
        }

        var jsonData = null;

        $.getJSON(jsonUrl, function( data ) {
            var items = [];
            jsonData = data;

            $.each( data, function( key, val ) {
                items.push( "<option value='" + key + "'>" + key + "</option>" );
            });

            $(sel).html('<option>Country</option>' + items.join(''));
        });

        $(sel).bind( "change", function() {
            var itemsCity = [];
            var opt = $('#' + $(this).prop('id') + ' option:selected').val();
            $.each(jsonData, function( key, val ) {
                if (key == opt) {
                    $.each(val, function(cKey, cVal){
                        itemsCity.push( "<option value='" + cVal + "'>" + cVal + "</option>" );
                    });
                    $('#city').html('<option>City</option>' + itemsCity.join(''));
                }
            });

        });

        return this;
 
    };
 
}( jQuery ));
;