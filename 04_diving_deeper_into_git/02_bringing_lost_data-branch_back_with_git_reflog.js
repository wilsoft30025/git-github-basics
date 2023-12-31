/* 
    BRINGING LOST DATA BACK with Git Reflog (Reference Logs)
    ---
        Let say you mistakenly DELETED an information, you can bring it back with "Git Reflog"... 
            NOTE: The Reflog STORES all changes we made in our Git Project...

        This is how the Git Reflog works... 
        
        Let's say we have lots and commit and we used the "git reset" to delete our commit one step back, we can bring it back by using the ff command
        
            ----------
            git reflog
            ----------
                executing the command above we see an OVERVIEW of all the changes we applied in this current branch. 
                
            NOTE: 
                This DOES NOT SAVE it forever but it's a 90days rollback storage logic. It contains all "commits", "checkouts" etc... 
                
                You can see that there is HASH numbers in front of every step.

                Example of how git reflog displays overview
                    -------------------------------------------------------------------
                    06dec15 (HEAD -> master) HEAD@{0}: commit: added basic commands
                    4c8485e HEAD@{1}: commit: updated notes
                    7f8a949 HEAD@{2}: commit: added notes for deleting commits
                    dd23f6a HEAD@{3}: commit: undoing staged and un-staged changes notes
                    d1e9e94 HEAD@{4}: commit: notes for un-staged
                    f9ade37 HEAD@{5}: checkout: moving from second-branch to master
                    e334b65 HEAD@{6}: checkout: moving from master to second-branches
                    -------------------------------------------------------------------

                    Let's say we want to perform a hard reset, we just have to copy the hash number and use the command below
                        ------------------------
                        git reset --hard 4c8485e
                        ------------------------
                            After execution it will automatically move to that HEAD. So therefore if you initiate the the "git log" you will see that your latest HEAD is where you reset to

                            So this is how you can bring back last commit into your Project...


                NOTE:
                    The Reflog also helps us when you DELETE BRANCHES. Let's say you have a branch and you later delete it completely from your project using the command below
                        ---------------------------
                        git branch -D fourth-branch
                        ---------------------------
                            Let's say after deleting, you switched to the "* master" branch. 
                            
                            Now go to your reflog and check exactly where you had that specific branch you deleted and copy its hash number. 
                            
                            Here you will refer to when the branch was committed instead
                                i.e f3a76a2

                            Now checkout the hash i.e
                                --------------------
                                git checkout f3a76a2
                                --------------------

                                Now we create a new branch which contains that commit
                                    ---------------------
                                    git switch -c feature
                                    ---------------------
                                        This creates a new branch called "feature"
*/
