/* 
    PREPARING APP FOR DEPLOYMENT
    --------------------------------------------------------------------------------
        COMPRESSION
        -----------
            i. Install compression package: This package will compress all of our responses. eg. when we send a text response to a client i.e whether text, json, html code. With the compression package that code will reduce in size drastically
                -----------------
                npm i compression
                -----------------

            ii. Open app.js file and require the package
            iii. Call the file before the routes are called

                    -------------------------------------------
                    const compression = require("compression");

                    app.use(compression());
                    --------------------------------------------

                NB: This will then return a middleware function which will then return all the text that is sent to clients. It is also not going to work with images because it is already compressed


        CONSOLE.LOG
        -----------
            Get rid of MOST of the "console.log" which we have still in our code. This is because these logs will end up in the hosting platform (END UP BLOATING THE PLATFORM) and we don't want to pollute the logs in production



        BELOW ARE OPTIONAL DEPENDEING ON THE FRONT END APP USING
        --
        CHANGE URLS OF API CALLS (CLIENT SIDE)
        --------------------------------------
            Make sure your api calls from the frontend are not hard coded like below which works only on local machine
                -----------------------------------------
                http://localhost:3000/api/v1/users/login

                For above to work on production, you need to resturcture above code to below Since the API and Frontend are on the same server

                -------------------
                /api/v1/users/login
                -------------------

                NOTE: If you use frontends like React, Angular etc. then it might not work this way


        CREATE FINAL BUNDLE (Client Side)
        ---------------------------------
            -> Open package.json
            -> Under scripts : build:js
                replace the "watch" with "build"
                    This will create a compressed JS Bundle
                        npm run build:js
                            (this will build the final js file in bundle)
                                After building, it will create ".cache" folder in the project directory. Add this to 
                                .gitignore file

                                Push code to commit and github
*/
