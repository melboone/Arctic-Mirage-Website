$(document).ready( function() {
    
    resizeWindow();
 	$(window).resize(resizeWindow);
 	
 	$(window).resize(pageBlockHeight);
 	
 	$("img.lazy").lazyload({ 
	    effect : "fadeIn",
	    threshold : 300
	});
 	
 	/*$("#pageOuter").swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
	    	scrollRight();
	  	},
	  	swipeRight:function(event, direction, distance, duration, fingerCount) {
	    	scrollLeft();
	  	},
	  	threshold:100
	});*/
    
    //Form clear values
    $(".clearit input, .clearit textarea").live({
		focus: function() {
		    if( this.value == this.defaultValue ) {
				this.value = "";
			}
		},
		blur: function() {
		    if( !this.value.length ) {
				this.value = this.defaultValue;
			}
		}
	});
	
	//Back to Top Click
	$('a.backTop').live('click', function(e){
		e.preventDefault();
	    $('html, body').animate({scrollTop:0}, 'fast');
	    return false;
	});
	
	$('#at3winheaderclose').live('click', function(e){
		$('#at3win').hide();
	});
	
	/*$('.addthis_button_pinterest_pinit').live('click', function(e){
		$('html, body').animate({scrollTop:0}, 'fast');
	});*/
	
	if(jQuery.browser.mobile) {
		//Dialogue Sort Click
		/*$('.sortMenuDialogue div.title').live('click', function(e){
			e.preventDefault();
			if($('.filterBlock').is(':visible')) {
				$('.filterBlock').hide();
				holderText = $('span.holder').text();
				newHolder = $('.active-slide #filter li a.selected').text();
				$('.sortMenuDialogue div.title span span.entry').text(newHolder);
			} else {
				$('.filterBlock').show();
				$('.sortMenuDialogue div.title span span.entry').text('Sort');
			}	
		});*/
		$('.sortMenuDialogue div.title').live({
        	mouseenter:
	           	function()
	           	{
					$('.active-slide .filterBlock').show();
					$('.sortMenuDialogue div.title span span.entry').text('Sort');
	           	},
        	mouseleave:
	           	function()
	           	{
					$('.active-slide .filterBlock').hide();
					holderText = $('span.holder').text();
					newHolder = $('.active-slide #filter li a.selected').text();
					$('.sortMenuDialogue div.title span span.entry').text(newHolder);
	           	}
       		}
    	);
	} else {
		//Dialogue Sort Hover
		$('.sortMenuDialogue div.title .currentCat').live({
        	mouseenter:
	           	function()
	           	{
					$('.active-slide .filterBlock').slideDown('fast');
					$('.sortMenuDialogue div.title span span.entry').text('Sort');
	           	}
	        }
	    );
	    $('.sortMenuDialogue div.title').live({
        	mouseleave:
	           	function()
	           	{
					$('.active-slide .filterBlock').slideUp('fast');
					holderText = $('span.holder').text();
					newHolder = $('.active-slide #filter li a.selected').text();
					$('.sortMenuDialogue div.title span span.entry').text(newHolder);
	           	}
       		}
    	);	
	}
	
	if(jQuery.browser.mobile) {
		//Projects Sort Click
		$('.sortMenu div.title').live('click', function(e){
			e.preventDefault();
			//alert('test');
			if($('.active-slide .filterBlock').is(':visible')) {
				$('.active-slide .filterBlock').hide();
				holderText = $('span.holder').text();
				newHolder = $('.active-slide #filter li a.selected').text();
				$('.sortMenu div.title span span.entry').text(newHolder);
			} else {
				$('.active-slide .filterBlock').show();
				$('.sortMenu div.title span span.entry').text('Sort');
			}	
		});
	} else {
		//Projects Sort Hover
		$('.sortMenu div.title .currentCat').live({
        	mouseenter:
	           	function()
	           	{
					//alert('test');
					$('.active-slide .filterBlock').slideDown('fast');
					$('.sortMenu div.title span span.entry').text('Sort');
	           	}
	        }
	    );
	    $('.sortMenu div.title').live({
        	mouseleave:
	           	function()
	           	{
				//scoate cooment pentru slide up filter block
				// $('.active-slide .filterBlock').slideUp('fast');
				// holderText = $('span.holder').text();
					newHolder = $('.active-slide #filter li a.selected').text();
					$('.sortMenu div.title span span.entry').text(newHolder);
	           	}
       		}
    	);	
	}
	
	
	//Filter Click
	$('.active-slide .sortMenu #filter li a').live('click', function(e){
		e.preventDefault();
		newHolder = $(this).text();
		//console.log(newHolder);
		$('.active-slide .holder').text(newHolder);
		$('.active-slide #filter li a').removeClass('active');
		$(this).addClass('active');
	});
	
	//Left Menu Click
	$('a.leftNavLink').live('click', function(e){
		e.preventDefault();
		scrollLeft();
	});
	
	//Right Menu Click
	$('a.rightNavLink').live('click', function(e){
		e.preventDefault();
		scrollRight();
	});
	
});

$(window).scroll(function(e) {
    scrollCheck();
});

$(window).load(function() {
	//$('html,body').scrollTop(0); 
	isotopeInit();
	pageBlockHeight();
	
	$('.addthis_button_pinterest_pinit').text('Pin it');
	
});

function mapInit() {
	// Create an array of styles.

	  var styles = [
	    {
	      stylers: [
	        /*{ hue: "#cbcbcb" },*/
	        { saturation: -100 }
	      ]
	    },{
	      featureType: "road",
	      elementType: "geometry",
	      stylers: [
	        { visibility: "on" }
	      ]
	    },{
	      featureType: "road",
	      elementType: "labels",
	      stylers: [
	        { visibility: "on" }
	      ]
	    }
	  ];
	
	  // Create a new StyledMapType object, passing it the array of styles,
	  // as well as the name to be displayed on the map type control.

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

	var mapOptions = {
      zoom: 16,
      //center: new google.maps.LatLng(-37.798671,144.977859),
      center: new google.maps.LatLng(-37.798671,144.977859),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

    var image = 'http://stage.elitepsdcoding.com/ssw/wp-content/themes/ssw/images/map-icon.png';
    var myLatLng = new google.maps.LatLng(-37.798671,144.977859);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

function pageBlockHeight() {
	var wh = $(window).height();
	//console.log(wh);
	var ph = $(document).height();
	//console.log(ph);
	if(ph < wh) {
		//$(".active-slide").css({'height':wh+'px'});
	} else {
		//$(".active-slide").css({'height':ph+'px'});
	}
	
}

function scrollLeft() {
	if ($(".inactive-left").length > 0){
		scrollPadding();
	    $('.staticMenu').hide();
		var ww = $(window).width();
		$('.active-slide #branding .logo').animate({opacity: 0}, 100);
		$('.active-slide #branding .leftNavLink').hide();
		$('.active-slide #branding .rightNavLink').hide();
		$('.active-slide').addClass('transition');
		$('.inactive-left').addClass('transition');
		$('.inactive-left #branding .logo').animate({opacity: 0}, 0);
		$('.inactive-left #branding .leftNavLink').hide();
		$('.inactive-left #branding .rightNavLink').hide();
		$('.inactive-left').css('display' , 'block');
		$('.inactive-left').animate({'left': '0px', useTranslate3d:true}, 500, 'easeInCubic');
		$('.active-slide').animate({'left': ww+'px', useTranslate3d:true}, 500, 'easeInCubic', function(){
	    
	        $('.inactive-right').css({'left':'-'+ww+'px'});
	        $('.inactive-right').addClass('inactive-left');
	        $('.inactive-right.inactive-left').removeClass('inactive-right');
	        $('.transition.active-slide').addClass('inactive-right');
	        $('.inactive-right').removeClass('transition active-slide');
	        $('.transition.inactive-left').addClass('active-slide');
	        $('.active-slide').removeClass('transition inactive-left');
	        $('.inactive-right').css('display' , 'none');
	        
	        $('.active-slide #branding .logo').animate({opacity: 1}, 100);
			$('.active-slide #branding .leftNavLink').show();
			$('.active-slide #branding .rightNavLink').show();
	        
	        $('.active-slide').css('padding-top' , '0');
	        $('html,body').scrollTop(0); 
	        scrollCheck();
			slideUpdate();
			isotopeInit();
			resizeWindow();
			pageBlockHeight();
		    mapInit();
	    });
	};
	
}

function scrollRight() {
	if ($(".inactive-right").length > 0){
		scrollPadding();
	    $('.staticMenu').hide();
		var ww = $(window).width();
		$('.active-slide #branding .logo').animate({opacity: 0}, 100);
		$('.active-slide #branding .leftNavLink').hide();
		$('.active-slide #branding .rightNavLink').hide();
		$('.active-slide').addClass('transition');
		$('.inactive-right').addClass('transition');
		$('.inactive-right #branding .logo').animate({opacity: 0}, 0);
		$('.inactive-right #branding .leftNavLink').hide();
		$('.inactive-right #branding .rightNavLink').hide();
		$('.inactive-right').css('display' , 'block');
		$('.inactive-right').animate({'left': '0px', useTranslate3d:true}, 500, 'easeInCubic');
		$('.active-slide').animate({'left': '-'+ww+'px', useTranslate3d:true}, 500, 'easeInCubic', function(){
	    
	        $('.inactive-left').css({'left':'-'+ww+'px'});
	        $('.inactive-left').addClass('inactive-right');
	        $('.inactive-left.inactive-right').removeClass('inactive-left');
	        $('.transition.active-slide').addClass('inactive-left');
	        $('.inactive-left').removeClass('transition active-slide');
	        $('.transition.inactive-right').addClass('active-slide');
	        $('.active-slide').removeClass('transition inactive-right');
	        $('.inactive-left').css('display' , 'none');
	        
	        $('.active-slide #branding .logo').animate({opacity: 1}, 100);
			$('.active-slide #branding .leftNavLink').show();
			$('.active-slide #branding .rightNavLink').show();
	        
	        $('.active-slide').css('padding-top' , '0');
	        $('html,body').scrollTop(0); 
	        scrollCheck();
			slideUpdate();
			isotopeInit();
			resizeWindow();
			pageBlockHeight();
		    mapInit();
	    });
   }
}

function scrollPadding() {
    var scrollTop = $(window).scrollTop();
    $('.inactive-left').css('padding-top' , scrollTop);
    $('.inactive-right').css('padding-top' , scrollTop);
}

function scrollCheck() {
	headerHeight = $('.active-slide #branding').innerHeight();
    var scrollTop = $(window).scrollTop();
    if(scrollTop > (headerHeight-48)) {
    	$('.active-slide .staticMenu').show();
    } else {
    	$('.active-slide .staticMenu').hide();
    }
}

function isotopeInit() {
	$.Isotope.prototype._getCenteredMasonryColumns = function() {
	    this.width = this.element.width();
	    
	    var parentWidth = this.element.parent().width();
	    
	                  // i.e. options.masonry && options.masonry.columnWidth
	    var colW = this.options.masonry && this.options.masonry.columnWidth ||
	                  // or use the size of the first item
	                  this.$filteredAtoms.outerWidth(true) ||
	                  // if there's no items, use size of container
	                  parentWidth;
	    
	    var cols = Math.floor( parentWidth / colW );
	    cols = Math.max( cols, 1 );
	
	    // i.e. this.masonry.cols = ....
	    this.masonry.cols = cols;
	    // i.e. this.masonry.columnWidth = ...
	    this.masonry.columnWidth = colW;
	  };
	  
	  $.Isotope.prototype._masonryReset = function() {
	    // layout-specific props
	    this.masonry = {};
	    // FIXME shouldn't have to call this again
	    this._getCenteredMasonryColumns();
	    var i = this.masonry.cols;
	    this.masonry.colYs = [];
	    while (i--) {
	      this.masonry.colYs.push( 0 );
	    }
	  };
	
	  $.Isotope.prototype._masonryResizeChanged = function() {
	    var prevColCount = this.masonry.cols;
	    // get updated colCount
	    this._getCenteredMasonryColumns();
	    return ( this.masonry.cols !== prevColCount );
	  };
	  
	  $.Isotope.prototype._masonryGetContainerSize = function() {
	    var unusedCols = 0,
	        i = this.masonry.cols;
	    // count unused columns
	    while ( --i ) {
	      if ( this.masonry.colYs[i] !== 0 ) {
	        break;
	      }
	      unusedCols++;
	    }
	    
	    return {
	          height : Math.max.apply( Math, this.masonry.colYs ),
	          // fit container to columns that have been used;
	          width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
	        };
	  };
	
	$(function(){

	  var $container = $('#container');
	  var ww = $(window).width();
	  
	  if(ww < 481) {
	  	  var $container = $('#container');
			$container.isotope({
		        masonry: {
		          columnWidth: 134
		        },
		        resizesContainer: true,
		        animationEngine : "best-available",
		        sortBy: 'original-order',
		        getSortData: {
		          number: function( $elem ) {
		            var number = $elem.hasClass('element') ? 
		              $elem.find('.number').text() :
		              $elem.attr('data-number');
		            return parseInt( number, 10 );
		          },
		          alphabetical: function( $elem ) {
		            var name = $elem.find('.name'),
		                itemText = name.length ? name : $elem;
		            return itemText.text();
		          }
		        }
		     });
	  } else {
	      $container.isotope({
	        masonry: {
	          columnWidth: 222
	        },
	        filter: '.all',
	        resizesContainer: true,
	        animationEngine : "best-available",
	        sortBy: 'original-order',
	        getSortData: {
	          number: function( $elem ) {
	            var number = $elem.hasClass('element') ? 
	              $elem.find('.number').text() :
	              $elem.attr('data-number');
	            return parseInt( number, 10 );
	          },
	          alphabetical: function( $elem ) {
	            var name = $elem.find('.name'),
	                itemText = name.length ? name : $elem;
	            return itemText.text();
	          }
	        }
	      });
	  }
	    
    
      
      var $optionSets = $('.option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        //pageBlockHeight();
        return false;
      });
      
      $('#container').css({'visibility':'visible'});
      
  });
}

function slideUpdate() {
	var ww = $(window).width();
	//console.log(ww);
	//$('span.leftLoading').hide();
	$('.inactive-left').css({'left':'-'+ww+'px'});
	$('.inactive-right').css({'left':ww+'px'});
	$('.active-slide #branding a.rightNavLink').show();
	$('.active-slide #branding a.leftNavLink').show();
	//$('span.leftLoading').hide();
}

function resizeWindow() {
	headerHeight = $('.active-slide #branding').innerHeight();
	var ww = $(window).width();
	var wh = $(window).height();
	slideUpdate();
	//pageBlockHeight();
	
	if(ww > 1270) {
		newIndent = Math.ceil((ww-1210) / 2);
		$('span.leftLoading').css('left', newIndent+'px');
		$('a.leftNavLink').css('left', newIndent+'px');
		$('a.leftNavSingleLink').css('left', newIndent+'px');
		$('a.rightNavLink').css('right', newIndent+'px');
		$('a.rightNavSingleLink').css('right', newIndent+'px');
		$('.staticMenuInner').css({'width':'1210px','margin':'0px auto'});
	} else {
		$('span.leftLoading').css('left', '4%');
		$('a.leftNavLink').css('left', '4%');
		$('a.leftNavSingleLink').css('left', '4%');
		$('a.rightNavLink').css('right', '4%');
		$('a.rightNavSingleLink').css('right', '4%');
		$('.staticMenuInner').css({'width':'92%','margin':'0px 4%'});
	}
	
	if(ww < 481) {
		var $container = $('#container');
		$container.isotope({
	        masonry: {
	          columnWidth: 134
	        },
	        resizesContainer: true,
	        animationEngine : "best-available",
	        sortBy: 'original-order',
	        getSortData: {
	          number: function( $elem ) {
	            var number = $elem.hasClass('element') ? 
	              $elem.find('.number').text() :
	              $elem.attr('data-number');
	            return parseInt( number, 10 );
	          },
	          alphabetical: function( $elem ) {
	            var name = $elem.find('.name'),
	                itemText = name.length ? name : $elem;
	            return itemText.text();
	          }
	        }
	     });
	} else {
		var $container = $('#container');
		$container.isotope({
	        masonry: {
	          columnWidth: 222
	        },
	        resizesContainer: true,
	        animationEngine : "best-available",
	        sortBy: 'original-order',
	        getSortData: {
	          number: function( $elem ) {
	            var number = $elem.hasClass('element') ? 
	              $elem.find('.number').text() :
	              $elem.attr('data-number');
	            return parseInt( number, 10 );
	          },
	          alphabetical: function( $elem ) {
	            var name = $elem.find('.name'),
	                itemText = name.length ? name : $elem;
	            return itemText.text();
	          }
	        }
	     });
	}
	
};

/**  * jQuery.browser.mobile (http://detectmobilebrowser.com/)  *
 *  jQuery.browser.mobile will be true if the browser is a mobile device  **/
(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);