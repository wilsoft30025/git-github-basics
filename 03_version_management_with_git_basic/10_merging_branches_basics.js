/*
    MERGING BRANCHES - BASICS
    ---
        As discussed earlier, TOUCHING and WORKING on the "MASTER" branch is DANGEROUS, so it is advisable you have a branch you will work on extensively and later merge it to your master branch

        The IDEA behind MERGING is that if you work on a Separate Feature in a Separate Branch and you finish this feature, you can COMBINE both branches...

        NOTE:
            BEFORE you do the MERGING, make sure you LOCATED IN THE BRANCH WHERE ADDITIONAL / OTHER BRANCH SHOULD BE ADDED TO. So here we will make sure we are in the MASTER branch

            IMPORTANT: So here we want to ADD our "third-branch" to the "master" so we must make sure we are currently in the 
            "* master" before we perform the task

        To MERGE, we use the following command
            ----------------------
            git merge third-branch
            ----------------------
                So here we merged the THIRD BRANCH to our MASTER BRANCH. When Merging is done successfully, you will find all your files shown...

                You can use the "git log" to access the activity logs to confirm if all commits are shown

                When the logs were shown you saw something like 
                    ------------------------------
                    (HEAD -> master, third-branch)
                    ------------------------------
                        Move to next lecture for proper explanation
*/
