# QA-HW

## Group Assignment 2: Test automation
### Demo And Code Walkthrough Video Link
[![DEMO VIDEO](https://img.youtube.com/vi/DK01yc32o6w/0.jpg)](https://www.youtube.com/watch?v=DK01yc32o6w)
### **[Test Cases Table](https://github.com/v5ln/QA-HW/blob/main/Test%20automation/TestCases.pdf)**
## Group Assignment 1: Static analyzer
### Demo Video Link
[![DEMO VIDEO](https://img.youtube.com/vi/I2BD2XqfJi4/0.jpg)](https://www.youtube.com/watch?v=I2BD2XqfJi4)

### Main File
in this file we called our methods to run the test by giving them the lines of the python text file

### Read File
in this file we created a method thats read the python text file and returns the lines of the file as string variable

### Parameters Test File
in this file we created a method that search for any method definiton line, then calculate the parameters of this method and if number of parameters more than three, it will show to the user that the test faild 

### Attribute Test File
in this file we created multible methods which do the following:
search for method definiton line and store the method name, variables and the required datatypes of the variables
serach for the line thats calls the method and store the giving variables names
search for variables declearation / value assgining to store its datatypes
compare between giving variables datatypes and required datatypes, and see if there is any wrong variable datatype
if there is a mistake it will show to the user that the test faild 

### Magic Test File
in this file we created two methods, one for magic number test and the another one for magic string test
the magic number method search for any number and see if it an decleartion and assging number value into a variable or not if it not then well we assume that this number is a magic number and it will show to the user that the test faild
the magic string method search for any string and see if it an decleartion and assging string value into a variable or not if it not then well we assume that this string is a magic string and it will show to the user that the test faild

### Unreachable Test File
in this file we created a method thats check for multible conditions thats lead to unreachable code :
if there is "if" or "elif" or "while" statment thats equals "False", in this case the lines inside thees statements are unreachable
if there is "while" loop equals "True", in this case the lines outside this infinty loop are unreachable
if there is an "brake" or "return" statment and still there is lines in the same scope after thees statements, in this case the lines after thees statments and in the same scope are unreachable
if there is any of thees cases it will show to the user that the test faild

### Test Output File 
in this file we created a method thats show the user thats the test faild and the line of this failuer
