/* 
    DIVING Deeper into COMMITS with "git log"
    --------    
        To see ALL COMMITS in the CURRENT BRANCH, run the following command
            -------
            git log
            -------
                This displays some information and the most important one is the 
                    -----------
                    "commit id"
                    -----------
                        This is a UNIQUE id for each commit you create. The commit id uniquely identifies a specific commit. We also have information about
                            ...Author
                            ...Date
                            ...Message

        NOTE:
            The LATEST commit is always on TOP

        IMPORTANT:
                To QUIT from "git log" use enter the letter
                    --
                    q
                    --
                        This will terminate the terminal from running


    ROLL BACK TO PREVIOUS COMMIT (git checkout)
    ---

            Assuming you messed up with your current code, you can ROLLBACK / REVERT to the last commit or a specific commit by using the ff. code

            The cool thing about veRsion control is that you can go back to your previous commit by using the command below
                -----------------------------------------------------
                git checkout 1eab1e0fbb3607af21e809b2084bc06cf61287fb
                -----------------------------------------------------
                    here we referenced to the commit id we want to move to the commit branches section
*/
