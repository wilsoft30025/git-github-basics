/* 
    REMOTE TRACKING IN PRACTICE
    ---
        Let's assume we have a project we are working fine which we initiated the to connect to GitHub already. When we used the "git branch -a" to see all Local and Remote branches
              -------------------
              * main
              remotes/origin/main .....REMOTE Tracking Branch
              -------------------
                if we make changes and we PUSH or PULL, it stores it FIRST in the "remote tracking branch" and finally disburse it to the final destination

        Now with the 2 branches earlier let's say we created another branch called "feature"
            -----------------------
            git checkout -b feature
            -----------------------

        HINT:
            To SEE ONLY the REMOTE BRANCHES
                -------------
                git branch -r
                -------------


        Let's say in the "feature" branch we updated our code with more commits. Now after that let's say we want to push it into the new branch "feature"
            --------------------------
            git push -u origin feature
            --------------------------
                When the push is successful and you execute the command "git branch -a" you see the ff results
                    -----------------------
                    * feature
                      main
                      remotes/origin/main
                      remote/origin/feature
                    -----------------------

                    So in the GitHub, you can SWITCH BETWEEN the branches by using the DROP DOWN BRANCH ARROW


        CREATING BRANCH WITHIN GITHUB
        ---
            -> In your GitHub open any project

            -> Select the DROP DOWN BRANCH ARROW and provide your branch name and press enter
                ...within the branch you can create a new file in there and provide the commit name and click commit

            -> Now when we switch to our command prompt and execute the command "git branch -a", you will not see the new branch you created from GITHUB BY default

                    HINT: 
                        But to see the LIST of all the REMOTE BRANCHES
                            -------------
                            git ls-remote
                            -------------
                                This displays and proof that it was successfully created in your GITHUB


            HINT:
                NOW to GET that INFORMATION from GitHub to our LOCAL PROJECT we use
                    ----------------
                    git fetch origin
                    ----------------
                        "fetch" means if you want to UPDATE to your LATEST STAGE WITHOUT MERGING Anything into you existing structure

                        To confirm "fetch" was successful "git branch -a"


        NOTE:
            What will happen if we run "git pull" instead of "git fetch"?
                GIT PULL is a COMBINATION of GIT FETCH and then of MERGING the REMOTE changes into our Local Branch

                So if you say
                    --------------------
                    git pull origin main
                    --------------------
                        this means FETCH from the Remote Tracking Branch into our local branch

            NOTE: 
                ----------------
                git fetch origin
                ----------------
                    works because it UPDATE the Remote Tracking Branch
                        eg.
                            remotes/origin/main
                            remote/origin/feature

                ---------------
                git pull origin
                ---------------
                    HINT:
                        ONLY WORKS if you have a DIRECT CONNECTION to a SPECIFIC BRANCH "Locally" otherwise git does not know where it should merge to

                        Let's say we change something from the "feature" in the GitHub. To get it on your local machine you execute the following command

                            --------------------
                            git pull origin main
                            --------------------
                                This Works VERY VERY FINE
*/
