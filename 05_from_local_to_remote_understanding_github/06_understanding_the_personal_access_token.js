/* 
    UNDERSTANDING THE PERSONAL ACCESS TOKEN
    ---
        NOTE:
            When you Try to PUSH files from our Local Repo to Github and you are asked to SIGN IN, You can 
                -> Login from the Browser or
                -> Create a Personal Access Token by using the ff. steps

        It is very important that we need a PERSONAL ACCESS TOKEN to push our data into our REPO... We as creators of the Repo can create the "Access Token"

        Personal access tokens function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to authenticate to the API over Basic Authentication.

        In your GitHub follow the steps
            -> Go to Settings
            -> Click on Developers Settings Menu
            -> Click on Personal Access Tokens
                    If you have already created a personal access token, you can see it there.

                    NOTE: In my case, mine had expired so i had to create a new one

                    Generate new Token
                    ---
                        -> you will be asked to re-authenticate
                        -> Note means describe your Token
                                eg. 
                                    Token for Github module in Git Notes
                        -> Leave Expiration to 30days
                        -> Define access the Token Grants. Tick the ff.

                             "repo"
                                
                             "workflow"
                                    
                             "write:packages" 

                             "delete:packages" 
                                            
                             "gist" 
                                                
                             "user" 
                                                    
                             "delete_repo", 
                                                        
                             "write:discussion"

                                Now Generate Token.
                                    After Token is generated, make sure you COPY it and PASTE it in the GUI presented by GitHub for the Login and finally SignIn

                                When successfully Push
*/
