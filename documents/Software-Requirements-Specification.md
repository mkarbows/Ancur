## Software Requirements Specification  

### Table of Contents
* 5.1 Introduction
* 5.2 Functional Requirements
* 5.3 Performance Requirements
* 5.4 Environment Requirements

#### 5.1 Introduction  
Anchor is a web application that allows users to view and validate documents on the blockchain.
This application utilizes the Stampery API to embed hashes of files and datasets into the Ethereum and Bitcoin blockchains.   
The remainder of this document organizes the software requirements into three categories: functional, performance and environment. Functional requirements include specifications that the application is supposed to have. Performance requirements include the program's abilities in reference to performance. Environment requirements lists the software, hardware, and other resources needed for either the development or deployment or execution of the completed system.
<!-- INSERT high level UML DIAGRAM  of the system components-->

#### 5.2 Functional Requirements

5.2 The introduction to the functional section should describe the features that the completed system can be expected to have. It should describe what the completed system will do, but avoid describing how it will be accomplished. Implementation details will be included in another document, namely the SDD or DDD. The rest of this section will be divided into sub-sections, one for each of the functions of the system. For example, if your project uses the Model-View-Controller paradigm, there will be three functional requirement subsections, one for each of Model, View, and Controller.
Each sub-subsection should reference a single discrete functional requirement. Each functional requirement should be given a meaningful name which describes the requirement. For example, if the first functional requirement is to provide a graphical user interface to the system, then the first subsection might be labeled
A brief description of the functionality (1-2 paragraphs, as needed) would follow, then the actual requirements statements, in shall statement form, would follow that.
A couple of things to note:
All "shall" statements must be numbered.
NO "will" or "should" statments should be numbered.
ONLY one requirement in a requirements statement. This means, break things up into separate statements. If you see the word "and" you should consider that as (probably) two statements.
"Will" and "should" statements MUST be associated with a requirement statement. The requirement statement should immediately precede the "will" or "should" statment in this case.
There can be more than one "will" or "should" statment associated with any "shall" statement.
When specifying performance requirements (see following), be careful about specifying ranges of performance measures. They may come back to bite you in the end.
Try to write your requirements so they are testable statements.
ALWAYS watch out for "weasel words"!

5.3 This section should describe any performance requirements that exist for the completed system. Each subsection should reference a performance requirement, and should be given a meaningful name which describes the requirement. For example, if the first performance requirement is to perform a search of a database and return the first record with 10 seconds of clock time, then the first subsection might be labeled
Notice that the requirement says nothing about "clicking a button" or "selecting 'send' from a menu". The lack of such language in requirements reflects the focus of the document on what the application does, NOT on how it does it.
A brief description of the requirement (1-2 paragraphs, as needed) follows the requirement. In this case, one might explain that once the user has finished entering a query at a client, it should take no more than 10 seconds of user clock time for the first result to be returned to the client from the server. One might also explain that the 10 second limit does not include the time required to sort results before displaying them to the user, or that there is no requirement for all results to be returned within the 10 second limit. Other performance requirements might specify a minimum or maximum (specify how much) amount of disk space or memory.

5.4 This section should list the software, hardware, and other resources needed for either the development or deployment or execution of the completed system. If any resource is unusual, provide a brief description of the resource, and a justification for using it. If a resource is not currently available, explain what steps will be taken to acquire it.
