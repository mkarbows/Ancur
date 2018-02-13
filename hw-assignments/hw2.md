##### 5.1 What's the difference between a component-based architecture and a service-oriented architecture?  
The pieces of the system in a service-oriented architecture are more separated. Component-based architecture is when pieces of the system are loosely coupled components that provide services for each other, whereas service-oriented architecture is where pieces are implemented as services, and often run on separate computers communicating across a network.  

##### 5.2 Suppose you're building a phone application that lets you play tic-tac-toe against a simple computer opponent. It will display high scores stored on the phone, not in an external database. Which architectures would be most appropriate and why?  
No remote services or database are required because this is a simple and self-contained application, so a monolithic architecture  that is rule-based would work.  

##### 5.4 Repeat question 3 [after thinking about it; it repeats question 2 for a chess game] assuming the chess program lets two users play against each other over an Internet connection.  
In this case the program needs to exchange information with another instance of the program across the Internet and there wouldn't be a computer opponent. So removing the computer opponent means the program doesn't need distributed pieces. That being said, you could use web services to allow two programs to communicate over the Internet which would make the application a monolithic rule-based service oriented application.  

##### 5.6 What kind of database structure and maintenance should the ClassyDraw application use?  
The ClassyDraw application doesn't really need a database because it can store each drawing in a separate file, and the user can manage files with operating system tools. In order to maintain the application and deal with letting users delete old files and make backup copies of files, for example, the application could create temporary files while the user is editing a drawing. Then if the program crashes the user can restore the temporary file the next time the application starts.  

##### 5.8 Draw a state machine diagram to let a program read floating point numbers in scientific notation as in +37 or -12.3e+17 (which means -12.3 x 1017). Allow both E and e for the exponent symbol. [Jeez, is this like Dr. Dorin's DFAs, or what???]  
![alt text](Ancur/hw-assignments/stateMachineDiagram.png)  

##### 6.1 Consider the ClassyDraw classes Line, Rectangle, Ellipse, Star, and Text. What properties do these classes all share? What properties do they not share? Are there any properties shared by some classes and not others? Where should the shared and nonshared properties be implemented?  
They all share the properties needed for drawing like background and foreground color, and they are all able to define their drawing position like UpperLeft, Width, and Height. The unshared properties are Font and String that are only for the Text. And then the properties that can be shared by some classes and not others are FillColor, LineThickness and DashStyle. The Rectangle, Ellipse, Star, and Line all need LineThickness and DashStyle, but the only the Rectangle, Ellipse, and Star need FillColor.  

##### 6.2 Draw an inheritance diagram showing the properties you identified for Exercise 1. (Create parent classes as needed, and don't forget the Drawable class at the top.)  
![alt text](Ancur/hw-assignments/inheritanceHierarchy6-2.png)  

##### 6.3 Assuming a Supplier is someone who supplies products for your business, draw an inheritance diagram showing the relationships among these classes. (Hint: Add extra classes if necessary.)  
![alt text](Ancur/hw-assignments/inheritanceHierarchy6-3.png)  

##### 6.6 Suppose your company has many managerial types such as department manager, project manager, and division manager. You also have multiple levels of vice president, some of whom report to other manager types. How could you combine the Salaried, Manager, and VicePresident types you used in Exercise 3? Draw the new inheritance hierarchy.  
You could make the Boss property not be filled in for top-level vice presidents who have no one to report to. You would make the Employees property empty for bottom-level employees that are not managers of anything. The Salaried class could have the additional properties of Office, Salary, Boss, and Employees.  
![alt text](Ancur/inheritanceHierarchy6-6.png)  
