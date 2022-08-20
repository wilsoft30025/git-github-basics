/* 
    APPLYING THE FAST-FORWARD MERGE
    ----
        Let's say you have a Project which is converted into a Working Directory...

        Since it's a new project we already have the "* master branch" as the default branch. So Let me commit the changes from here and continue at my new branch.
            m.1
                m.2
                    m.3 
        
        Now let's assume we create a new branch called the "feature" using the command below
            ---------------------
            git switch -c feature
            ---------------------
                This will create a new branch named "feature" and automatically assign it as defaul. to confirm if it was successful use the command below
                    ----------
                    git branch
                    ----------

                    When we open "git log" we will see the previous from the master branch

                    After confirmation let's assume we kept modifying the changes to we are ok
                        f.1
                            f.2
                                f.3

                    After all the changes made let's "add it to the staging area" and "commit it"

                    Before we Merge it to the Master we have to switch to the "* master" branch
                
*/
