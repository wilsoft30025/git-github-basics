/* 
    UNDERSTANDING GIT STASH (git_stash)
    ----------------------------------------------------------------
        Let's say you have a project with latest commit and you later keep working on that project... the "stash" is like an INTERNAL MEMORY where you can save "Uncommitted" "Unstaged" changes...

        Use the ff command
            ---------
            git stash
            ---------
                Let's assume you were typing something new in your file after your last commit, The moment you execute that command above, what you typed would be cleared and you will be back to your Latest Commit. You will see the ff. messageb below
                    ----------------------------------------------------------------------------
                    "Saved working directory and index state WIP on master: 2402e4c file1 added"
                    ----------------------------------------------------------------------------

                But if you want to have your changes back then you have to execute the ff. command
                    ---------------
                    git stash apply
                    ---------------
                        you would have your changes back with a message that "changes not staged for commit" displaying the filename which needs to be modified, where you can staged the changes and finally commit the changes if you want to...

                        STASH allows you to SAVE "UNSTAGED" changes and to access these whenever you want todo so. So assuming you modified the file again, and you stash it again and again using "git stash"

                        Let's assume we execute the "git stash apply" you will only get the LATEST modified. 
                        
                        So if we want to see all the "stash" files change, use the ff. comand

                            --------------
                            git stash list
                            --------------
                                This will display the overview of all the stash changes listed. The one on TOP with the index "0" is always the LATEST stash data. 
                                
                                eg. overview of the lists is as follows
                                    ----------------------------------------------
                                    stash@{0}: WIP on master: 240234c file 1 added
                                    stash@{1}: WIP on master: 240234c file 1 added
                                    ----------------------------------------------

                                    Now to move to or apply a specific stash use the following command by referring to the index number
                                        -----------------
                                        git stash apply 0
                                        -----------------

                            We can add Messages to our stash to know the exact data explaining the specific stash
                                ------------------------------------
                                git stash push -m "my message added"
                                ------------------------------------

                            Assuming after all the "stash" changes, you finally want to add it to your project, use the ff command. After adding successfully, it would be removed from the stash
                                ---------------
                                git stash pop 0
                                ---------------
                                    After executing the above code, you stage it i.e "git add ." and finally commit the changes


                    DELETING A STASH
                    ---
                        Use the commmand below to delete stash
                            ----------------
                            git stash drop 0
                            ----------------
                                "0" is the stash index

                        CLEAR ENTIRE STASH
                        ---
                            Use the commmand below to delete ALL stash
                                ---------------
                                git stash clear
                                ---------------

                                    use "git stash list" to confirme if it was cleared successfully
*/
