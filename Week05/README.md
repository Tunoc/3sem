#H1 Title: Week 5

Day: (28-Tu)
	Notes for the project -
		I completed the entire assignment, except for the test since we were told that we don't need to do them
		because we are going to learn about, how to test, in our 3 week.
		The exercise can be found in the folder of day 28.
		After this day we were expected to:
		* Redegøre for ORM frameworks generelt og deres pros/cons
		* Redegøre for forskellen mellem JPA og andre persistensmetoder
		* Redegøre for de mest brugte klasser og metoder i JPA
		* Oprette et basalt Java projekt med JPA og benytte annoteringer til at persistere entiteter i database
		* Redegøre for og demonstrere brug af begreber som EntityManager, EntityManagerFactory samt Persistence.xml
		* Demonstrere Insert og Select
		All of the above goals were covered by the solutions that we see in the folder of day 28.

Day: (29-We)
	Notes for the project -
		I completed the entire assignment.
		The exercises can be found in the folder of day 29.
		After this day we were expected to:
		* Redegøre for begrebet Restfull webservices
		* Redegøre for konventioner ved opbygning af REST api'er
		* Oprette et Java projekt med REST endpoints
		* Implementere kode indeholdende de mest grundlæggende REST annotationer (GET kun)
		* Håndtere parametre i REST endpoints i egne kodeeksempler
		* Redegøre for, og demonstrere det udleverede start project til brug for JPA/REST-projekter
		All of the above goals were covered and used in the solutions of the exercises for that day, seen in folder
		of day 29.
		Answer - 
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
		I completed the entire assignment.
		The exercises can be found in the folder of day 29.
		* Designe simple GET-endpoints med brug af en underliggende database tilgået via JPA
		* Kunne redegøre for nødvendigheden af i brug af JSON
		* Kunne redegøre for korrekt JSON syntaks
		* Kunne redegøre for Data Tranfer Objects (DTO's) og serialisering mellem Java objekter og JSON
		* Kunne konvertere frem og tilbage mellem Java objekter og JSON i egen kode
		All of the above goals were covered and used in the solutions of the exercises for that day, seen in folder
		of day 30. - I depolyed the server and it also works, that wasn't a requirement from the exercise.
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
		I completed the entire assignment.
		The exercises can be found in the folder of day 29.
		All of the above goals were covered and used in the solutions of the exercises for that day, seen in folder
		of day 31. - I depolyed the server and it also works, that wasn't a requirement from the exercise.
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
