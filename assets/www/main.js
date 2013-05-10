require 'jquery.mobile/jquery.mobile-1.1.0.js';
function addEvent(eventId,target,imgUrl)
{
    $('<div id="'+eventId+'"></div>').appendTo(target);
    $('<img src="'+imgUrl+'">').appendTo(eventId);
    $('<p>"'+title+'"').insertAfter(imgUrl);
}
