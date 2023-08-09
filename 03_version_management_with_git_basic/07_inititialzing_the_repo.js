/* 
    INITIALIZING THE REPOSITORY & CREATING THE FIRST COMMIT
    ---
        "git init" & "git commit"

        Let's say we have a project folder we are currently working on... these are some few git commands and their functions
               --------
               git init
               --------
                    Every FRESH project must start with this command to initialize git so that your project folder can now TURN into WORKING DIRECTORY. After executing the command you get a success message. 
                    
                    Behind the scenes ".git" hidden folder called repository would be created

               ----------
               git status
               ----------
                    This gives you information about the "working directory". This displays your current branch and all tracked and untracked files. Default you would see that No Commits yet (no snapshot)

                    If your project does not have GIT, then you will get an error message. If that happens use the "git init"

               ---------      ----------
               git add .  OR  git add -A
               ---------      ----------
                for files to be tracked we use the command above to do that. This adds the files to ths STAGING AREA
                    => Add Specific files
                            ------------------------------------
                            git add 07_inititialzing_the_repo.js
                            ------------------------------------

                    => Add All files we use (.)
                            ---------
                            git add .
                            ---------
                                When this is done, files would be added to the staging area

               ----------------------------
            -> git commit -m "first commit"
               ----------------------------
                    After adding files in the staging area in the previous command, you then commit it by using the above command

                    m: means message

                    NOTE:
                        After committing for the first time, you will get an ERROR because we have not attached an email for the current user. 
                        
                        Git wants to know who we are specifically i.e ACCOUNT IDENTITY so that other people will know who created the commit...
                            i.e our account identity. Other people can easily detect who created this
                            ------------------
                            Email and Username
                            ------------------

                            Use the ff commands to do that


                            CONFIGURE your Local GIT installation with NAME and EMAIL used on GITHUB
                            -----------------------------------------------------------------------
                            IMPORTANT: This is done ONES

                                -> Open your terminal and enter the ff. codes

                                    -------------------------------------------------
                                    git config --global user.name "Wilfred Afagbegee"
                                    -------------------------------------------------
                                        hit enter and repeat below

                                    ---------------------------------------------------------
                                    git config --global user.email "waksoftwareltd@gmail.com"
                                    ---------------------------------------------------------
                                        hit enter and repeat below without repeating
*/
