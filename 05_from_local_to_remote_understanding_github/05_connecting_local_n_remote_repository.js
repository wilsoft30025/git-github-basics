/* 
    CONNECTING LOCAL AND REMOTE REPOSITORY
    ---
        After creating the Remote Repo for the first time, it becomes Empty with no Data or Branch... Now let's learn how we can push an existing repository from the command line

        In other to push your code from Local to Cloud (GitHub), you have to let your Local repo know about your GitHub Repo (CONNECT THEM)

        Below generated for you By GitHub
            ...push an existing repository from the command line. Execute the commands below for Fresh Projects

            -----------------------------------------------------------------------
            git remote add origin git@github.com:wilsoft30025/git-github-basics.git
            -----------------------------------------------------------------------
                ...for the fist time execute the above code. As we discussed earlier, after executing above, we can then refer to the url using the shorthand "origin"

            git branch -M main
            git push -u origin HEAD:main
            -----------------------------------------------------------------------
*/
