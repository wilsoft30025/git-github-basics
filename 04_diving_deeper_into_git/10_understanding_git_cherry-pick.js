/* 
    UNDERSTANDING git cherry-pick
    ---

        How does Cherry-Pick be compared to Merge?
            Let's say we have a project with a working directory with 2 branches 
                i.e 
                    --------
                    * master
                    feature
                    --------
                    We worked on an update for both and finally committed it for final merge...

            Let's say you want to merge a SPECIFIC commit and only incorporate changes made in that commit alone. 
            
            Copy the specific commit ID and the Switch to the MASTER branch and use the command below;
                --------------------------------------------------------
                git cherry-pick caaf808f98b6355658d85639100117e83a4aee59
                --------------------------------------------------------
                    When successful, you will get a success message
*/
