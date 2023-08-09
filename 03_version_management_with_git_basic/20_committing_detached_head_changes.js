/* 
    Committing "detached HEAD" Changes
    ---
        Detached HEAD normally happens when you "DIRECTLY CHECKOUT a Commit". Refer the explanation at 
            note 
                --------------------------------------------------------
                03_version_management_with_git_basic/12_detached_head.js
                --------------------------------------------------------

        IMPORTANT:
            When you Checkout a specific commit and you later add more changes to it and you finally commit it again, what do you think will happen?

            After you commit, when you open your branch list using the "git branch", you will see something like
                ------------------------------
                * (HEAD detached at e54647474)
                 master
                 ------------------------------
                    Take note that "HEAD detached" is NOT really a BRANCH but "INDICATING THAT WE ARE CURRENTLY IN THAT PLACE". At the END it would be LOST

                    Now assuming we ADD more files and updates to our detached HEAD and add to staging area and finally commit it again, our latest commit will still be our HEAD

                    Now when we try to SWITCH from the "detached HEAD" to "master" branch we will get a warning below
                        ---------------------------------------------------------------------------------
                        "Warning: you are leaving 1 commit behind, not connected to any of your branches"
                        ---------------------------------------------------------------------------------

                        IMPORTANT: 
                            BUT You will be given a "commit id" for your detached HEAD to create a new branch. Make sure you STORE that ID somewhere safe. So what you have to do is execute the command
                                ----------------------------------
                                git branch detached-head e54647474
                                ----------------------------------
                                    So now a new Branch called "detached-head" would be created

                        Now, that branch would be added to your branch list. You can use the switch command to switch 

                        So now if you are satisfied with the content in there, it is best you MERGE it to your master branch by referring to the previous lessons... 
*/
