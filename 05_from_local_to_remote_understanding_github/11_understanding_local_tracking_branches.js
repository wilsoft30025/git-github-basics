/* 
    BRANCH TYPES OVERVIEW
    ---
        Let's say we have the following,
            Local Branch
            ---
                Branch on your machine only

            Remote Branch
            ---
                Branch in remote location (eg. in GitHub)

        Besides the Branches above we have OTHER branches
            Tracking Branche
            ---
                ...this ia all about exchanging information between the Local and the Remote branch

                    Remote Tracking Branch
                        ...this is a local copy of remote branch (not to be edited)
                                -> we can get the Latest State of the remote branch by using the command "git fetch"

                NOTE:
                    If you think about the Logic between the Local and Remote branches and the remote tracking branches in between, then we can use another branch type to make this efficient i.e
                        ---------------------
                        Local Tracking Branch
                        ---------------------
                            This is a local reference to a remote tracking branch (to be edited). This does not necessarily have to be reference to the remote tracking branch.
                                Commands like "git push" and "git pull" are available and the Logic now is the remote tracking branch gets the latest information from the remote branch

                                The Local Tracking Branch is connected to the Remote Tracking Branch and with all the changes incorporated we can then edit our LOCAL tracking Branch and ones done we can push this changes to the remote tracking branch and then push the changes to the remote branch on GitHub


        HOW ARE REMOTE AND LOCAL TRACKING BRANCHES CONNECTED
        ---
            Remote Branch (cloud)
            |
            git fetch (update) 
            |
            Remote Tracking Branch (Local cache of remote branch's content)
            |
            git merge
            |
            Local Tracking Branch (Remote repository's name ("origin") and branch name can be ommited)

*/