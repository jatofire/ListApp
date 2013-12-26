// This is our javascript to power the app44

function btnClick(index) {
	if(index == 0) {
		$("#list-table").show();
		$("#add-form").hide();
	} else {
		$("#add-form").show();
		$("#list-table").hide();
	}
}


var j ='[{"id":"1","name":"test1"},{"id":"2","name":"test2"},{"id":"3","name":"test3"},{"id":"4","name":"test4"},{"id":"5","name":"test5"}]';

var json = $.parseJSON(j);

//var to hold the html
var st = "";

for(var i = 0 ; i < 100; i++) {
	
	st += "<div class=\"list-table-item\"><div class=\"list-table-item-heading\">TOM</div>" + "BERENGER" + "</div>";


}

$("#list-table").html(st);




