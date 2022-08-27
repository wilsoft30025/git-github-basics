/* 
    COPYING FILES AND FOLDERS
    ---

        The command for COPY is "cp"
            COPY needs 2 Types of information
                1. Source path
                2. Target path

                    Copying SINGLE file
                    ---
                        -----------------------------
                        cp test/index.html testCopied
                        -----------------------------

                    Copying MULTIPLE files
                    ---
                        -----------------------
                        cp -r test/ testCopied/
                        -----------------------
                            Here we cannot do by file by file. We introduce a flag "-r"  is "recursive" meaning copy the entire content of the folder. The "/" at the end of the test/ is important so that is can copy the entire contnt in the folder else it will copy the folder itself.
    
    MOVING FILES AND FOLDERS
    ---

        The command for MOVING Files is "mv"
            MOVE needs 2 Types of information
                1. Source path
                2. Target path

                    Moving SINGLE file
                    ---
                        -----------------------------
                        mv test/index.html testMoved/
                        -----------------------------

                    Moving FOLDER files
                    ---
                        ------------------
                        mv test testMoved/
                        ------------------


            NOTE:
                We can use the "mv" to "RENAME" files... see example below
                    -----------------------
                    mv styles.css style.css
                    -----------------------
                        This will rename the file to "style.css"
*/
