$(document).ready(function() {
        $("#submit").on("click",function(e) {
            e.preventDefault();
          	var year=$("#year").val();
        	  var gender=$("#gender").val();
            $.ajax({
              type: "GET",
          		url: "babynames.php",
          		dataType: "text",
          		data: {year:year,gender:gender},
          		success: function(response) {
            		$("#result").html(response);
          		}    
            });
        });
});