## Ancur Software Requirements Specification  

### Table of Contents
* 5.1 Introduction
* 5.2 Functional Requirements
* 5.3 Performance Requirements
* 5.4 Environment Requirements

### 5.1 Introduction  
Ancur is a web application that allows users to validate documents on the blockchain.
This application utilizes the Stampery API to embed hashes of files and datasets into the Ethereum and Bitcoin blockchains.   
The remainder of this document organizes the software requirements into three categories: functional, performance and environment. Functional requirements include specifications that the application is supposed to have. Performance requirements include the program's abilities in reference to performance. Environment requirements lists the software, hardware, and other resources needed for either the development or deployment or execution of the completed system.  
#### UML Diagram  
![](/documents/diagrams/ancur-uml-diagram.jpg)  

### 5.2 Functional Requirements
#### 5.2.1 Graphical User Interface  
The Graphical User Interface (GUI) for the application provides the user with the ability to choose between the functionality available in the application.  
5.2.1.1 The GUI shall provide a way for users to choose a document to validate.  
&nbsp;&nbsp; 5.2.1.1.1 The GUI shall provide the user with a timestamp, proofs and receipts for their validated document.  
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.1.1 The timestamp, proofs and receipts shall be displayed to the user in a simple and intuitive way that allows them to copy this information to their clipboard to be saved on their device manually.  
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.1.2 The proofs will return auxiliar hashes to the user that can be concurrently hashed together with the user's document's hash. This allows them to reconstruct the merkle tree at the exact point in time when the stamping took place.  
&nbsp;&nbsp;&nbsp;&nbsp; 5.2.1.1.1.3 The user will receive two receipts after a document's hash is anchored into a blockchain, one will be related to the Ethereum block and the other will be related to the Bitcoin block. Each receipt will contain information about the merkle proof and merkle root. (All of the hashes received between one transaction and the next will be aggregated inside a merkle tree and then the result will be broadcasted with the merkle root).  
5.2.1.2 The GUI shall provide the users with a way to view a previous validation.  
5.2.1.3 The GUI *might* allow users to store the validated documents.  
5.2.1.4 The GUI *might* allow users to view the validated documents that they stored.  

### 5.3 Performance Requirements  
#### 5.3.1 New Validation  
5.3.1.1 Should be a button that opens a modal to choose a file on the user's device.  
5.3.1.2 A simple "Ancur It" shall begin execution of the document validation.  
5.3.1.3 The application shall return a JSON object once the validation has been verified on the Ethereum blockchain within ~30 seconds or on the Bitcoin blockchain within ~5 minutes. The object shall contain a timestamp, proofs and receipts.
#### 5.3.2 Receipt Proving  
5.3.1.1 Should be a simple input field for a validated document's id.  
5.3.1.2 A simple "Fetch It" shall begin execution of proving the document's validation.  

### 5.4 Environment Requirements  
#### 5.4.1 Hardware Requirements  
Ancur can be accessed on any any desktop or laptop computer with a web browser.  
#### 5.4.2 Software Requirements  
Operating System | APIs | Blockchains | Frameworks | Libraries
--- | --- | --- | --- | ---
MacOS | Stampery | Ethereum | Express | Bootstrap
|  | Axios | Bitcoin | React |
|  |  |  |  |  

The application will be written in JavaScript and will use the AngularJS framework for organization in addition to the Bootstrap library for styling. The application will use the Stampery API for most of its functionality. The Stampery API enables proof of existence, integrity and ownership of data by embedding hashes of files and datasets into the Ethereum and Bitcoin blockchains. The APIs and platform that are *italicized* are still being researched and *might* be implemented if time permits.
