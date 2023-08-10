/* 
    BRANCH TYPES OVERVIEW
    ---
        Let's say we have the following,
            ------------
            LOCAL Branch
            ------------
                Branch on your LOCAL MACHINE

            -------------
            REMOTE Branch
            -------------
                Branch in REMOTE location (eg. in GitHub)


        Besides the Branches above we have OTHER branches
            -----------------
            TRACKING Branches
            -----------------
                ...this ia all about EXCHANGING information between the LOCAL and the REMOTE branch

                    ----------------------
                    Remote Tracking Branch
                    ----------------------
                        ...this is a LOCAL COPY of REMOTE branch. HINT: NOT to be edited
                                -> with this we can get the Latest State of the remote branch by using the command "git fetch"

                NOTE:
                    If you think about the LOGIC between the Local and Remote branches and the remote tracking branches in between, then we can use another branch type to make this efficient i.e
                        ---------------------
                        Local Tracking Branch
                        ---------------------
                            This is a LOCAL REFERENCE to a Remote Tracking Branch (to be edited). This does not necessarily have to be reference to the remote tracking branch.
                                Commands like "git push" and "git pull" are available and the Logic now is the remote tracking branch gets the latest information from the remote branch

                                The Local Tracking Branch is connected to the Remote Tracking Branch and with all the changes incorporated we can then edit our LOCAL tracking Branch and ones done we can push this changes to the remote tracking branch and then push the changes to the remote branch on GitHub


        HOW ARE REMOTE AND LOCAL TRACKING BRANCHES CONNECTED
        ---
            ---------------------
            Remote Branch (cloud)
            ---------------------
               ↓
            git fetch (update) 
               ↓
            ---------------------------------------------------------------
            Remote Tracking Branch (Local cache of remote branch's content)
            ---------------------------------------------------------------
               ↓
            git merge
               ↓
            ------------------------------------------------------------------------------------------
            Local Tracking Branch (Remote repository's name ("origin") and branch name can be omitted)
            ------------------------------------------------------------------------------------------
*/
