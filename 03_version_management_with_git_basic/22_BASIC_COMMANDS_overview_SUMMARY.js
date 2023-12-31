/* 
    BASIC COMMANDS SUMMARY - GENERAL
    ------------------------------------------------------------------------

        -------------
        git --version
        -------------
            Check installed Git Version

        --------
        git init
        --------
            Create empty Git Repository. This is done ones before you to start your project

        ----------
        git status
        ----------
            Check working directory & staging area status

        -------
        git log
        -------
            Displays all "COMMITS" of our current branch and it allows us to "CHECKOUT" specific commits by using the "ids" provided

        ------------
        git ls-files
        ------------
            List all data and files in the staging area




    BASIC COMMANDS SUMMARY - COMMIT CREATION & ACCESS
    ------------------------------------------------------------------------

        ----------------
        git add filename
        git add .
        ----------------
            Add single file or Working Directory files to staging area

        -----------------------
        git commit -m "message"
        -----------------------
            Create new commit

        ----------------------
        git checkout commit_id
        ----------------------
            Checkout commit (detached head!)



    BASIC COMMANDS SUMMARY - BRANCH CREATION & ACCESS
    ------------------------------------------------------------------------

        ----------------------
        git branch branch_name
        git switch branch_name     ...only Git 2.23+
        ----------------------
            Create a new branch. But for "switch" if the branch name already exists, we will create a new branch instead

        ------------------------
        git checkout branch_name
        ------------------------
            Go to a specific branch

        ---------------------------
        git checkout -b branch_name
        git switch -c branch_name     ...only Git 2.23+
        ---------------------------
            Create and Access new branch at the same time 

        ----------------------
        git merge other_branch
        ----------------------
            Bring other branch's changes to current branch
            



    BASIC COMMANDS SUMMARY - DELETING / UNDO DATA
    ------------------------------------------------------------------------

        Working Directory Files (WD File*)
        ---
            ----------------
            git rm filename
            git add filename     
            ----------------
                All the commands serves the same purpose. Run command after file was deleted from working directory


        Un-Staged Changes (changes only made in our working directory)
        ---
            Meaning we added either an existing file (part of a previous commit and we added more code) or a new file to our working directory. Both cases happened in a way that we did not add new changes to our Staging Area.

            For files which was part of a PREVIOUS commit we have 2 options
                -------------------------
                git checkout (--) .             ...(--) is optional
                git restore filename or .       ...only Git 2.23+
                -------------------------
                    Revert changes in TRACKED Files

                -------------
                git clean -df            
                -------------
                    Delete UNTRACKED Files. 
                        "-d" means Delete
                        "f" means Force


        Staged Changes
        ---
        
            Here we have different options
                ----------------------------------
                git reset filename             
                git checkout -- filename 
                git restore --staged filename or .       ...only Git 2.23+
                ----------------------------------
                    Remove files from staging area

            
            
        Latest Commit(s)
        ---
        
            We can delete our Latest Commit either Single or Multiple. There are several options to use
                -----------------------
                git reset HEAD~1             
                git reset --soft HEAD~1 
                git reset --hard HEAD~1       
                -----------------------
                    Undo latest (~1) commit. ~1 removes the latest commit, ~2 removes the latest two commits
                    
                    Options to tailor the reset commands
                        "soft" reset affects the commit but keeps the changes made in the working directory and staging area
                        "hard" reset affects the commit and removes everything


        Remove Branches
        ---
        
            -------------------------
            git branch -D branch_name           
            -------------------------
                Delete branch
*/
