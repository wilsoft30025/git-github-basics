/* 
    THE RECURSIVE MERGE (Non Fast-Forward Merge)
    ---
        Let's say you have a Project which is converted into a Working Directory...

        Since it's a new project we already have the "* master branch" as the default branch. So Let me commit the changes from here and continue at my new branch.
            m.1
                m.2
                    m.3 

        Now let's assume we create a NEW BRANCH called the "FEATURE" using the command below
            ---------------------
            git switch -c feature
            ---------------------

                After working intensively on the feature branch and committed successfully, then we want to MERGE it to the master branch using "recursive merge"
                    -------------------------
                    git merge --no-ff feature
                    -------------------------
                        when merged successfully, you will see a success messsage saying 
                            "Merge made by 'recursive' strategy". 
                        
                        This strategy is called "non fast-forward"

                    Now wif we check our log "git-log" you will see something interesting, we now have a complete history of the feature file in our master branch i.e. all commits

                    Now the latest commit would be named automatically as "Merge branch 'feature' into master". with the commit as follow
                        ----------------------------------------------------------------
                        commit e969a2c9e1cbd46df9061f0c922a3a3a7f195143 (HEAD -> master)
                        ----------------------------------------------------------------

                    NOTE:
                        If we use the Fast Forward Merge, the lastes commit will be llike below
                            ------------------------------------------------------------------------
                            commit e969a2c9e1cbd46df9061f0c922a3a3a7f195143 (HEAD -> master,feature)
                            ------------------------------------------------------------------------



        IMPORTANT:
            We use the "Recursive" strategy if
                ...you have changes in the "feature" branch and if you also have new commits in the "master" branch. 
                        Meaning the base of the 2 branches is not the same
                ...additional commits in both the master & feature branch after the feature branch was created
                ...additional (merge) commit is created in the master branch

                NOTE:
                    Even if the above rules were applied in our project and we mistakenly used the command below to merge
                        -----------------
                        git merge feature
                        -----------------
                            It will intelligently apply the "Recursive" merge because there were changes in the feature branch and commits in the master branch
*/
