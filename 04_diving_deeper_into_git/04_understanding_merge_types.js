/* 
    UNDERSTANDING MERGE TYPES
    ---
        1. Fast-Forwards
        2. Non Fast-Forwards
            -> Recursive
            -> Ours
            -> Octopus
            -> Subtree


        BUT for the sake of the CORE CONCEPT of GIT, we will focus on the 2 most widely used merges which is the
            -> "Fast-Forwards" Merge Type
            -> "Recursive" Merge Type


            FAST-FORWARD Merge
            ---
                Let's say we have a "* master" branch with 3 commits
                    --------------
                    branch: master
                    --------------
                        m.1
                            m.2
                                m.3 

                Let's say we have a "feature" branch with 3 commits. BUT note that, it will contain the previous commit from the master branch

                    --------------
                    branch: feature
                    --------------
                        m.1
                            m.2
                                m.3 
                                    f.1
                                        f.2
                                            f.3


                How can we merge the "feature" branch into the "master" branch? The "FAST-FORWARD" merge WORKS ONLY IF
                    IMPORTANT
                        -------------------------------------------------------------------------------
                        -> NO ADDITIONAL COMMIT IN MASTER BRANCH (after the FEATURE branch was created)
                        -------------------------------------------------------------------------------
                            i.e 
                                NOTE: 
                                    m.3 in the master branch is the last change there
                            
                    -> Merge moves HEAD forward (to f.3) but does not create new commit
                            Ones you are done with the feature branch all commits is done. 
                            
                            We just have to tell our MASTER branch that the latest branch in the master branch now is the "f.3 commit in the end"            
*/
