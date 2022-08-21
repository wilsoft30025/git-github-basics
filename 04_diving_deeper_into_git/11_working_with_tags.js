/* 
    WORKING WITH TAGS i.e git tags
    ---
        This helpful command is about tagging commits. TAGS are used to tag important stages in our project history and generally differenciate between LIGHT Weight tags and ANNOTATED tags.

            Light Weight Tag:
            ----
                A pointer towards a commit in a branch i.e like the branch itself

            Annotated Tag:
            ----
                It's a full object in Git. i.e it contains a lot of information like
                    ...email of the person who added this tag


        To CHECK all the Tags you have in your project use the ff. command
            -------
            git tag
            -------

    LIGHT WEIGHT TAG example
    ---
        To ADD a new tag to a specific commit, use the ff command
            ----------------------------------------------------
            git tag 1.0 caaf808f98b6355658d85639100117e83a4aee59
            ----------------------------------------------------
                "1.0" is the name
                followed by the commit id


    ANNOTATED TAG example
    ---
        To ADD a new tag to a specific commit, use the ff command
            ----------------------------------------------
            git tag -a 2.0 -m "this is the latest version"
            ----------------------------------------------
                "2.0" is the Tag Version
                "-m" is the Tag Message


        If want to SHOW a Specific Commit with using a TAG, then use the ff command
            ------------
            git show 1.0
            ------------
                when this command is executed, the difference between the "Light-Weight" and "Annotated" Tag is that, the Annotated Tag has an extended details like
                    ...Tagger: Wilfred Afagbegee<wilsoft30025@gmail.com
                    ...Tag Message etc.


        You can even CHECKOUT commits using "TAG" by using the ff command
            ----------------
            git checkout 1.0
            ----------------
            

        To REMOVE / DELETE Light-weight Tags, use the ff command
            --------------
            git tag -d 1.0
            --------------


    
*/
