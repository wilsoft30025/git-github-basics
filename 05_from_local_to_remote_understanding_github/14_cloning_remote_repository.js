/* 
    CLONING A REMOTE REPOSITORY
    ---
        What if we want to GET ACCESS to an EXISTING Repository from GitHub on our machine?
            Let's assume we have an empty folder on our Local Machine called "clone"

            Make sure your CLONE Folder is already open in VSCODE

        So now NAVIGATE to your GitHub repo you want to Clone 
            ... at the Top-Right you will see a button "CODE" click on it
            ... under it you will see clone. Under it we have 3 Tabs
                    1. HTTPS
                    2. SSH
                    3. GitHub CLI

                Copy any of the URL eg. HTTP and in your terminal execute the command
                    -------------------------------------------------------------------
                    git clone https://github.com/wilsoft30025/node3-weather-website.git
                    -------------------------------------------------------------------
                        This will COPY the entire project into our Clone Folder. 

                        HINT:
                            If you want the FILES rather to be CLONED into your Project BUT not the Project folder use the ff. command
                                ---------------------------------------------------------------------
                                git clone https://github.com/wilsoft30025/node3-weather-website.git .
                                ---------------------------------------------------------------------
                                    By adding a "SPACE" and "DOT" to the command

                        NOTE:
                            After copying if you execute "git status" you will get an error message
                                ----------------------------------------------------------------------
                                "fatal: not a git repository (or any of the parent directories): .git"
                                ----------------------------------------------------------------------
                                    Because we are NOT in a Git Repository in the Direct "CLONE" folder BUT if you navigate into the EXACT folder cloned, it will work very very well

                                    Now you can execute the branch commands and it will work fine


        PUSHING Changes to our GitHub
        ---
            Let's assume we edited the code, created our commits and ready to push to GitHub. Execute the command
                ----------------------------
                git push -u origin HEAD:main
                ----------------------------
                    You would be ask to "Authorized Login"... Provide your credentials and You are now good to Go

                    You are good to GO!!!
*/
