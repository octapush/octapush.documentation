/*
 * octapush.docs / configs.js
 * =================================================================================
 * 
 * Get the latest version of octapush.docs from:
 * https://github.com/octapush/octapush.docs
 * 
 * =================================================================================
 * 
 * Author   : Fadhly Permata
 * eMail    : fadhly.permata@gmail.com
 * URLs     : - Web Profile     => http://fadhly.hol.es
 *            - LinkedIn        => https://www.linkedin.com/in/fadhlypermata
 *            - StackOverflow   => http://stackoverflow.com/users/story/4147978
 *            - GitHub          => https://github.com/fadhly-permata
 * 
 * =================================================================================
 * 
 * This file is a part of octapush.docs (https://github.com/octapush/octapush.docs).
 * And This file will be used as configuration data of octapush.docs.
 * 
 * =================================================================================
 * INFO:
 * 
 * It's recommended to pack this configuration (this is javascript file) file to 
 * make sure octapush.docs is loaded faster. Remove any commented line on this files,
 * except comment lines on the header.
 * 
 * You are not ALLOWED to remove this metadata lines.
 *
 */

(function(w) {
    'use strict';


    let configurations = {
        // Main application settings
        application: {
            /**
             * Name         : title
             * Type         : String 
             * DefaultValue : 'OCTAPUSH.DOCS'
             * Description  : The title of your documentation.
             */
            title: 'OCTAPUSH.DOCS',


            // Your github data property that will be fetched.
            githubData: {
                /**
                 * Name         : owner
                 * Type         : String 
                 * DefaultValue : 'octapush'
                 * Description  : The owner name of project
                 */
                // The owner name of project
                owner: 'octapush',


                /**
                 * Name         : project
                 * Type         : String 
                 * DefaultValue : 'octapush.docs'
                 * Description  : The project name
                 */
                project: 'octapush.docs',


                /**
                 * Name         : branch
                 * Type         : String 
                 * DefaultValue : 'master'
                 * Description  : The branch name
                 */
                branch: 'master',


                /**
                 * Name         : documentDirectory
                 * Type         : String
                 * DefaultValue : 'docs-data'
                 * Description  : The directory name inside your project that will be used as your
                 *                documentation folder.
                 * 
                 * Note         : DO NOT USE NESTED DIRECTORY.
                 */
                documentDirectory: 'docs-data'
            },


            // The sections that will be used for appearancing your documentation
            appearances: {
                markdown: {
                    /**
                     * Name         : convertUrlIntoAchor
                     * Type         : Boolean
                     * DefaultValue : true
                     * Description  : If TRUE, all url that listed on your markdown document will
                     *                be rendered as hyperlink (anchor).
                     */
                    convertUrlIntoAnchor: true
                },
                sideMenu: {
                    /**
                     * Name             : textCase
                     * Type             : String 
                     * DefaultValue     : 'capitalize'
                     * supportedValue   : 'uppercase', 'lowercase', 'capitalize'
                     * Description      : The text-case that will be used on side menu
                     */
                    textCase: 'capitalize', // uppercase, lowercase, capitalize


                    /**
                     * Name             : background
                     * Type             : String 
                     * DefaultValue     : 'white'
                     * supportedValue   : 'white', 'brown'
                     * Description      : Side menu background color
                     */
                    background: 'brown', // white | brown,


                    /**
                     * Name             : color
                     * Type             : String 
                     * DefaultValue     : 'danger'
                     * supportedValue   : 'primary', 'info', 'success', 'warning', 'danger'
                     * Description      : Side menu font color
                     */
                    color: 'danger' // primary | info | success | warning | danger 
                }
            },

            additionalData: {
                /*
                 * INITIAL PAGE
                 * When we does not get any query string, we'll be load this
                 */
                initialPage: {
                    useFirstMenuItem: true,


                    customInitialPage: {
                        // The title of your document.
                        title: 'home', // <== don't bother the case, we'll CAPITALIZE the "title" text.


                        // The url of your initial page.
                        url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/9087473574e115a76a1d313cf59126ba0891da10',


                        // Jus't mention your document file type. So  we know how to handle it.
                        //
                        // NOTE:
                        // octapush.docs has ability to render lot file type.
                        renderAs: 'MD' 
                    }
                },


                // Your side menu
                sideMenu: {
                    // Display only MD files.
                    showMdFilesOnly: false,


                    // Hide empty directory.
                    hideEmptyDirectory: true,


                    /*
                     * The files that will be hided on side menu.
                     * Write the github api PATH's only, and write inside quote, and comma separated.
                     * 
                     * NOTE:
                     * We don't care about your text case, you can write it freely.
                     */
                    hideFilesOrDirectory: [
                        'Hidden Directory', // <== This Directory will be hidden (include files inside it)


                        'editing documents/hidden file.MD', // <== This file will be hidden
                        'license.md', // <== hide only from documentation directory (but not removing from "before" or "after" section)
                    ],


                    // Additional menus to put first on side menu.
                    // The menus will be sorted by position of Array.
                    //
                    // NOTE FOR THIS STATIC LINK:
                    // - Becareful, URL from api.github.com will be changed whenever you updating (create/update/delete) it.
                    before: [
                        // {
                        //     title: 'introduction',
                        //     url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/c94e1021e8f80bd434f1b7bbc8c788f8b75ff838',
                        //     renderAs: 'md'
                        // },
                        // {
                        //     title: 'download', // <== please assign extension of your file so we know how to handle it
                        //     url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
                        //     renderAs: 'md'
                        // }
                    ],


                    // Additional menus to put below on side menu.
                    // The menus will be sorted by position of Array.
                    after: [
                        // {
                        //     title: 'authors', // <== please assign extension of your file so we know how to handle it
                        //     url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
                        //     renderAs: 'md'
                        // },
                        // {
                        //     title: 'license', // <== please assign extension of your file so we know how to handle it
                        //     url: 'https://api.github.com/repos/octapush/octapush.docs/git/blobs/e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
                        //     renderAs: 'md'
                        // }
                    ]
                },


                // Additional links for footer.
                //
                // NOTE:
                // Below links always opened in a new tab 
                footerLinks: [
                    {
                        title: 'Author',
                        url: 'http://fadhly.hol.es'
                    },
                    {
                        title: 'License',
                        url: 'https://github.com/octapush/octapush.docs/blob/master/LICENSE'
                    }, ,
                    {
                        title: 'Download',
                        url: 'links3.md'
                    }
                ]
            }
        }
    };

    // DON'T CHANGE BELOW LINES !!!
    w.octapushDoc = { configurations: configurations };
})(window);