/* 
    DELETING COMMITS WITH "git reset"
    ---
            This command helps us to RESET the HEAD of our branch. meaning UNDO commits

        Method 1
        ---

            Let's say we have multiple commits and we want to undo some of the commits, use the ff command
                -----------------------
                git reset --soft HEAD~1
                -----------------------
                    the "1" means how many steps our HEAD should be resetted. Go back 1 commit
                    
                    With the "soft" 
                        -> only the "commit" is deleted
                        -> After executing the command, if you display the overview of files using "git ls-file" you will still see the files in the staged area. This means the command affected the latest commit but not the files itself BECAUSE we use SOFT Reset
                        -> files in the working directory is NOT deleted

                    It can be ciitted you again without using your file


        Method 2
        ---
            ----------------
            git reset HEAD~1
            ----------------
                this command is DEFAULT reset... it
                    -> deletes the commit
                    -> deletes the associated file in the staging area i.e "git ls-file" to check
                    -> keeps your files in the working directory

                        NOTE:
                            you can add it back to the staging area and re-commit it again


        Method 3
        ---
            -----------------------
            git reset --hard HEAD~1
            -----------------------
                this command is Hard reset... it
                    -> deletes the commit
                    -> deletes the associated file in the staging area
                    -> deletes the changes from the working directory

                        i.e "git ls-file" to check


    NOTE:
        Make sure you use the "RESET" commands with care
*/
