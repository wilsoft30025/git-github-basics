/* 
    UNDOING / REVERTING "UNSTAGED CHANGES"
    ---
     Let's say our commit is successfully done. And now you apply some changes to any of your Tracked Files like what we are typing here...

     So we want to go back to the Latest Commit Status, use the ff. command
        -------------------------------------------
        git checkout 16_undoing_unstaged_changes.js
        -------------------------------------------
            since the branch we are refering to is our current branch, we don't add any branch name BUT we use  -- or you omit it and use the above code

            This will take you back to your latest commit


    BUT if changes are made for multiple files, you can use the following command
        --------------
        git checkout .
        --------------
            All tracked files in your current branch will be tracked

    
    RESTORE
    ---
        Another command to serve that purpose is 
            ------------------------------------------
            git restore 16_undoing_unstaged_changes.js
            ------------------------------------------

            -------------
            git restore .
            -------------


    DELETING UNTRACKED FILES
    ---
        Let's say we created a new file which is not yet staged, eg. test.js you will use the ff command. If you are not sure, first use the command below;
            -------------
            git clean -dn
            -------------
                This will DISPLAY all the files that fall within the category. If you are satisfied with the list displayed the use the command below to delete

                    -------------
                    git clean -df
                    -------------
                        "f" means force
*/
