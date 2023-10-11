function validateFirstName() {
	var fName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if(rel.test(fName)){
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else {
		document.getElementById("firstNamePrompt").style.color = "Red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2-15 characters</strong>";
		return false;
	}
}

function validateLastName() {
	var fName = document.getElementById("LastName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,25}$/;
	
	if(rel.test(fName)){
		document.getElementById("LastNamePrompt").style.color = "green";
		document.getElementById("LastNamePrompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else {
		document.getElementById("LastNamePrompt").style.color = "Red";
		document.getElementById("LastNamePrompt").innerHTML = "<strong>Enter 2-25 characters</strong>";
		return false;
	}
}


function Outputform() {

		
		 var firstName=document.getElementById("firstName").value;
		 var lastName=document.getElementById("LastName").value;
		 var userName = lastName + ", " + firstName;
		 var phone = document.getElementById("Number").value;
		 var email = document.getElementById("email").value;
		 var Faculty = document.getElementById("Faculty").value;
		 var pass = document.getElementById("pwd").value;
		 var checkBox = document.getElementById("Rules and Liscence").checked;
		 var mal = document.getElementById("gender_Male").checked;
		 var fem = document.getElementById("gender_Female").checked;
	
		 if(firstName.trim() == "" || lastName.trim() == "" || userName.trim() == "" || phone.trim() == "" || email.trim() == "" || pass.trim()=="" )	//trim for spaces
			 PrintErrorMes();
		else
		{		
			
			if(checkBox == true)	
				{	
							if(document.getElementById('gender_Male').checked) 
							{
								alert("\n"+ "Name: " + firstName + " " + lastName+ "\n" + "Gender: Male "  + "\n" + "Phone Number: " + phone + "\n" + "Email: " + email + "\n" + "Faculty: " + Faculty);	
								alert( "\n" + "Thank you " + userName + " for applying. Your submission has been recorded Good Luck");
				
							}else if(document.getElementById('gender_Female').checked) 
							{
								alert("\n"+ "Name: " + firstName + " " + lastName+ "\n" + "Gender: Female "  + "\n" + "Phone Number: " + phone + "\n" + "Email: " + email + "\n" + "Faculty: " + Faculty);	
								alert( "\n" + "Thank you " + userName + " for applying. Your submission has been recorded Good Luck");
				
							}
							
						
					// //var Gendertype = document.getElementById("gender").value;
					// alert("\n"+ "Name: " + firstName + " " + lastName+ "\n" + "Gender: "  + "\n" + "Phone Number: " + phone + "\n" + "Email: " + email + "\n" + "Faculty: " + Faculty);	
					// alert( "\n" + "Thank you " + userName + " for applying. Your submission has been recorded Good Luck");
				}
			else
				{
					PrintErrorMes();
				}
		
		}
		
}

function PrintErrorMes()
{
	document.getElementById("FormFilled").innerHTML = "Please fill the required fields";
}



// function test(ele)
// {
	
		// let other_faculties=document.createElement("input");
		// let table= ele.parentNode;
		// Array.prototype.insertBefore.call(table,insertBefore(other_faculties,Array.prototype.indexOf.call(table.children, document.getElementById("gender"))));;
	
// }










