/* 
    HOW GIT WORKS - SIMPLIFIED
    ---
    Lets say we have a Project Folder called "Web Shop" which contains "all the files" to create your website 
    i.e
        ---------------------
            Project Folder: 
                Web Shop

            Files:
                -> index.html
                -> styles.css
                -> images
        ---------------------

        NOTE:
            If you CREATE this Project on your Computer, this has nothing to do with GIT, 
                i.e it is a plain folder without any Version Management Enhancement

            With GIT we are able to "TURN" the folder with the project files into "WORKING DIRECTORY".

            WORKING DIRECTORY
            ---
                This means ALL PROJECT FILES which are part of this folder supposed to be managed by GIT

                To SAVE the First Version of the Project, we use something called "COMMIT". 
                    You can think of COMMIT as "SNAPSHOT" at the End...

                SNAPSHOT simply contains all the Files and Folders in the Initial Project Folder in our Working Directory. The term "WORKING DIRECTORY" and "COMMIT" are part of the GIT WORLD

                Since Project Evolved and Bugs are Fixed with more features added, we are able to keep track of the changes whenever you use Commit to create your Snapshots i.e
                    ----------------
                    Commit
                        "Snapshot 1"
                    ----------------

                    ----------------
                    Commit
                        "Snapshot 2"
                    ----------------

                    ----------------
                    Commit
                        "Snapshot 3"
                    ----------------

                Let's say you did an UPDATE on "styles.css",
                    NOTE:
                        Git does not store 2 different styles, BUT it only checks what the initial stage of the css files of the first commit was and which changes was applied to that file. That is all that is stored.

                        So using Git is all about "TRACKING CHANGES" NOT ABOUT STORING FILES AGAIN AND AGAIN because that will occupy a lot of memory and space on your computer.

                        This process keeps repeating whenever updates are made on files

                    IMPORTANT:
                        The 'CORE LOGIC' in Git is to TURN a "PROJECT FOLDER" into a "WORKING DIRECTORY" which means files would be managed by Git and we are then able to create different Commits (snapshots) to track all changes made throughout different stages the project goes through.


            HOW DOES GIT STORE THE DIFFERENT CHANGES
            ---
            This bring us to another core term "BRANCHES". By default Git stores all commits into "MASTER" or "MAIN" branch. This branch contains ALL CHANGES made THROUGHOUT our project.
*/
