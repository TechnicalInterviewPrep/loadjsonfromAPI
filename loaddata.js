$(function() {
$.ajax({
  url: 'http://elections.huffingtonpost.com/pollster/api/charts.json',
  dataType: "jsonp",
  jsonpCallback: "pollsterCallback",
  cache: true,
  success: function(data) {
     data.forEach(function(a){
       $('select').append($('<option>', { value : a.title })
          .text(a.title));
     });
  }
});
});