/* 
    THE DETACHED HEAD
    ---

     Let's say we are currently in the "master branch" with 3 commits i.e
            --------------
            branch: master
            --------------
                c.1
                    c.2
                        c.3 (HEAD when checkout)


        Another scenario with the other branch
            --------------
            branch: other
            --------------
                c.1
                    c.2
                        c.3
                            c.4 (HEAD when checkout)


        NOTE:
            Above was explained in the previous lesson

            In the earlier lessons we got to understand that we can also "CHECKOUT USING SPECIFIC COMMITS" not only branches since each commit in git is identified via commit id

            Let's say we checkout our c.2 in the other branch and c.2 in master, 
                NOTE: 
                    We know that checking out a branch means we checkout a specific branch so we refer to our branch indirectly refer to the latest commit because branches contain commits and also the latest commit

            So now after checkout a specific commit, this is how git will understand, Git calls the 
                i.e 
                    c.2 is a DETACHED HEAD, So the HEAD is no longer in a specific branch or the last commit BUT a specific commit which is in a middle of no where so it is not related to a specific branch

                -----------------------------------------------------
                git checkout eadd11abbf44ead0b3f267a34933ec60b78f88c8
                -----------------------------------------------------
                    meaning this COMMIT is NOT PART of a SPECIFIC BRANCH

                    
            Let's assume we did that practically and we finally used the "git log" to confirm this is the sample results we will get
                ----------------------------
                * (HEAD detached at f95269f)
                  master
                  second-branch
                  third-branch
                ----------------------------

                  NOTE:
                     Above is NOT problem but is 100% ACCEPTED in git

                BUT if you want to navigate to the "third-branch" you can use the command
                    --------------------------
                    git checkout second-branch
                    --------------------------
*/
