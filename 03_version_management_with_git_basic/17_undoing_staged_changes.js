/* 
    UNDOING / REVERTING STAGED CHANGES
    ---
        Let's say we made changes to some file and you stage it by using 
            -----------------
            "git add test.js"
            ----------------- 
                NOTE: 
                    here we assume that it is not yet committed

        METHOD 1
        ---

            After adding it and you realize it was a mistake, you require using the ff. 2 COMMANDS. Before we can "checkout" we need to first "reset"

                FIRST command
                    -----------------
                    git reset test.js
                    -----------------
                        we use this to bring back the latest commit or latest stage. It copies the latest stage of the file into the staging area

                FINAL command
                    --------------------
                    git checkout test.js
                    --------------------
                        after applying the first command, then initiate the checkout command


        METHOD 2
        ---
            you require using the ff. 2 COMMANDS. Another command is "RESTORE" which works the same as the "RESET"

                FIRST command
                    ----------------------------
                    git restore --staged test.js
                    ----------------------------

                FINAL command
                    --------------------
                    git checkout test.js
                    --------------------
                        after applying the first command, then initiate the checkout command
*/
