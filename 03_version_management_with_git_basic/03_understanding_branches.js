/* 
    UNDERSTANDING BRANCHES & COMMITS
    ---
        Already we know the Working Directory is our Project Managed by Git... 
        
        If you CREATE the new Git Project with all your FILES and multiple COMMITS, then all these commits will be stored in so called "MASTER BRANCH". 
        
        You can think of the Master Branch as a folder inside your Git Project and the folder holds all the different versions of your project that you had i.e
            ...1st commit
            ...2nd commit
            ...3rd commit 

            NOTE:
                You can always jump back to previous versions therefore you have an entire history of the project that you created. 
                
                We could now say this is the finished FIRST version of your website and inside the master branch is the core folder that contain the running version of the website that you currently have...

                Lets say you want to implement a new feature into your website i.e.
                    ...created a new landing page
                    ...updated landing page etc

                    you could add additional commits or code versions to this master branch BUT that is not necessarily what you want to do BECAUSE working on the existing Master Version of your website 
                        i.e 
                            Live Version of your website might BREAK your website if you accidentally introduce BUGS and this is not what you would want...

                    So it is advisable you create a COPY of the existing version of your website, work on that new feature there and ones it is finished, then you implement it in the running version of your website into the master branch and that is the reason why BRANCHES are existing

                    With branches we can create completely new working directory which is an entire copy of the current stage of your master branch but this branch is NOT called master branch but you can give it a different name. 
                        eg. Landing Page Branch
                                this contains all previous commits that you had in the master branch or the previous code versions BUT you can now work independently from the master branch... It's a full copy so you can add New Commits, New Features in the branch

                                Ones done and tested you can now add it to the Master Branch and that is called "MERGE"

                                The big advantage is you and other developers can work independently from each other on dedicated features and finally MERGE the work together to the actual running version of the website...
*/
