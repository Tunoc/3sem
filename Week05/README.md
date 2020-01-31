Title: Week 5

Day: (28-Tu)
	Notes for the project -
	Didn't know how to make unit test for this application.
	We were told that we are going to learn about Test for this type of application in our 3 week.


Day: (29-We)
	Notes for the project -
	To answer the question from Exercise 2: Json endpoint - 3.a
	The content that we see is JSON format - Key Value pair with a HTTP connection ok code 200 - 
	And the more info about the webpage.
	HTTP/1.1 200 
	Content-Type: application/json
	Content-Length: 31
	Date: Wed, 29 Jan 2020 12:50:20 GMT
	Keep-Alive: timeout=20
	Connection: keep-alive


Day: (30-Th)
	Notes for the project -
	- The application is on digital ocean.
		Start by using the /populate/database path, in order to populate the database 
		and allowing the other paths to work properly.
		(Only added dummy data with the populated database path)
	http://167.71.45.165:8080/Week1Day4-1.0-SNAPSHOT/api/employee
	url/parts to add after the "/employee" in the link up above:
	/populate/database
	/name/{name}
	/highestpaid
	/{id}
	name and id are variables that can be changed.

Day: (31-Fr)
	Notes for the project -
	- The application is on digital ocean.
		Start by using the /BankMember/populate/database path, in order to populate the database 
		and allowing the other paths to work properly.
		(Only added dummy data with the populated database path)
		There is a difference between the paths because the assignment requested that we have seperate
		sets of data for "Bank Members" or just regular members. I used DTO's to wrap the bankcustomers
		and therby limiting the data that gets out by just using the normal /bankcustomer path.
	http://167.71.45.165:8080/JPA-Rest-and-DTO-1.0-SNAPSHOT/api/bankcustomer
	url/parts to add after the "/bankcustomer" in the link up above:
	/BankMember/populate/database
	/BankMember/all
	/BankMember/add/{firstname}/{lastname}/{accountnumber}/{balance}/{customerranking}/{internalinfo}
	/name/{name}
	/id/{id}
	All the variables that can be changed are between {} signs.






