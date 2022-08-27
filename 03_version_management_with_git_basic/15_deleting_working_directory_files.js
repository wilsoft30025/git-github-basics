/* 
    DELETING WORKING DIRECTORY FILES
    ---
        Lets assume you are currently in your preferred branch and you want to delete a specific file

        First you have to CHECK which files are currently in the "STAGING AREA". To see all the files use the ff. command
            ------------
            git ls-files
            ------------

        After Listing all the files, how can we delete it from the Working Directory...
            -----------------------------------------
            git rm 05_preparing_app_for_deployment.js
            -----------------------------------------
                After exuting the command you can use the "git status" to check the status of your action. You can decide to "commmit" the changes

                Using 
                    "git ls-files" again will prove to you that the files is no longer in the staging area...

                Now finally commit it to confirm at the last stage... 
*/
