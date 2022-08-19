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

            In the earlier lessons we got to understand that we can also Checkout using specific commits not only branches since each commit in git is identified via commit id

            Let's say we checkout our c.2 in the other branch and c.2 in master, 
                note that we know that checking out a branch means we checkout a specific branch so we refer to our branch indirectly refer to the latest commit because branches contain commits and also the lastes commit

            So now after checkout a specific commit, this is how git will understand, Git calls the i.e c.2 a DETACHED HEAD, So the HEAD is no longer in a specific branch or the last commit BUT a specific commit which is in a middle of no where so it is not related to a specific branch

                -----------------------------------------------------
                git checkout eadd11abbf44ead0b3f267a34933ec60b78f88c8
                -----------------------------------------------------
                    meaning this commit is not part of a specific branch

                
*/
