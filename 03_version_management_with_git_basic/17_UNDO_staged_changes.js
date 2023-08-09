/* 
    UNDOING / REVERTING STAGED CHANGES
    ---
        Let's say we made changes to some file and you stage it by using 
            -----------------
            "git add test.js"
            ----------------- 
                NOTE: 
                    here we assume that it is not yet committed



    NOTE: 
        To pursue that you require 2 commands below for BOTH the 2 methods below

        METHOD 1
        ---

            After adding it and you realize it was a mistake, you require using the ff. 2 COMMANDS. Before we can "checkout" we need to first "reset"

                FIRST command
                    -----------------
                    git reset test.js
                    -----------------
                        we use this to BRING BACK the LATEST COMMIT or LATEST STAGE. It COPIES the latest stage of the file into the STAGING AREA

                FINAL command
                    --------------------
                    git checkout test.js
                    --------------------
                        after applying the first command, then initiate the checkout command

            IMPORTANT:
                The difference for UNSTAGED Changes is that you can just do "checkout" from the corresponding file names to get back the status

                BUT you added the files to the STAGING AREA already the you first have to use "GIT RESET" to bring back the Latest Status in the HEAD to the STAGING Area and then you can "CHECKOUT" the initial stage


        METHOD 2
        ---
            you require using the ff. 2 COMMANDS. Another command is "RESTORE" which works the same as the "RESET". BUT you can see that RESTORE is the most explicit based on the name. BUT both works the same way...

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
