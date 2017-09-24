https://gist.github.com/saideepd/27273854f94c51cb6637a141a7f59d13 (Below steps can be found here too)

### Following are the steps to connect Database and Feedback Page using PHP:

1.  Install XAMPP
2.  Start MySQL & Apache Servers
3.  Go to web browser and type localhost
4.  Click on phpMyAdmin
5.  Click on New on left side to create a new database
6.  Enter the Database Name & click Create (dbconn)
7.  Your new Database must be created and visible on left side
8.  Click on the newly created Database (dbconn)
9.  Click on Create Table	
10. Enter the Table Name (review) and Number of Columns (3) & click Go
11. Click on the Newly created Table (review)
12. Now click on Privileges tab above
13. Now select the Username "root" and Click "Edit Privileges" in same row
14. Click on Change Password above
15. Enter a new Password and retype it and click Go (pass@123)

Make the following changes in the particular file as below:
1.  Now go to "C:\xampp\phpMyAdmin" folder
2.  Open the "config.inc.php" file and enter the Password you created recently (pass@123) and save the file
3.  Check whether the "Username" & "Password" match the ones enterd during intial setup, if not, just change them and make them same.

Steps for getting connected with Database:
1.  Now Copy the following files files to a new folder named "mumbai" at "C:\xampp\htdocs\mumbai":
    Feedback.html 
    dbConn.php
    feedbackFormProcess.php
    and other required 

Finally Opening the Feedback Page and submitting the Feedback:
1.  Now open your browser and type "http://localhost/mumbai/Feedback.html" to fill the Feddback form
2.  Click the "Submit" button to get a response as "Thank You for the Feedback. You should receive a reply shortly."


Checking whether Feedback is saved to Dataabase:
1.  Go to web browser and type "localhost"
2.  Click on "phpMyAdmin"
3.  Click on the database name "dbconn"
4.  Click on the table name "review"
5.  There you go... All the feedbacks entered are visible in a table format.

Note:
Make sure the XAMPP Server is running.
