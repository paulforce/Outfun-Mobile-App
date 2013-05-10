$(document).ready(function() {
     $.ajax({
     url: "www.outfun.com/json",
     type: "get",
     dataType:'jsonp',
     success:
         function(response){
         var length=response.length
         var textToInsert = [];
         var j=0;
         for(i = 0; i < length; i++){
             textToInsert[j++] ='<li class="well"><div class="row-fluid"><div class="span2"><img class="img-polaroid" src="'
             textToInsert[j++] = response[i].imageUrl
             textToInsert[j++] ='"/></div><div class="span9"><div class="row-fluid"><div class="span10"><div class="row-fluid"><div class="offset1 span11"><h4>'
             textToInsert[j++] = response[i].title
             textToInsert[j++] = '</h4></div></div></div><!-- title --><div class="span2"><p><a class="btn" href="map.html?latitude="'
             textToInsert[j++] = response[i].latitude
             textToInsert[j++] = '"&longitude="'
             textToInsert[j++] = response[i].longitude
             textToInsert[j++] = '"">Locate</a></p></div></div><div class="row-fluid"><div class="offset1 span11"><p>'
             textToInsert[j++] = response[i].description
             textToInsert[j++] = '</p></div></div></div></div></li>'
             }
         },
         error:
             function (){
             alert("Communication error");
             }});
 $("#list").append(textToInsert.join(''));
});