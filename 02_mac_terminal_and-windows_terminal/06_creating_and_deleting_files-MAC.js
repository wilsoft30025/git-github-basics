/* 
    CREATING FOLDERS
    ---
        To CREATE a folder we use the command "mkdir"
            meaning "make directory i.e create folder"
                ----------
                mkdir Test
                ----------
                    Folder called Test is created


    CREATING FILES
    ---
        To create a SINGLE file we use the command "touch"
                ----------------
                touch index.html
                ----------------
                    "touch" simply means touch existing files and simply change the date when the files was changed the last time. In case a file is not existing yet, the it will create a new file else it will rename the date

        To create MULTIPLE file we use the command 
                --------------------------
                touch styles.css script.js
                --------------------------

    
    DELETING FILES
    ---
        To delete a file we use the command "rm"
            -----------------------
            rm styles.css script.js
            -----------------------
                This command deletes the file PERMANENTLY without a PROMPT. Make sure you decide well before using the command because you cannot find it in the Recycling Bin / Trash
            


    DELETING FOLDERS
    ---
        To delete a folder use the command "rmdir"
            ----------
            rmdir Test
            ----------
                NOTE:
                    Before you can DELETE a folder, make sure it EMPTY with no files. If you try to delete a folder with files inside using the above command, you will get the ff. warning message 
                        -----
                        "Directory not empty"
                        -----

                    See the NEXT LECTURE for how to remove folders with files inside. NOT RECOMMENDED IF YOU ARE A BEGINNER
*/
