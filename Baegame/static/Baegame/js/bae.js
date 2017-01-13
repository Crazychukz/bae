// JavaScript Document

var server_url = "https://safe-everglades-62394.herokuapp.com/game/";
var appId = '2188495621375571';
var appNamespace = 'baegame';
var appCenterURL = '//www.facebook.com/appcenter/' + appNamespace;

$(document).ready(function() {
	$("#maingame").fadeIn(3000);
	$("#welcome_message").fadeIn(3000);
	$("#round_message").fadeIn(4000);
	$("#questions").fadeIn(1000);



    FB.init({
        appId: appId,
        frictionlessRequests: true,
        status: true,
        version: 'v2.8'
    });
	
});

var q_area = document.getElementById("questions");
var startbtn = document.getElementById("start_btn");
var option = document.getElementById("options");
var next01 = document.getElementById("next01");
var first = document.getElementById("first");
var second = document.getElementById("second");
var sec = document.getElementById("maingame");



startbtn.addEventListener("click" , function(){
	var startGame = new XMLHttpRequest();
	startGame.open('GET','https://gist.githubusercontent.com/Crazychukz/c8cf7c59fca3ff42506d940b592b776a/raw/238262cfc375b924ab1af12ae253e2eb90ac2571/firstquestions.json');
	startGame.onload = function () {
		var firstQuestion = JSON.parse(startGame.responseText);
		renderHTML(firstQuestion);
		};
		startGame.send();
		startbtn.classList.add("hide");
		});
function renderHTML(data){
	$("#first").fadeIn(3000);
	option.style.display = 'block';
	var question = data[0].question;
		
				
}
// second
$("#question01").submit( function(){
	
    var Answer01 = $('input[name="question01"]:checked').val();
    $("#id_ans01").val(Answer01);
	var fa = $("#id_ans01").val();

	var Game02 = new XMLHttpRequest();
	Game02.open('GET','https://gist.githubusercontent.com/Crazychukz/c8cf7c59fca3ff42506d940b592b776a/raw/238262cfc375b924ab1af12ae253e2eb90ac2571/firstquestions.json');
	Game02.onload = function () {
		
		
		var secondQuestion = JSON.parse(Game02.responseText);
		renderHTML2(secondQuestion);
		};
		Game02.send();
		next01.classList.add("hide");
		first.classList.add("hide");
		

	    $('<p>You picked up a' + Answer01 + '' + fa + '</p>').insertBefore("#check").fadeIn(1000);
		
		
		});
function renderHTML2(data){
	
	$("#second").fadeIn(3000);
	
	option.style.display = 'block';
}


//third
$("#question02").submit( function(){

    var Answer02 = $('input[name="question02"]:checked').val();
    $("#id_ans02").val(Answer02);
	var fa2 = $("#id_ans02").val();

	var Game03 = new XMLHttpRequest();
	Game03.open('GET','https://gist.githubusercontent.com/Crazychukz/c8cf7c59fca3ff42506d940b592b776a/raw/238262cfc375b924ab1af12ae253e2eb90ac2571/firstquestions.json');
	Game03.onload = function () {


		var thirdQuestion = JSON.parse(Game03.responseText);
		renderHTML3(thirdQuestion);
		};
		Game03.send();
		next02.classList.add("hide");
		second.classList.add("hide");


	    $('<p>You picked up a' + Answer02 +  '' + fa2 + '</p>').insertBefore("#check2").fadeIn(1000);


		});
function renderHTML3(data){

	$("#third").fadeIn(3000);

	option.style.display = 'block';
}


//fourth
$("#question03").submit( function() {
    next03.classList.add("hide");
    third.classList.add("hide");

    var Answer03 = $('input[name="question03"]:checked').val();
    $("#id_ans03").val(Answer03);
    var fa2 = $("#id_ans03").val();

    $("#fourth").fadeIn(3000);
});


