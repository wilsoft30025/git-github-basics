/* 
    DIVING Deeper into COMMITS with "git log"
    --------    
        To see all commits in the current branch, run the following command
            -------
            git log
            -------
                This displays some information and the most important one is the 
                    -----------
                    "commit id"
                    -----------
                        This is a unique id for each commit you create. The commit id uniquely identifies a specific commit. We also have information about
                            ...Author
                            ...Date
                            ...Message

        NOTE:
            The latest commit is always on Top

        IMPORTANT:
                To QUIT from git log use enter the letter
                    --
                    q
                    --
                        This will terminate the terminal from running


    ROLL BACK (git checkout)
    ---

            Assumming you messed up with your current code, you can ROLLBACK / REVERT to the last commmit or a specific commit by using the ff. code

            The cool thing about vesion control is that you can go back to your previous commit by using the command below
                -----------------------------------------------------
                git checkout 1eab1e0fbb3607af21e809b2084bc06cf61287fb
                -----------------------------------------------------
                    here we refered to the commit id we want to move to the commit branches section
*/
