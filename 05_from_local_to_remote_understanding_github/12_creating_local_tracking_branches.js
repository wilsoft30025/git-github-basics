/*
    CREATING LOCAL TRACKING BRANCHES
    ---
        Let's say we are currently working on a project which has 2 branches i.e "master" and "feature" and we also assume that the project is coonected to GitHub. Assuming after executing the command 
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

                    Now to create a Local Tracking Branch connected to "remotes/origin/feature-remote" we use the command below
                        -------------------------------------------------------------
                        git branch --track feature-remote-local origin/feature-remote
                        -------------------------------------------------------------
                            note that name "feature-remote-local" is not supposed to be like this BUT we chose it for easy understandanting and explanation

                            After pressing the enter key, you get the ff response
                                ------------------------------------------------------------------------------------------
                                Branch "feature-remote-local" set up to track remote branch "feature-remote" from "origin"
                                ------------------------------------------------------------------------------------------

                                Now when we CHECK all our branches again usin "git branch -a" we get the ff results
                                    -------------------------------
                                    * feature
                                    feature-remote-local
                                    master
                                    remotes/origin/feature
                                    remotes/origin/feature-remote
                                    remotes/origin/main
                                    -------------------------------

                                    NOTE:
                                        So now "feature-remote-local" becomes our Local Tracking Branch. This branch tracks and it's connected to the Remote Tracking Branch and it then becomes the Remote Copy w get on GitHub

*/
