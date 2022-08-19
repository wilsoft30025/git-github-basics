/* 
    GIT FUNDAMENTALS (git --version)
    ----------------------------------------------------------------
        1. In your "LOCAL ROOT PROJECT DIRECTORY", create a local repository using the ff. code. every SINGLE new project you want to integrate git
            --------
            git init
            --------
                hit enter

                NOTE: 
                    ABOVE code initializes the empty GIT Repository (REPO). It creates a hidden FOLDER called 

                    ----
                    .git  (tracks all your commits and changes in your version control)
                    ----
                        To have a looK at all the files in your directory including your HIDDEN FILES, use
                            -----
                            ls -a
                            -----
                
                Take note that to do same for a DIFFERENT PROJECT you must follow this same steps

        2. Create a special file called ".GITIGNORE". This will add all the files that we do not want to have/track in our Repo. 
            -> It prevents uploading sensitive information (api keys, passwords etc.) on GitHub...

            -> Make sure you also hide files to deal with your local settings or user preferences on your machine
                eg. ".DS_Store" files (settings on your machine eg. arranging your icons on your machine places a specific settings in the file)

            ----------
            .gitignore
            ----------
                this is done in the project main root.

                enter the names of files, folders you want to ignore. eg.
                NOTE: You can specify the filename on each new line
                    -> node_modules/
                    -> *.env
                        hide all the ".env" files

                    Rules
                    -----
                        -> # : this symbol is for comments
                        -> * : every extension attached to this means select all

            NOTE: 
            At the left side of VS Code, we have a FORK/BRANCH symbol(source control) which has an integration with GIT. Clicking it will display all the files that are marked as modified

        3. "GIT STATUS" - This command is used to CHECK/SEE/PRINT all your modified files or current status of your file. Use code below to to see list

            ----------
            git status
            ----------
                here you will know all the files and folders that are not yet committed to our repository. Normally is RED COLOUR

        4. how to "COMMIT" files to repo comes in 2 steps

            i. Add files to STAGING AREA 
                (this is an intermediate place you can pick and choose which files inside your working directory that you want to commit). We do this first because you might want to add different files for different commits. It is in AFTER this area that you can then commit your files

            Make sure you DELETE the "CACHE" folder in your project before adding to Staging Area

                ----------      ---------
                git add -A  OR  git add .
                ----------      ---------
                    this will add all the files to "Staging Area"

                    OR

                -----------------
                git add readme.md   to add a specific file to "Staging Area"
                -----------------
                
                    Check if STAGING AREA is successful by using "git status". NB. if it successful, then the colour would be "GREEN"


                IMPORTANT: 
                    UNDO LAST STAGING AREA: Let's say you mistakenly added some files to your staging area and you realise it's a mistake., you can remove your last action by using the ff code below

                    --------------------
                    git rm --cached -r .
                    --------------------

            ii. You can now COMMIT FILES to Version Vontrol

                    ------------------------------
                    git commit -m "Initial Commit"
                    ------------------------------

                    NB: "COMMIT MESSAGE" should be descriptive on the specific changes you made. Usually the first commit is called "initial commit". Message should always be in "Present Tense" meaning doing it NOW

                    This will then "SAVE" all your changes in your REPO. Now all the GREEN files would be removed

                    NOTE: 
                        Commit is a snapshot of all the code at a certain point in time.

                    IMPORTANT: 
                        Make sure you do a commit anytime you do "SIGNIFICANT CHANGES" in your project code base. COMMIT is the CENTRAL point of GIT

                    NOTE: 
                        The moment you change a line of code, you will see a green symbol sign to left of the line of code meaning it is no yet committed and also the actual file will also have a different color

                        After the CHANGES, repeat the process by checking the status and commiting it

                    NOTE: You can see what commit you have made by using the ff CODE

                        -------
                        git log
                        -------
                            This will give you the LOGS of all your committed files
                                Time, Person, committed hash id (which uniquely identify each commit) etc.
                                LATEST LOG on TOP

                    IMPORTANT: The CURRENT Log would be on TOP with
                                    -----------------------------
                                    (HEAD -> master, origin/main)  attached to the log details
                                    -----------------------------

                        TO QUIT from git log use symbol "q"

        5. ROLL BACK (git checkout)

            Assumming you messed up with your current code, you can ROLLBACK / REVERT to the last commmit or a specific commit by using the ff. code

                ------------------------
                git checkout filename.js
                ------------------------
                    Make sure you specify the specific File Name.

                 BEFORE Above:
                    We can use a specific git command to check one of the differences between the current version of a specific file and the last safe point by using the ff. code. Let's say you mistakenly typed something to mess up your code in a specific file. Code below will show you the part that was deleted in "RED" and your current code you typed in "GREEN"

                        ------------------
                        git diff readme.md
                        ------------------

                    First check your status to make sure if it is commited to Staging Area or we just revert it to previous state

*/
