/*
    WORKING DIRECTORY vs REPOSITORY (GIT UNDER THE HOOD)
    ---
    Let's say we have a "WORKING DIRECTORY"
        i.e project folder managed by Git with the assumptions that you made some changes to some of your files..

    NOTE:
        Whenever we turn a "NORMAL" project folder into a "WORKING DIRECTORY" , we automatically create another "HIDDEN" Folder which is .git
            ----
            .git
            ----
                called "Git Repository"

                Here the 
                    -------------------
                    "Working Directory"
                    ------------------- 
                        is the part with the "Actual Project Files" 

                    ------------
                    "Repository"
                    ------------ 
                        is the AREA where the MAGIC happens which makes it efficient version management tool...

                The Repository contains 2 different areas
                    1. STAGING Area (index File)
                    2. COMMITS (Object Folder)
                            ...this contains the different commits/snapshots

                    Reasons
                    ---
                        We first add the changes made to the "Staging Area". You can think of this area as a "DRAFT" area where file changes are made to specific files. 
                        
                        Ones All changes are added which should be part of the Next Commit, then you create this commit, you commit the changes...


                    NOTE:
                        GIT means TRACKING CHANGES
                            - NOT storing files again and again
                            - It is only the First Initial Commit which is Stored
                            - It compares the Previous Commit with the Current Commit and Only Track the changes
*/
