/* 
    PUSH CODE TO GITHUB (remote REPO)
    ----------------------------------------------------------------

    IMPORTANT: 
        Recently Github has decided to rename the original branch from "master" to "main". See OLD and CURRENT codes below

        --------------------------
        OLD
            git push origin master

        NEW
            git push origin main
        --------------------------


    REMOTE REPO - This is a repo hosted in Cloud or Somebody else's server eg. GITHUB

        1. First Login to your GitHub account and create a 
            -> New Repository and give it a "Name"
            -> Description

        2. You then set the status by either
            -> Public (visible to everyone)
            -> Private (only you can see and invite other people)

        3. DON'T tick the ff. 
            -> initialize repository with a README, 
            -> Add .gitignore, 
            -> Add a license

        4. In other to push your code from Local to Cloud (GitHub), you have to let your Local repo know about your GitHub Repo (CONNECT THEM)

        Below generated for you By GitHub
            ...push an existing repository from the command line

            -------------------------------------------------------------
            git remote add origin git@github.com:wilsoft30025/natours.git
            git branch -M main
            git push -u origin HEAD:main
            -------------------------------------------------------------

                -> So copy the part of code generated below by GitHub to your command line to first Create A "Remote" for your local project

                    -------------------------------------------------------------
                    git remote add origin git@github.com:wilsoft30025/natours.git   - DONE ONES
                    -------------------------------------------------------------
                        this code will add a remote branch/repo called 
                            "origin" 
                                in "git@github.com:wilsoft30025/natours.git"
                                    hit enter for them to now be CONNECTED (i.e to create REMOTE)

                -> Now proceed by entering the code below

                    -----------------------        ----------------------------
                    git push -u origin main   or   git push -u origin HEAD:main
                    -----------------------        ----------------------------
                        ...The code above pushes your local repo to your remote repo using the "-u" flag

                        ...Sometime it would ask of your "email and password" from GITHUB

                        ...Now files will start copying.... 0% - 100%. Depending on the size of your files, it will take some time

                        Now go into your Gihub Account and reload your project.

                        To see the "GRAPH" of all your COMMITS,
                            i. Open your project page
                            ii. Click on "Insights" Tab
                            iii. Click on network

                        To see all of your individual COMMITS,
                            i. Open your project page
                            ii. Click on "commits" which is normally attached to the number of commits
                            iii. After loading all list of commits, click on a specifc commit to display the exact changes you made

                    IMPORTANT: 
                        MASTER / MAIN BRANCH: This the main branch of Commit/Saved point


    PULL (opposite of push)
    ----------------------------------------------------------
        Imagine that you are on 2 different computers, you start work on one computer and continue on the other computer
            You could PUSH the code from "one computer" and then on the other one simply "PULL" it. eg. if i want 

            The command will be almost the same but instead see code below

                ----------------------------
                git pull -u origin HEAD:main   i.e branch you are currrently working in
                ----------------------------


    README FILE
    ----------------------------------------------------------
        This is a STANDARD File that every single repository should have. It contains the description of your application you want your visitors to see

        Create it n your root folder
            ---------
            readme.md
            ---------
                it stands for "MARKED DOWN"
                    open the readme.md file and put some stuff into it
                        use # for titles (written in bold)

            Follow previous steps and commit it to GIT and GITHUB

            NOTE: When connecting to GitHub, THE MAIN
                ------------------------------
                git status
                git add readme.md
                git commit -m "Added a readme"    -> local repo

                git push -u origin HEAD:main      -> remote repo (GitHub)
                ------------------------------

*/
