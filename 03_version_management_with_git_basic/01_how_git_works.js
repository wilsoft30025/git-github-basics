/* 
    HOW GIT WORKS - SIMPLIFIED
    ---
    Lets say we have a Project Folder called "Web Shop" which contais "all the files" to create your website 
    i.e
        ---
            Project Folder: Web Shop
            Files:
                ...index.html
                ...styles.css
                ...images
        ---

        NOTE:
            If you create this Project on your Computer, this has nothing to do with GIT, i.e a plain folder without any Version Control

            With GIT we are able to turn the folder with the project files into "Working Directory".

            WORKING DIRECTORY
                This means all project files part of this folder which are supposed to be managed by GIT

                To Save the First Version of the Project, we use something called "COMMIT". You can think of Commit as "Snapshot" at the End...

                SNAPSHOT simply contains all the Files and Folders in the initial Project Folder in our Working Directory. The term "Working Directory" and "Commit" are part of the Git World

                Since Project Evolved and Bugs are Fixed with more features added, we are able to keep track of the changes whenever you use Commit to create your Snapshots i.e
                    Commit
                        "Snapshot 1"

                    Commit
                        "Snapshot 2"

                    Commit
                        "Snapshot 3"

                Let's say you did an update on "styles.css",
                    NOTE:
                        Git does not store 2 different styles, BUT it only checks what the initial stage of the css files of the first commit was and which changes was applied to that file. That is all that is stored.

                        So using Git is all about Tracking changes NOT about storing files again and again because that will occupy a lot of memory.

                        This process keeps repeating whenever updates are made on files

                    IMPORTANT:
                        The core knowledge in Git is to turn a project folder into a working directory which means files would be managed by Git and we are now able to create different Commits (snapshots) to track all changes made throughout different stages the project goes through.


            HOW DOES GIT STORE THE DIFFERENT CHANGES
            ---
            This bring us to another core term "BRANCHES". By default Git stores all commits into "MASTER" or "MAIN" branch. This branch contains all changes made throughout our project

*/
