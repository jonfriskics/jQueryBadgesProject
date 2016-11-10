$(function() {

  // your code will go here
// https://www.codeschool.com/users/110833.json

  $.ajax({
    url: 'https://www.codeschool.com/users/110833.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(c) {
        var courseDiv = $('div').addClass('course');
        courseDiv.append('h3').text(c.title);
        courseDiv.append('img').attr('src',c.badge);
        courseDiv.append('a').attr({'href':c.url,'target':'_blank'}).addClass('btn').addClass('btn-primary').text('See Course');
        $('#badges').append(courseDiv);

      })
    }
  })
});
