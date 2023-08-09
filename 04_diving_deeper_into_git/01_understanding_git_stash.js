/* 
    UNDERSTANDING GIT STASH (git_stash)
    ----------------------------------------------------------------
        Let's say you have a project with latest commit and you later keep working on that project... the "stash" is like an INTERNAL MEMORY where you can save "Uncommitted" "Un-Staged" changes...

        Use the ff command
            ---------
            git stash
            ---------
                Let's ASSUME you were typing something new in your file AFTER YOUR LAST COMMIT, The moment you execute 
                "git stash", what you TYPED would be CLEARED and you will be BACK to your LATEST Commit. You will see the ff. message below
                    ----------------------------------------------------------------------------
                    "Saved working directory and index state WIP on master: 2402e4c file1 added"
                    ----------------------------------------------------------------------------

                But if you want to HAVE YOUR CHANGES BACK then you have to execute the ff. command
                    ---------------
                    git stash apply
                    ---------------
                        you would HAVE YOUR CHANGES BACK back with a message that "CHANGES NOT STAGED FOR COMMIT" displaying the filename which needs to be modified, where you can staged the changes and finally commit the changes if you want to...

                        NOTE: STASH allows you to SAVE "UN-STAGED" changes and to access these whenever you want todo so. So assuming you modified the file again, and you stash it again and again using "git stash"

                        Let's assume we execute the "git stash apply" you will only get the LATEST modified. 
                        
                        So if we want to see all the "stash" files change, use the ff. command

                            --------------
                            git stash list
                            --------------
                                This will display the overview of all the stash changes listed. The one on TOP with the index "0" is always the LATEST stash data. 
                                
                                eg. overview of the lists is as follows
                                    ----------------------------------------------
                                    stash@{0}: WIP on master: 240234c file 1 added
                                    stash@{1}: WIP on master: 240234c file 1 added
                                    ----------------------------------------------

                                    Now to MOVE to or APPLY a SPECIFIC STASH use the following command by referring to the INDEX NUMBER
                                        -----------------
                                        git stash apply 0
                                        -----------------

                            We can ADD MESSAGES/DESCRIPTION to our stash to know the exact DATA EXPLAINING the specific stash. This will help us IDENTIFY the different data with comments
                                ------------------------------------
                                git stash push -m "my message added"
                                ------------------------------------

                            Assuming after all the "stash" changes, you finally want to ADD IT TO YOUR PROJECT, use the ff command. 
                            
                            After adding successfully, it would be removed from the stash
                                ---------------
                                git stash pop 0
                                ---------------
                                    After executing the above code, you stage it 
                                        i.e "git add ." and finally commit the changes


                    DELETING A STASH
                    ---
                        Use the command below to delete stash (delete individual list)
                            ----------------
                            git stash drop 0
                            ----------------
                                "0" is the stash index

                        CLEAR ENTIRE STASH
                        ---
                            Use the command below to delete ALL stash
                                ---------------
                                git stash clear
                                ---------------

                                    use "git stash list" to confirm if it was cleared successfully
*/
