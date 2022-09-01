/*
    CREATING LOCAL TRACKING BRANCHES
    ---
        Let's say we are currently working on a project which has 2 branches 
            i.e 
                "master" and "feature" 
                    and we also assume that the project is connected to GitHub. Assuming after executing the command 
            -------------
            git branch -a
            -------------
                we had the ff results
                    -------------------------------
                    * feature
                      master
                      remotes/origin/feature
                      remotes/origin/feature-remote
                      remotes/origin/main
                    -------------------------------

                    Now to create a LOCAL TRACKING BRANCH connected to "remotes/origin/feature-remote" we use the command below
                        -------------------------------------------------------------
                        git branch --track feature-remote-local origin/feature-remote
                        -------------------------------------------------------------
                            note that the name "feature-remote-local" is not supposed to be like this BUT we chose it for easy understandanding and explanation

                            After pressing the enter key, you get the ff response
                                ------------------------------------------------------------------------------------------
                                Branch "feature-remote-local" set up to track remote branch "feature-remote" from "origin"
                                ------------------------------------------------------------------------------------------

                                Now when we CHECK all our branches again usin "git branch -a" we get the ff results
                                    -------------------------------
                                    * feature
                                    feature-remote-local          --> this is the "Local Tracking Branch"
                                    master
                                    remotes/origin/feature
                                    remotes/origin/feature-remote
                                    remotes/origin/main
                                    -------------------------------

                                    NOTE:
                                        So now "feature-remote-local" becomes our Local Tracking Branch. This branch tracks and it's connected to the Remote Tracking Branch and it then becomes the Remote Copy we get on Git


            Let's now assume we want to perform an operation on the "Local Tracking Branch" we created... Lets follow the steps
                ---------------------------------
                git checkout feature-remote-local
                ---------------------------------
                    let's say we switched from our master branch to this local branch and we performed a lot of updates...

                    After the updates we assume we add and commit the changes. After commiting the changes let's assumed we switched to the "Remote Tracking Branch" by using the command below

                    ---------------------------------
                    git checkout remotes/origin/feature-remote
                    ---------------------------------
                        i.e 
                            the red one

                        NOTE:
                            After making switching above, it was noticed that the changes was not incorporated

                            So in other to make sure the changes are incorporated, let's switch back to the Local Tracking Branch we created i.e "feature-remote-local" and use the ff. command to push it
                                --------
                                git push
                                --------
                                    This will also automatically push it to GitHub
*/
