<?php $description = 'Vdara Design by Arctic Mirage Melbourne'; ?>
<?php $keywords = 'Vdara, vdara design'; ?>
<?php $title = 'Vdara | Arctic Mirage'; include("../../includes/header.php"); ?>
    <div class="pr-desc">
    <h1>Vdara</h1>
<p>3D Artist Impressions<br>
Marketing Floor Plans<br>
Logo Design<br>
Brochure <br>
Location Map Illustration<br>
Sales Manual<br>
Display Suite Interior & Graphics<br>
Hoarding Banner Design<br>
Material Board</p>
</div>
    <div id="content_1" class="content">
        <div class="images_container">
            <img src="TAM_WebFolio_81.jpg" alt="">
            <img src="TAM_WebFolio_82.jpg" alt="">
            <img src="TAM_WebFolio_83.jpg" alt="">
            <img src="TAM_WebFolio_84.jpg" alt="">
            <img src="TAM_WebFolio_85.jpg" alt="">
            <img src="TAM_WebFolio_86.jpg" alt="">
            <img src="TAM_WebFolio_87.jpg" alt="">
        </div>
    </div>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script type="">
        (function($){
            $(window).load(function(){
                $("#content_1").mCustomScrollbar({
                    scrollInertia:550,
                    horizontalScroll:true,
                    mouseWheelPixels:330,
                    scrollButtons:{
                        enable:true,
                        scrollType:"pixels",
                        scrollAmount:700
                    },
                    callbacks:{
                        onScroll:function(){ snapScrollbar(); }
                    }
                });
                /* toggle buttons scroll type */
                var content=$("#content_1");
                $("a[rel='toggle-buttons-scroll-type']").html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
                $("a[rel='toggle-buttons-scroll-type']").click(function(e){
                    e.preventDefault();
                    var scrollType;
                    if(content.data("scrollButtons_scrollType")==="pixels"){
                        scrollType="continuous";
                    }else{
                        scrollType="pixels";
                    }
                    content.data({"scrollButtons_scrollType":scrollType}).mCustomScrollbar("update");
                    $(this).html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
                });
                /* snap scrollbar fn */
                var snapTo=[];
                $("#content_1 .images_container img").each(function(){
                    var $this=$(this),thisX=$this.position().left;
                    snapTo.push(thisX);
                });
                function snapScrollbar(){
                    var posX=$("#content_1 .mCSB_container").position().left,closestX=findClosest(Math.abs(posX),snapTo);
                    $("#content_1").mCustomScrollbar("scrollTo",closestX,{scrollInertia:350,callbacks:false});
                }
                function findClosest(num,arr){
                    var curr=arr[0];
                    var diff=Math.abs(num-curr);
                    for(var val=0; val<arr.length; val++){
                        var newdiff=Math.abs(num-arr[val]);
                        if(newdiff<diff){
                            diff=newdiff;
                            curr=arr[val];
                        }
                    }
                    return curr;
                }
            });
        })(jQuery);
    </script>
<?php include("../../includes/footer.php"); ?>