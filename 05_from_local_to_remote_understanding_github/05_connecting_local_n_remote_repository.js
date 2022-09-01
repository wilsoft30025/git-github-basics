/* 
    CONNECTING LOCAL AND REMOTE REPOSITORY
    ---
        After creating the Remote Repo for the first time, it becomes Empty with no Data or Branch... Now let's learn how we can push an existing repository from the command line

        In other to push your code from Local to Cloud (GitHub), you have to let your Local repo know about your GitHub Repo (CONNECT THEM)

        Below generated for you By GitHub
            ...push an existing repository from the command line. Execute the commands below for Fresh Projects

            -----------------------------------------------------------------------
            git remote add origin git@github.com:wilsoft30025/git-github-basics.git
            -----------------------------------------------------------------------
                ...for the first time execute the above code. As we discussed earlier, after executing above, we can then refer to the url using the shorthand "origin"

                ...this will establish the a between the repos

                ...after pressing enter, you will not see any message whether successful

            ------------------
            git branch -M main
            ------------------
                ...the next thing to do is to execute the above command to RENAME our old "MASTER" branch on our local machine to "MAIN". After executing, just use the "git branch" to confirm whether our branch name has changed
                ...or You can SKIP this STEP to maintain the name "MASTER"

             -----------------------        ----------------------------
             git push -u origin main   or   git push -u origin HEAD:main
             -----------------------        ----------------------------
                -> the next thing to do is to execute the above command. 

                -> git push
                        This command means pushing our local information from the local repo to a remote repo

                -> -u
                        This establishes an upstream between a Local Branch and the Remote Branch.

                -> "origin" is now a reference to our specific repo unique URL

                -> If you did not "rename" the branch previous, you can maintain the name "master" else if you renamed it to "main" then you can execute above

                ... After executing for the First, you will receive an error message that connection cannot be established. With my machine i had this message
                    -----------------------------------------------------------------------------
                    The authenticity of host 'github.com (140.82.121.3)' can't be established.
                    ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
                    This key is not known by any other names
                    Are you sure you want to continue connecting (yes/no/[fingerprint])? 
                    -----------------------------------------------------------------------------

                    Sometimes it also ask you to "AUTHENTICATE" by Logging in for the First Time OR You create a PersonaL Access Token to serve as a secutrity feature to help push your code successfully.

                    OR

                    In my case I had Setup SSH in my GitHub so unless I activated my machine to link

                    YOU SETUP AN SSH KEY ON YOUR MACHINE TO CONNECT TO GITHUB... THIS IS VERY VERY IMPORTANT BECAUSE IT REGISTERS YOUR COMPUTER ALONE SO THAT GITHUB CAN IDENTIFY IT... IT CAN BE FOUND IN THE NEXT 2 LECTURES
                        --------------------------------------------------------------------------
                        05_from_local_to_remote_understanding_github/07_setting_up_ssh_keys_github
                        --------------------------------------------------------------------------



        IMPORTANT:
            Now to confirm the branches we have in our working directory we use the command
                ----------
                git branch
                ----------
                    This will only the branches in the working directory BUT If we want to see the branch for the Cloud Repo and all branches, use the command
                        -------------
                        git branch -a
                        -------------
                        
                            This displays
                                -------------------
                                * main
                                remotes/origin/main
                                -------------------

                    To see the only REMOTE BRANCH, use the command
                        -------------
                        git branch -r
                        -------------



*/
