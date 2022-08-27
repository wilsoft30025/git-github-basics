/* 
    APPLYING THE FAST-FORWARD MERGE
    ----
        Let's say you have a Project which is converted into a Working Directory...

        Since it's a new project we already have the "* master branch" as the default branch. So Let me commit the changes from here and continue at my new branch.
            m.1
                m.2
                    m.3 
        
        Now let's assume we create a NEW BRANCH called the "FEATURE" using the command below
            ---------------------
            git switch -c feature
            ---------------------
                This will create a new branch named "feature" and automatically assign it as default. To confirm if it was successful use the command below
                    ----------
                    git branch
                    ----------

                    When we open "git log" we will see the previous from the master branch

                    After confirmation let's assume we kept modifying the changes to we are ok
                        f.1
                            f.2
                                f.3

                    After all the changes made let's "add it to the staging area" and "commit it"

                    Before we MERGE it to the Master we have to SWITCH to the "* master" branch using the ff command
                        ------------------
                        git switch feature
                        ------------------


                    To MERGE it we use the ff command
                        -----------------
                        git merge feature
                        -----------------
                            when executed successfully you will get the sample message

                                ------------------------------------------------
                                Updating 595e676..caaf808
                                    Fast-forward
                                        04_diving_deeper_into_git/05_applying_the_fast_forward_merge.js | 18 ++++++++++++++++++
                                        1 file changed, 18 insertions(+)
                                ------------------------------------------------
                                    In your message you will see the Merge Type to be "Fast-forward"

                                NOTE:
                                    As discussed in the previous lesson, the Fast-forward has the advantage that 
                                        ...NO new "merge commit" was made in the master branch
                                        ...with the Fast-forward merge we DON'T create a new commit but we just move the pointer off the HEAD to the Latest commit in the Feature branch

                                        After the MERGE if you "log" you will see the HEAD like below
                                            ------------------------------------------------------------------
                                            commit e969a2c9e1cbd46df9061f0c922a3a3a7f195143 (HEAD -> master,feature)
                                            ------------------------------------------------------------------
                                                This means the HEAD of the "* master" branch was moved forward to the "feature" branch



        ANOTHER METHOD
        ---
            Let's say we are currently in the "* master" branch, use the ff. command. The "squash" is a "FLAG" for the merge command
                --------------------------
                git merge --squash feature
                --------------------------
                    squash means it will put together all the commits we had in our future branch into the latest commit so that only one commit is added into the master branch in the end.

                    after executing the above command, it still used "Fast-forward" approach  
                    
                    now commit the changes with message example "merged feature and master". when you check the log, you will see the HEAD like this
                        ----------------------------------------------------------------
                        commit e969a2c9e1cbd46df9061f0c922a3a3a7f195143 (HEAD -> master)
                        ----------------------------------------------------------------
*/
