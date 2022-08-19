/* 
---
    GIT - (https://git-scm.com/) - The Official Website
    ---
        Git (/ɡɪt/) is a distributed "VERSION-CONTROL" system for "TRACKING" changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. 

        Git "Controls" & "Track" code changes over time...

        Git is a Tool you download and install on your machine and it allows you to manage your code history and "Track Changes".

        This is a VERSION CONTROL software i.e
            a Software that runs on your computer which basically allows you to SAVE SNAPSHOTS of your code over time (in different commits and branches) which happens inside a repository. You can go back in time in your code if you need to.

        NOTE: 
            Git can only work on your local machine which is a problem if you loose your computer or travel without your computer. This is where GitHub comes into play...  

        All of this happens inside a REPOSITORY. For each of your project you will create a repository and then you create COMMITS and BRANCHES

        Types of Version Control System
        ---
            -> LOCAL Version Control System
               ---
                    This was the first version control system which was introduced into the market. It was maintained and hosted on the Local Developers Machine they are working on. Disadvantage was if the the machine crashes, all data is lost and also collaboaration was a hug nightmare for developers.

            -> CENTRALIZED Version Control System
               ---
                    Here improved on the Local Version Control System by having a Server holding the master Repo, where all workstation commits their code files to it. Here collaboration becomes easier BUT disadvantage is that if something happens to the main SERVER, we loose everything

            -> DISTRIBUTED Version Control System
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
            --- 
                    We start by using all operations locally before moving it to remove.

            -> Security
            ---
                    Git uses SHA-1 encryption to protect it.

            -> Open Source
            ---
                    All the developers across the globe comes together to improve it.

            -> Git Branch
            ---
                    You can create multiple branches

            -> Git saves snapshot not difference
            ---

            -> Work offline
            ---
                    You can work without internet by committing to local system before moving to cloud

            -> Distributed Version Control System
            ---
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
                    NOTE: 
                        If you get any output that means your installation was successful

*/
