/* 
    DELETING COMMITS WITH "git reset"
    ---
        This command helps us to RESET the HEAD of our branch. meaning UNDO commits

        The Reset Command cab be written in so many way as you can see below..

        Method 1
        ---

            Let's say we have multiple commits and we want to undo some of the commits, use the ff command
                -----------------------
                git reset --soft HEAD~1
                -----------------------
                    the "1" means how many STEPS our HEAD should be reset. Go back 1 commit
                    
                    With the "soft" 
                        -> only the "commit" is deleted

                        NOTE:
                            After executing the command, if you display the overview of files using "git ls-file" you will still see the files in the STAGED area. 
                            
                            This means the command AFFECTED the LATEST commit but NOT the files itself BECAUSE we use SOFT Reset

                            Files in the working directory is NOT deleted

                            It can be cited you again without using your file


        Method 2
        ---
            ----------------
            git reset HEAD~1
            ----------------
                this command is DEFAULT reset... it
                    -> DELETES the commit
                    -> DELETES the associated file in the staging area i.e "git ls-file" to check
                    -> BUT it keeps your FILES in the working directory

                        NOTE:
                            you can add it back to the staging area and re-commit it again


        Method 3
        ---
            -----------------------
            git reset --hard HEAD~1
            -----------------------
                this command is Hard reset... it
                    -> DELETES the commit
                    -> DELETES the associated file in the staging area
                    -> DELETES the changes from the working directory

                        i.e "git ls-file" to check


    IMPORTANT:
        Make sure you use the "RESET" commands with care
*/
