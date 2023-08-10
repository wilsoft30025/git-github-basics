/* 
    UNDERSTANDING FORK AND PULL REQUESTS
    ---
        CONTRIBUTION to a Project means I ADD VALUE to a project to improve the code whiles I am nor specifically assigned to do so...

        EXAMPLE:
            Let's say you have an Open Source Project which offers other GitHub Accounts/Users to improve the code. Meaning these people are Anonymous at First...


            COMPARING CLONE
            ---
                Let's say i see a project on GitHub and I want to improve it, I can use
                    ---------
                    git clone
                    ---------
                        to bring it to my local machine. and i am done then i could PUSH my local again change again to the Remote Repo
                NOTE:
                    this process will work if you are a COLLABORATOR to that Account that hold the REMOTE Repo

                HINT:
                    The CLONING process is not meant for Anonymous users who wants to Contribute


            FORK AND PULL REQUESTS
            ---
                ...here we think about OPEN SOURCE in public repo
                ...here the Anonymous will CREATE a Remote Copy (Fork on GitHub) and therefore copies the Remote Repository to his own account.
                        -> so we will have 2 remote repos
                                1. the initial one
                                2. full copy of the remote repo in the anonymous account
                            
                            HINT:
                                The FORK is a GitHub feature which has no relation to the GIT at all

                        So after the FORKING in your Account, you can then use the "git clone" to get a local copy on your machine, you improve it

                        Then push it back to the remote copy your FORKED into your account. This will have no direct connection with the Original Source Code...

                        PULL REQUEST
                        ---
                            If you have your latest commit in your remote repository, you can now create a PULL REQUEST to ask/inform the MAIN Source Code Account that you have improved the code, could you please have a look?

                            If the MAIN Account Agrees, then the MERGE can occur. After creating the PULL REQUEST by Anonymous, the MAIN Account will GET HOLD of the Remote Repo and Review the Changes...

                            The MAIN Account can ACCEPT the Request and Finally Merge it
*/
