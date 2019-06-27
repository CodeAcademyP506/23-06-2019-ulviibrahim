$(".titleInput").val()
 $(".rate").focus(function(){
    $(".rate").val(this.val, " ")
    $(".rate").css("border-color","black")

 })

 $(".titleInput").focus(function(){
    $(".titleInput").val(this.val, " ")
    $(".titleInput").css("border-color","black")

 })



 
$('.btnAdd').click(function(){


   

    if(isNaN($('.rate').val())!=true&&$('.rate').val()<10){
        if($('input').val()!=""){
        
var sira=$(".titleInput").val()
            $('table').append( ' <tr><td>'+sira+'</td><td>'+$(".rate").val()+'</td><td><button  id= "btnDelete">  Delete </button></td></tr>')
           
            $('#xeta').css('display', 'none')


            }
            
            else{
            $("input").css("border-color","red")
           $("#xeta").css({
               "display":"inline",
                "    margin": "0 auto;"
                
            })
            
            }
    } else{
alert('Sıra nömrəsini düzgün daxil edin')
    }
    $(".titleInput").val( "Movies Title")
  $(".rate").val( "Rate Movies from 0 to 10")
  
  



  
   
})


$('table').on("click",'#btnDelete',function() {

    
$(this).parents('tr').remove();
      
})


$('table').on("click",'#btnChange',function() {

 console.log($(this).parents('tr').children('td')[0]) 
  })

$('table').on("click", "#up", function(){
    sortUpName() 
    $('#up').addClass("green")
})



$('table').on("blur", "#up", function(){
  sortUpName() 
  $('#up').removeClass("green")
})


$('table').on("click", "#downName", function(){
    sortDownName() 
    $('#downName').addClass("green")
})

$('table').on("blur", "#downName", function(){
  sortDownName() 
  $('#downName').removeClass("green")
})
    
$('table').on("click", "#upraiting", function(){
  sortUpNumber() 
  $('#upraiting').addClass("green")
})

$('table').on("blur", "#upraiting", function(){
  sortUpNumber() 
  $('#upraiting').removeClass("green")
})

$('table').on("click", "#downraiting", function(){
  sortDownNumber() 
  $('#downraiting').addClass("green")

})

$('table').on("blur", "#downraiting", function(){
 
  $('#downraiting').removeClass("green")

})

function sortUpName() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
   
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      
      rows = $("table").children("tr");

      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
      }
    }
  }

  function sortDownName() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      
      rows = $("table").children("tr");
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
      }
    }
  }
  function sortUpNumber() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
   
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      
      rows = $("table").children("tr");

      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
      }
    }
  }

  function sortDownNumber() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
   
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      
      rows = $("table").children("tr");

      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
      }
    }
  }
