/* 
    REMOTE TRACKING IN PRACTICE
    ---
        Let's assume we have a project we are working fine which we initiated the to connect to GitHub already. When we used the "git branch -a" to see all Local and Remote branches
              -------------------
              * main
              remotes/origin/main .....remote tracking branch
              -------------------
                if we make changes and we PUSH or PULL, it stores it in the "remote tracking branch" and finally disburse it to the final destination

        Now with the 2 branches earlier let's say we created another branch called "feature"
            -----------------------
            git checkout -b feature
            -----------------------

        To see the only Remote branch
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

                    So in the GitHub, you can switch between the branches by usung the drop down branch arrows


        CREATING BRANCH WITHIN GITHUB
        ---
            -> In your GitHub open any project

            -> Select the branch drop down and provide your branch name and press enter
                ...within the branch you can create a new file in there and provide the commit name and click commit

            -> Now when we switch to our command prompt and execute the command "git branch -a", you will not see the new branch you created from GITHUB BY default

                    But to see the List of all the REMOTE branches
                        -------------
                        git ls-remote
                        -------------

            NOW to get that info from GitHub to our Local Machine we use
                ----------------
                git fetch origin
                ----------------
                    "fetch" means if you want to UPDATE to your latest stage without Merging Anything into you existing structure

                    To confirm "fetch" was successful "git branch -a"


            What will happen if we run "git pull" instead of "git fetch"?
                git pull is a combination of git fetch and then of merging the remote changes into our Local Branch

                Soi if you say
                    --------------------
                    git pull origin main
                    --------------------
                        this means fetch from the remote tracking branch into our local branch

            NOTE: 
                ----------------
                git fetch origin
                ----------------
                    works because it updates the remote tracking branch
                        eg.
                            remotes/origin/main
                            remote/origin/feature

                ---------------
                git pull origin
                ---------------
                    works only of you have a direct connection to a specific branch "Locally" otherwise git does not know where it should merge to

                    Let's say we change something from the "feature" in the GitHub. To get it on your local machine you execute the following command
                        --------------------
                        git pull origin main
                        --------------------
                            This Works very very fine
*/
