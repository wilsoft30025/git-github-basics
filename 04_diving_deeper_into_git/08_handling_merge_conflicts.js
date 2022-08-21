/* 
    HANDLING MERGE CONFLICTS
    ---
        In real world when working with other people, such conflicts occur...

        To fix conflicts we have so many methods, here are few

            VS Code will give you some options to
                ... Accept Curent Change
                ... Accept Incoming Change
                ... Accept Both Changes
                ... Compare Changes

            But if you don't want to use above, use
                ----------
                git status
                ----------
                    this will give you more information abut the conflict the we have and also about the solutions available. One of the options is to use the "ABORT" command
                        -----------------
                        git merge --abort
                        -----------------
                            this will bring you back to the "state" before the conflict happened

                            To see the logs of the commits you want to merge, use the ff command
                                ---------------
                                git log --merge
                                ---------------

                            You can also use the "diff" command below
                                --------
                                git diff
                                --------
*/
