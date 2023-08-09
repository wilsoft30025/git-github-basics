/* 
    UNDOING / REVERTING "UNSTAGED CHANGES"
    ---
     Let's say our commit is successfully done. And now you apply some changes to any of your Tracked Files like what we are typing here...


NOTE: The 2 methods ("checkout" and "restore") below solves the same problem

-----------
METHOD 1...
-----------
     So we want to go back to the Status of the Latest Commit, use the ff. command
        -------------------------------------------
        git checkout 16_undoing_unstaged_changes.js
        -------------------------------------------
            NOTE: Since the branch we are referring to is our current branch, we don't add any branch name BUT we use  
                "--" or you OMIT it and use the above code

            This will take you back to your latest commit


    IMPORTANT: BUT if CHANGES are made for MULTIPLE FILES, you can use the following command
        --------------
        git checkout .
        --------------
            All TRACKED files in your CURRENT BRANCH will be tracked


-----------
METHOD 2...
-----------
    RESTORE
    ---
        Another command to serve that purpose is 
            ------------------------------------------
            git restore 16_undoing_unstaged_changes.js
            ------------------------------------------

            -------------
            git restore .
            -------------



IMPORTANT: DELETING UNTRACKED FILES
---
        Let's say we created a new file which is NOT yet STAGED, eg. test.txt which you want to DELETE..
        First use the command below to LIST the files
            -------------
            git clean -dn
            -------------
                This will DISPLAY all the files that fall within the category. If you are SATISFIED with the list displayed the use the command BELOW to delete

        -------------
        git clean -df
        -------------
            "f" means force...
            Git will FORCE and DELETE without any further questions...
*/
