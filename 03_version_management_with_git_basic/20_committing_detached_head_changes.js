/* 
    Committing "detached HEAD" Changes
    ---
        Detached HEAD normally happens when you "Directly Checkout a Commit". Refer the explanation at 
            note 
                --------------------------------------------------------
                03_version_management_with_git_basic/12_detached_head.js
                --------------------------------------------------------

        IMPORTANT:
            When you Checkout a specific commit and you later add more changes to it and you finally commit it again, what do you think will happen?

            After you commit, when you open your branch list using the "git branch", you will see something like
                -------
                * (HEAD detached at e54647474)
                 master
                 ------
                    Take note that HEAD detached is not really a branch but indicating that we are currenly in that place

                    Now assuming we add more files and updates to our detached HEAD and add to staging area and finally commit it again, our latest commit will still be our HEAD

                    Now when we try to switch from the detached HEAD to master branch we will get a warning below
                        ------------------------------
                        "Warning: you are leaving 1 commit behind, not connected to any of your branches"
                        ------------------------------

                        You will be given a comit id for your detached HEAD to create a new branch so what you have to do is execute the command
                            ----------------------------------
                            git branch detached-head e54647474
                            ----------------------------------

                        Now, that branch would be added to your branch list. You can use the switch command to switch 

                        So now if you are satisfied with the content in there, it is best you MERGE it to your master branch by refering to the previous lessons... 
*/
