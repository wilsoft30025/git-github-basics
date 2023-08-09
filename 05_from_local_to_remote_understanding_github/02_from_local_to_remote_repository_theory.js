/* 
    CONNECTING GIT & GITHUB - LOCAL TOM EMPTY REPO
    ---
        Git
        ---
            Local Repository
                ...local project manage by Git

        GitHub
        ---
            Remote Repository
                ...local repo is brought here to be accessible in the Cloud


        NOTE:
            When a project moved to GitHub, you can also assign who can have access to the repository.
            To bring the Local to the Cloud we need to establish a connection between the 2 since they both are separate tools without any default connection.

            First we have to run a Git Command for them to know themselves so that they can now exchange Data between them.

            The command to run is below
                -------------------------
                git remote add origin URL
                -------------------------
                    "git" 
                        initializes a git command we know already

                    "remote add" 
                        stands for a NEW REMOTE CONNECTION we want to establish from our local repository

                    "origin URL" 
                        stands for SPECIFIC REPOSITORY we want to connect to
                            -> "origin" means the name of the remote machine or alias/shorthand of the URL of the remote repository
                            -> "URL" is a unique URL to the remote repository on the remote server

                        NOTE:
                            "origin" is a name we could change or use a different alias BUT with the purpose of this course we will refer to the origin of this keyword as the SHORTHAND for our URL or Repository

                            With the above URL, then we will have our connection set

            After the connection has been established, we then have to bring data from our LOCAL REPO to our CLOUD REPO. We then use the command
                --------
                git push
                --------
                    pushing the Local Data to the Cloud

            We can also CREATE BRANCHES in GitHub and this information will be something we want to have Locally in our Repo. For this we use the command below
                --------
                git pull
                --------
*/
