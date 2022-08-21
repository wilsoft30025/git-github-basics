/* 
    REBASE (git rebase)
    -------
        Rebase in an alternative for the "RECURSIVE" merge. This is how is works


        Let's say we have a "* master" branch 
                --------------
                branch: master
                --------------
                    m.1
                        m.2
                            "M.3" 
                                (let's assume that M.3 is an additional commit after the feature was created)


         Let's say we have a "feature" branch 
                --------------
                branch: feature
                --------------
                    m.1
                        m.2
                            f.1
                                f.2 
                                    (let's assume that 2 additional commit was created(f.1, f.2) after the feature was created based on the master)

        In the previous lecture, we could use the "recursive" merge to bring the changes from the feature branch into the master
        
        BUT here we will use the REBASE to;
            we can add the commits we created in the feature branch to the updated master branch like below

            --------------
            branch: master
            --------------

                    m.1 -> m.2 -> "M.3" -> f.1 ->  f.2

                        here we added it to the third commit we created in the master branch. This will actually result in the Fast-forward merge in the end and with that we will avoid additional merge commit    
                        
                        NOTE:
                            In the REBASE we are able to 
                                -> make "M.3" becomes new base commit for commits created in the feature branch
                                -> rebase the master to the feature branch
                                    ...so the changes in the feature branch are now based on the latest commit in the master branch
                                -> merge the rabase feature into master

                                IMPORTANT:
                                    "rebase" does not move commits, it creates new commits

                                    Never rebase commits outside your repository



        APPLYING "git rebase"
        ----
            Let's assume we have our project working directory aligning to the above explanation. Let's first switch to our feature branch instead and use the ff command
                -----------------
                git rebase master
                -----------------
                    git will first check the changes in the feature branch and additional commits and also checks same for the master branch

                    when successfully executed you will get the message below
                        -----
                        Successfully rebased and updated refs/heads/feature
                        -----

                        Take note the rebasing creates new commits and this can cause severe problems if you share project with other people



    WHEN TO APPLY REBASE
    ---
        ...New commits in master branch while working in feature branch
                -> Feature relies on addition commits in master branch
                    ... Rebase master into feature branch
                -> Feature is finished - Implementation into master without merge commit
                    ... Rebase master into feature + (fast-forward) merge feature into master


        IMPORTANT:
            Remember: Rebasing re-writes code history in your commits with your ids so be very careful when using it in PUBLIC REPOSITORY eg. GitHub
*/
