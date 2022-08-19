/* 
    Branches and Commits
    ---
        The Master branch is the default name for the first branch we create in git project. We discussed earlier that if you want to add some new features, it is best we create a copy of the master branch, work on it and then later merge it to the master branch...

        To get the overview of your branches you use the ff command
            ----------
            git branch
            ----------
                this displays all your branches


        To create a new branch use the ff command
            ------------------------
            git branch second-branch
            ------------------------
                NOTE:
                    No quotation marks and branch names cannot contain spaces


        To navigate to a specific branch use the ff command
            --------------------------
            git checkout second-branch
            --------------------------
                After the above command you will see yourself in the new branch. Take note that Your New Branch will be the same as Your Master Branch...
                

        Another method for creating a new branch and automatically switching to it can be done using the command below
            ----------------------------
            git checkout -b third-branch
            ----------------------------
*/
