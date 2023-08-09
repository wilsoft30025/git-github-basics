/* 
    INSTALLING GIT ON MACOS
    --- 
        Visit Homebrew official website -  https://git-scm.com/
           

            Click Download for MacOS
                There are so many methods for the installation.

                ----------------------------------------------------------------------------------------------------
                IMPORTANT:
                    To check if you already have HOMEBREW installed, type the command
                        ---------      -------
                        brew help  OR  brew -v
                        ---------      -------
                            If you get an output, then it there BUT if you get "command not found" then it means you have to install it again
                ---------------------------------------------------------------------------------------------------

                First:
                ----- 
                    Visit Homebrew (https://brew.sh/)

                    Homebrew: This is a PACKAGE INSTALLER for MAC SYSTEMS and it makes installing Git easy. We visit the website above
                    
                    Copy the Install Homebrew Url and paste in your command line and press enter, provide your system password and wait for it to finish installation.

                    IMPORTANT:
                        Most at times after installing Homebrew for the first time, you normally get the ff. errors when you execute any command with brew
                            ----------------------------
                            zsh: command not found: brew
                            ----------------------------

                        NOTE: This is because Homebrew is NOT ADDED to your PATH. To do that follow the steps below

                        After the installation was made you got the ff documentation
                            ==> Next steps:
                                - Run these TWO commands in your terminal to add Homebrew to your PATH:
                                ------------------------------------------------------------
                                echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/wilfredafagbegee/.zprofile
                                eval "$(/opt/homebrew/bin/brew shellenv)"
                                ------------------------------------------------------------
                                        Copy each line, paste and press enter

                                - Run brew help to get started
                                - Further documentation:
                                    https://docs.brew.show

                    After installing Homebrew execute the code below
                        ----------------
                        brew install git
                        ----------------
                            This will install the Latest Git Version

                        Now to confirm if installation was successful use the ff. command
                            -------------
                            git --version
                            -------------

                            NOTE:
                                In case it does not show, QUIT the terminal and open again                              
*/
