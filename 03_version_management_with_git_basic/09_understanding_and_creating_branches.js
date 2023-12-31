/* 
    BRANCHES and COMMITS
    ---
        The "MASTER" Branch is the DEFAULT name for the first branch we create in git project. 
        
        NOTE:
            We discussed earlier that if you want to ADD SOME NEW FEATURES, it is best we CREATE a COPY of the Existing Master (original) branch, work on it and then later MERGE it to the master branch...

        To get the OVERVIEW of ALL your BRANCHES you use the ff command
            ----------
            git branch
            ----------
                this displays ALL the branches in your project. By default you will only see 
                    --------
                    * master
                    --------
                        the * means that is the "default" at the moment



        To CREATE a NEW BRANCH use the ff command
            ------------------------
            git branch second-branch
            ------------------------
                NOTE:
                    Here there is No Quotation marks and Branch Names cannot contain spaces
                        i.e 
                            -----------------------------
                            git branch branch-name-to-use
                            -----------------------------
                                To check if the branch was created successfully use the use "git branch"



        To NAVIGATE / SWITCH to a Specific Branch of your choice use the ff command
            --------------------------
            git checkout second-branch
            --------------------------
                NOTE: 
                    The CHECKOUT command is used to SWITCH between DIFFERENT BRANCHES. After EXECUTING the above command you will see yourself in the new branch. 
                    
                    IMPORTANT:
                        Take note that for the first time of creation...
                            ----------------------------
                            New Branch === Master Branch
                            ---------------------------- 
                                


        ALTERNATIVE / ANOTHER method for "CREATING" a New Branch and Automatically "SWITCHING" to it can be done using the command below
            ----------------------------
            git checkout -b third-branch
            ----------------------------
                After working on this branch Extensively, and also adding it the Staging Area, and Commit it, if you switch to the master branch you will not see the change...

                In the next lecture you will see how to merge your master branch

                NOTE:
                    If you create a new Branch based on another Branch, all commits would be taken into the New Branch


        IMPORTANT:
            In the later version of Git, you can switch between branches by using the "Switch" Command... 
                visit the note 
                    13_branches_and_git_switch.js
*/
