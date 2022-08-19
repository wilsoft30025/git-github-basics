/*
    WORKING DIRECTORY vs REPOSITOTY
    ---
    Let's say we have a working directory i.e project folder mannaged by Git with the assumptions that you made some changes to some of your files..

    NOTE:
        Whenever we create a "NORMAL" project folder into a "WORKING" directory, we automatically create another "HIDDEN" Folder
            ----
            .git
            ----
                called Git Repository

                Here the Working Directory is the part with the actual Project Files and the Repository is the area where the magic happens which makes it efficient version management tool...

                The Repository contains 2 different areas
                    1. Staging Area (index File)
                    2. Commits (Object Folder)
                            ...this contains the different commits snapshots

                    Reasons
                    ---
                        We first add the changes to the "Staging Area". You can think of this area as a "DRAFT" area where changes are made to specific files. Ones All changes are added which should be part of the Next Commit, then you create this commit, you commit the changes...


                    NOTE:
                        Git = Tracking Changes - NOT storing files again and again
*/
