##### 5.1 What's the difference between a component-based architecture and a service-oriented architecture?  
The pieces of the system in a service-oriented architecture are more separated. Component-based architecture is when pieces of the system are loosely coupled components that provide services for each other, whereas service-oriented architecture is where pieces are implemented as services, and often run on separate computers communicating across a network.  

##### 5.2 Suppose you're building a phone application that lets you play tic-tac-toe against a simple computer opponent. It will display high scores stored on the phone, not in an external database. Which architectures would be most appropriate and why?  
No remote services or database are required because this is a simple and self-contained application, so a monolithic architecture  that is rule-based would work.  

##### 5.4 Repeat question 3 [after thinking about it; it repeats question 2 for a chess game] assuming the chess program lets two users play against each other over an Internet connection.  
In this case the program needs to exchange information with another instance of the program across the Internet and there wouldn't be a computer opponent. So removing the computer opponent means the program doesn't need distributed pieces. That being said, you could use web services to allow two programs to communicate over the Internet which would make the application a monolithic rule-based service oriented application.  

##### 5.6 What kind of database structure and maintenance should the ClassyDraw application use?  
The ClassyDraw application doesn't really need a database because it can store each drawing in a separate file, and the user can manage files with operating system tools. In order to maintain the application and deal with letting users delete old files and make backup copies of files, for example, the application could create temporary files while the user is editing a drawing. Then if the program crashes the user can restore the temporary file the next time the application starts.  

##### 5.8 Draw a state machine diagram to let a program read floating point numbers in scientific notation as in +37 or -12.3e+17 (which means -12.3 x 1017). Allow both E and e for the exponent symbol. [Jeez, is this like Dr. Dorin's DFAs, or what???]  
