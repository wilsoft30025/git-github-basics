/* 
    BRANCHES & GIT SWITCH
    ---
        As at now all the Git commands we've learned works with all the Git Versions. Since Git has improved we see additional commands all the time...

        Some of the new commands can be used when you use Git version 2.23 and above
            -------------
            git --version
            -------------
                to check the current version you are using


        SWITCH BETWEEN BRANCHES
        ---
            This allows you to "SWITCH" or "CREATE" new branches
                NOTE:
                    Switch is purposely for ONLY branches.
                        ------------------------
                        git switch second-branch
                        ------------------------

                        IMPORTANT:
                            The main reason why you can use above to SWITCH or CREATE branch that "git checkout" was used for COMMITS and BRANCHES so it was sometimes confusing

                        
        CREATE NEW BRANCHES
        ---
            To create a NEW BRANCH using the SWITCH command, use the ff command
                 ---------------------------
                 git switch -c fourth-branch
                 ---------------------------
                    NOTE: 
                        This command will CREATE and SWITCH to that NEW BRANCH
*/
