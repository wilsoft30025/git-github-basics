/* 
    INTRODUCTION
    ----------------------------------------------------------------
    The HEROKU platform we finally use for deployment works closely with GIT and GITHUB, so it is best you setup a GIT and GITHUB account.
           
    ---
    GIT - (https://git-scm.com/)
    ---
        Git (/ɡɪt/) is a distributed "Version-Control" system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. 

        This is a VERSION CONTROL software i.e a software that runs on your computer which basically allows you to SAVE SNAPSHOTS of your code over time (in different commits and branches) which happens inside a repository. You can go back in time in your code if you need to.

        All of this happens inside a REPOSITORY. For each of your project you will create a repository and then you create COMMITS and BRANCHES

        Types of Version Control System
        ---
            -> Local Version Control System
               ---
                    This was the first version control system which was introduced into the market. It was maintained and hosted on the Local Developers Machine they are working on. Disadvantage was if the the machine crashes, all data is lost and also collaboaration was a hug nightmare for developers.

            -> Centralized Version Control System
               ---
                    Here improved on the Local Version Control System by having a Server holding the master Repo, where all workstation commits their code files to it. Here collaboaration becomes easier BUT disadvantage is that if something happens to the main SERVER, we loose everything

            -> Distributed Version Control System
               ---
                This is an improvement on top of Centralized Version Control System. Cloud based Storage to receive code files from Local Repo

        What Version Control Can Do
        ---
            -> Distributed Version Control
            -> Coordinated Work between multiple developers
            -> Who made what changes and when
            -> Revert back at anytime
            -> Local and Remote repos
            -> Keep track of Code history
            -> Take "Snapshots" of your file
            -> You decide when to take a snapshot by making a "commit"
            -> You can visit any snapshot at any time
            -> You can stage files before commiting

        Why should we use GIT
        ---
            -> Performance: 
                    We start by using all operations locally before moving it to remove.

            -> Security
                    Git uses SHA-1 encryption to protect it.

            -> Open Source
                    All the developers across the globe comes together to improve it.

            -> Git Branch
                    You can create multiple branches

            -> Git saves snapshot not difference

            -> Work offline
                    You can work without internet by committing to local system before moving to cloud

            -> Distributed Version Control System
                    The Distributed Version Control System is Z'



        GIT is used to Track and Commit your changes and to perform control. Quick Definitions in 

            -> WORKING Directory:
            ----- 
                    This is the folder or directory where you initialize your Git

            -> STAGING Area:
            ----- 
                    This is the good place to let Git know the things you want to IGNORE/TRACK using git add

            -> LOCAL Repository: (git commit i.e .git)
            ----- 
                    Where final files are committed. Assuming you make a mistake and you want to rollback, you will use "git checkout"

        If you don't have GIT installed, you can install it by downloading it per your specific operating system

        To CHECK if it is actually installed on your system,
            -> Open your terminal and type
                -------------
                git --version
                -------------
                    NOTE: If you get any output that means your installation was successful


    ------
    GITHUB - (https://github.com)
    ------
        Create an account if you are new
            -------------------------------  ---
            Email: waksoftwareltd@gmail.com  MKT
            -------------------------------  ---

        This is a platform where you can host your own GIT REPOSITORIES (Code) for FREE in other to share with other DEVELOPERS or just to keep it SECURE for yourself. It keeps track of all the changes you made as well


        CONFIGURE your Local GIT intallation with NAME and EMAIL used on GITHUB
        -----------------------------------------------------------------------
        NOTE: This is done ONES
            -> Open your terminal and enter the ff. codes

                -------------------------------------------------
                git config --global user.name "Wilfred Afagbegee"
                -------------------------------------------------
                    hit enter and repeat below

                ---------------------------------------------------------
                git config --global user.email "waksoftwareltd@gmail.com"
                ---------------------------------------------------------
                    hit enter and repeat below



    DIFFERENCE BETWEEN GIT and GITHUB
    ---
        GIT
        ---
            -> Distributed Version-Control System
            -> Git is installed and hosted on local system
            -> No internett connection required
            -> It is a command line tool
            -> It provides functionalities like Version Control Syste, Source Code Management

        
        GITHUB
        ------
            -> GitHub is designed as a Git repository hosting service
            -> It is exclusively Cloud based
            -> Code sharing is easy
            -> It provides a graphical interface
            -> In addition to Git features, GitHub provides many other features



    HOW TO INSTALL GIT ON MAC
    ---

*/
