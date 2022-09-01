/* 
    DELETING REMOTE BRANCES & PUBLIC COMMITS
    ---
        Let's say we have a project we are working on and we want to DELETE branches for LOCAL and REMOTE. Assuming after listing our branches we had the results below;

        git branch -a
                -------------------------------
                feature
                feature-remote-local
                * master
                remotes/origin/feature
                remotes/origin/feature-remote
                remotes/origin/main
                -------------------------------

            For LOCAL branch DELETE we use the ff. command
                ---------------------
                git branch -D feature
                ---------------------

            For REMOTE TRACKING branch DELETE we use the ff. command
                --------------------------------------------
                git branch --delete --remotes origin/feature
                --------------------------------------------

            For REMOTE branch (eg. GitHub) DELETE we use the ff. command
                --------------------------------
                git push origin --delete feature
                --------------------------------
*/
