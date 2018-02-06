## Ancur Software Requirements Specification  

### Table of Contents
* 5.1 Introduction
* 5.2 Functional Requirements
* 5.3 Performance Requirements
* 5.4 Environment Requirements

### 5.1 Introduction  
Ancur is a web application that allows users to view and validate documents on the blockchain.
This application utilizes the Stampery API to embed hashes of files and datasets into the Ethereum and Bitcoin blockchains.   
The remainder of this document organizes the software requirements into three categories: functional, performance and environment. Functional requirements include specifications that the application is supposed to have. Performance requirements include the program's abilities in reference to performance. Environment requirements lists the software, hardware, and other resources needed for either the development or deployment or execution of the completed system.
<!-- INSERT high level UML DIAGRAM  of the system components-->

### 5.2 Functional Requirements
#### 5.2.1 Graphical User Interface  
The Graphical User Interface (GUI) for the application provides the user with the ability to choose between the functionality available in the application.  

5.2.1.1 The GUI shall provide a way for users to choose a document to validate.

⋅⋅⋅5.2.1.1.1 The GUI shall provide the user with a for their validated document.  

5.2.1.2 The GUI shall provide the users with a way to view a previous validation.  

5.2.1.3 The GUI *might* allow users to store the validated documents.  

5.2.1.4 The GUI *might* allow users to view the validated documents that they stored.  

<!-- #### 5.2.1 New Validation
The program shall have a way for users to choose a document to validate.  
##### 5.2.1.1 Return Receipt
The program shall provide the user with a receipt for their validated document.  
#### 5.2.2 View Previous Validation
The program shall have a way for users to view a previous validation.  
#### 5.2.3 Document Storage
The program *might* allow users to store the validated documents.  
#### 5.2.4 Stored Document Fetch
The program *might* allow users to view the validated documents that they stored.   -->

### 5.3 Performance Requirements  
#### 5.3.1 New Validation  
5.3.1.1 Should be a button that opens a modal on click to choose a file on the user's device.  
5.3.1.2 A simple "Ancur It" shall begin execution of the document validation.  
5.3.1.3 A receipt should be returned automatically after the validation is completed.  
#### 5.3.2 View Previous Validation  
5.3.1.1 Should be a simple input field for a validated document's receipt.  
5.3.1.2 A simple "Fetch It" shall begin execution of the finding the document's validation.  





5.3 This section should describe any performance requirements that exist for the completed system. Each subsection should reference a performance requirement, and should be given a meaningful name which describes the requirement. For example, if the first performance requirement is to perform a search of a database and return the first record with 10 seconds of clock time, then the first subsection might be labeled
Notice that the requirement says nothing about "clicking a button" or "selecting 'send' from a menu". The lack of such language in requirements reflects the focus of the document on what the application does, NOT on how it does it.
A brief description of the requirement (1-2 paragraphs, as needed) follows the requirement. In this case, one might explain that once the user has finished entering a query at a client, it should take no more than 10 seconds of user clock time for the first result to be returned to the client from the server. One might also explain that the 10 second limit does not include the time required to sort results before displaying them to the user, or that there is no requirement for all results to be returned within the 10 second limit. Other performance requirements might specify a minimum or maximum (specify how much) amount of disk space or memory.

5.4 This section should list the software, hardware, and other resources needed for either the development or deployment or execution of the completed system. If any resource is unusual, provide a brief description of the resource, and a justification for using it. If a resource is not currently available, explain what steps will be taken to acquire it.
