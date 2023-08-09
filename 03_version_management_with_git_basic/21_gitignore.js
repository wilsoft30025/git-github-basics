/* 
    UNDERSTANDING .gitignore
    ------------------------
        In real world projects, you may choose not to include some files in your git. This could be some confidential SECURITY information which may be private

        Git has a feature you can use to ignore such files to be included called .gitignore

        We normally create that file in your root folder of your project. The file must be created manually by yourself
            ----------
            .gitignore
            ----------
                In this file you can specify all files, folders etc. to be ignored. For demonstration sake we created a log file 
                    --------
                    test.log
                    --------
                        Now add that file name in the .gitignore file

                        Let's assume we want to IGNORE all .log files, we don't need to specify the one by one but we use the extension with *
                            -----
                            *.log
                            -----


                        Let's say you want to exclude a specific to be included then use the !... see below
                            ------------
                            !include.log
                            ------------
                                This will include only the above files


                        For folders including sub files and folders
                            -------------
                            folder-name/*
                            -------------
                                exclude that specific folder and all sub folder and file
*/
