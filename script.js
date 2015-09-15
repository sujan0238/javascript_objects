// Question 1

function remove(){		
		var a = [1,2,3,4,5,6,7,8,9,10];
		document.write(a+"<br>");
		var n = prompt("Enter the count to remove the items from the end of array: ");
		last(a,n);
}
function last(a,n){		
		var i=0;
		var reverseArray = a.reverse();
		document.write("The removed items are ");
		for(i=0;i<n;i++){
			if(i==n-1){
				document.write(reverseArray[i]+".");	
			}
			else{
				document.write(reverseArray[i]+", ");	
			}
		}				
}

//Question 2

function join(){		
		var intro=["Red", "Green", "White", "Black"];
		var result = intro.join();
		document.write("Joint string is <b>"+result+"</b>");		
	}
	
//Question 3

function removeElement(){		
		var array = [1,2,3,4,5,6,7];
		document.write("<h3>The element in array are: "+array+"</h3>");
		var n = Number(prompt("Enter the element to remove:"));
		
		remove_element(array,n);
	}
	function remove_element(array,n){		
		var index = array.indexOf(n);
		if(index > -1){
			array.splice(index,1);	
		}
		document.write("<h3>Final elements in array are: "+array+"</h3");
	}
	
	
//Question 4

function checkEmail(){
		var email = prompt("Enter your email: ");
		var length = email.length;
		var i = 0;
		var j = 0;
		document.write("<br>Your protected email address is <h3>"+email[0]+email[1]+email[2]+email[3]);
		for(i = 4; i<length;i++){
			if(email[i] === '@'){
				for(j=i;j<length;j++){
					document.write(email[j]);
				}
				break;	
			}
			document.write("*");	
		}		
		document.write("</h3>");
	}
	
//Question 5
function combine(){
		var repeatString = prompt("Enter any string: ");
		document.write("The string you entered is <h3>"+repeatString+"</h3><br>");
		var repeatTime = prompt("Enter number of repeatition: ");
		repeat(repeatString,repeatTime);
	}
	
	function repeat(repeatString,repeatTime){
		document.write("So the required string is <h3>");
		var i = 0;
		for(i = 0; i<repeatTime;i++){
			document.write(repeatString);
		}
		document.write("</h3>");
	}
	
//Question 6
function insert(){
		var array = "We are doing some exercises.";
		document.write("Given string is <h3>"+array+"</h3>"); 		
		var insertString = prompt("Enter any string to add to given string: ");
		var insertIndex = prompt("Enter index at which the string gets added: ");
		insert_string(array,insertString,insertIndex);
	}
	
	function insert_string(array,insertString,insertIndex){
		insertString  = insertString+" ";
		document.write("Final string is <h3>"+array.substring(0,insertIndex-1)+insertString+array.substring(insertIndex-1)+"</h3>");
	}
	
//Question 7
function month(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		var month = date.getMonth()+1;
		document.write("Month number: "+month+"<br>");
		month_name(month);
	}

	function month_name(month){
		switch(month){
			case 1:
				document.write("Month is January.");
				break;
			case 2:
				document.write("Month is February.");
				break;
			case 3:
				document.write("Month is March.");
				break;
			case 4:
				document.write("Month is April.");
				break;
			case 5:
				document.write("Month is May.");
				break;
			case 6:
				document.write("Month is June");
				break;
			case 7:
				document.write("Month is July.");
				break;
			case 8:
				document.write("Month is August.");
				break;
			case 9:
				document.write("Month is September.");
				break;
			case 10:
				document.write("Month is October.");
				break;
			case 11:
				document.write("Month is November.");
				break;
			case 12:
				document.write("Month is December.");
				break;
		}
		
	}
	
//Question 8
function date(){		
		var input = prompt("Enter the date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The today is <b>"+date+"</b><br>");
		yesterday(date);
	}

	function yesterday(date){
		date.setDate(date.getDate()-1);
		document.write("The yesterday date was <b>"+date+"</b>");
	}


//Question 9
function alphaNumeric(){
		document.write("Alphanumeric Testing<br>");		
		var input = prompt("Enter a character: ");
		check_alpha(input[0]);
	}

	function check_alpha(input){
		if((input>='a' && input<='z') ||(input>='A' && input<='Z') ||(input>='0' && input<='9')){
			document.write("The input character is an alphanumeric character.");
		}
		else{
			document.write("The input character is not an alphanumeric character.");
		}
	}


//Question 10
function upperCase(){	
		document.write("Check first character of string<br>");
		var input = prompt("Enter a character: ");
		check(input[0]);
	}

	function check(input){
		if(input>='A' && input<='Z'){
			document.write("The first character of string is uppercase.");
		}
		else{
			document.write("The first character of string is not uppercase.");
		}
	}


//Question 11
function count(){		
		var input = prompt("Enter a string: ");
		validate(input);
	}

	function validate(input){
		var i = 0;
		var counter = 0;
		for(i=0;i<input.length;i++){
			if((input[i] === 'a') ||(input[i] === 'e') ||(input[i] === 'i') ||(input[i] === 'o') ||(input[i] === 'u')||(input[i] === 'A') ||(input[i] ==='E') ||(input[i] === 'I') ||(input[i] === 'O') ||(input[i] === 'U')){
				counter++;
			}				
		}
		document.write("The number of vowels in the given string is <br>"+counter+".");
	}