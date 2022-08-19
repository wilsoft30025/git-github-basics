/* 
    SETTING UP SSH KEYS IN GITHUB
    ----------------------------------------------------------------
    How to transfer files (commits) from our local machine to GitHub in a SECURED WAY is to use SSH!!!

    SSH stands for "Secured Shell" and it gives us a means of securely communicating with another machine.

    To generate these files we need to run some commands in the terminal

    STEPS
    -----
    Run the ff commands in the terminal

        1. First CHECK/SEE if you already have SSH on our machine.  the command be

            ---------------
            ls -a -l ~/.ssh
            ---------------

                Explanation of Above Code
                ---
                    1. ls: 
                            this allows us to list all the content of a fiven directory
                    2. -a:
                            makes sure that even hidden files and folders show up
                    3. -l:
                            this will make the format a bit easier to read i.e from top to bottom
                    4. ~/.ssh:
                            this is path to the folder of which we are trying to print its content

                Press enter

        2. If you don't already have "id_rsa" and "id_rsa.pub" then it means we have to create a new keys BUT if you have that files already it means you have the keys. Use the ff. code below to create new SSH

            -------------------------------------------------------
            ssh-keygen -t rsa -b 4096 -C "waksoftwareltd@gmail.com"
            -------------------------------------------------------

                Explanation of Above Code
                ---
                    1. ssh-keygen:
                            this will allow us to generate SSH Key Pair
                    2. -t:
                            this stands for Type 
                    3. rsa:
                            there are various protocols we can use BUT we will use the popular "rsa". rsa is just the last name initials for the 3 creators of the algorithm
                    4. -b 4096:
                            this is "bits" i.e how many bits for the key to make it more secured and the most common value is 4096
                    5. -C "waksoftwareltd@gmail.com":
                            this is where we can provide a comment as a label. Most at times you can append it with your email address


        3. After pressing enter you would be asked the ff question 

                -> "Enter file in which to save the key (/Users/wak/.ssh/id_rsa):"? 
                        if you are ok with the default then press enter

                -> if file already exist you can overite

                -> "Enter passphrase (empty for no passphrase):"? 
                        press enter if you want to use the default

                -> Hit enter again to confirm the paraphrase above

                -> Now the key has been created

        4. Now run command below to CHECK/CONFIRM if file is really created

                ---------------
                ls -a -l ~/.ssh
                ---------------

                Now you can see that the 2 files are created successfully for "id_rsa" and "id_rsa.pub"

                Now
                    id_rsa
                    --- 
                        -> is a secret file which we will keep on our machine without sharing with anyone

                    id_rsa.pub
                    ---
                        -> is a public file which we will share with both "GitHub" and "Heroku" so that they can secure the communication between our machine and their servers

        5. Make sure that our SSH Key Pair is actually used the next time we setup the SSH connection

            Run the ff. commands
                ----------------------
                eval "$(ssh-agent -s)"
                ----------------------
                    All this command is going to do is to start up SSH Engine. After running I got 
                        ---
                        "Agent pid 2244" 
                        ---
                        
                            which means it is already running

        6. Register the file by using the ff. code

                ------------------------
                ssh-add -K ~/.ssh/id_rsa
                ------------------------
                    You will see the success results 
                        ---
                        Identity added: /Users/wak/.ssh/id_rsa (waksoftwareltd@gmail.com)
                        ---



    HOW TO USE SSH IN 3RD PARTY SERVICES (GITHUB)
    ------------------------------------
        1. Login to your GitHub Account

        2. For the FIRST TIME before we PUSH the files to GitHub, we have to link the SSH to GitHub

        3. Now we have to take the PUBLIC KEY file and give it to GitHub so that in can create that secured connection
            i. Go to Settings in your GitHub Account

            ii. Click on SSH and GPG keys

            iii. Click "New SSH Key"

            iv. Give it a name i.e "Title" to identify the key eg. Home iMac

            v. Provide the Key
                -> Use the ff command from the Terminal to get the Key

                        ---------------------
                        cat ~/.ssh/id_rsa.pub
                        ---------------------
                            This will "PRINT" your SSH Public key for you. Copy it and paste it to your GitHub SSK keys and save it

        4. Now to test if the SSH connection is successfully established to GitHub use the ff commands
                ---------------------
                ssh -T git@github.com
                ---------------------
                    if it works that means our SSH is connected. You will see the ff. message below
                        -> Hi wilsoft30025! You've successfully authenticated, but GitHub does not provide shell access.

        5. Now you can push your CODE 
*/
