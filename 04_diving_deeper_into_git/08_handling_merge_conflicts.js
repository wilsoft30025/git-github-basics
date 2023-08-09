/* 
    HANDLING MERGE CONFLICTS
    ---
        In real world when working with other people, such CONFLICTS occur... This is a sample message you get
            ------------------------------------------------------------------
            "Auto Merging feature/f1.txt"
            "CONFLICT (content): Merge conflict in feature/f1.txt"
            "Automatic merge failed; fix conflicts and then commit the results"
            -------------------------------------------------------------------

        To FIX conflicts we have so many methods, here are few


        Method 1:
        ---
            VS Code will give you some options to
                -> Accept Current Change
                -> Accept Incoming Change
                -> Accept Both Changes
                -> Compare Changes

       
        Method 2:
        ---
            But if you don't want to use above, use
                ----------
                git status
                ----------
                    this will give you MORE INFORMATION about the CONFLICTS that we have and also about the solutions available. One of the options is to use the "ABORT" command
                        -----------------
                        git merge --abort
                        -----------------
                            NOTE: 
                                This will bring you back to the "state" before the conflict happened

                            To SEE the LOGS of the commits you want to merge, use the ff command
                                ---------------
                                git log --merge
                                ---------------

                            You can also use the "diff" command below
                                --------
                                git diff
                                --------
                                    This will give you the changes in DIFFERENCE between the 2 branches
*/
