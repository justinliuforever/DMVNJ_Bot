# DMVNJ_Bot



[! [Watch the video]](https://www.youtube.com/watch?v=aNPV4Jd5iQc&ab_channel=qinyuanjustin)

**Part 1: Monitoring the website**

> mon_initi.py monitors the initial permit website
> mon_know.py monitors the knowledge test website

Currently this program does not have a hide IP. If you need the hide IP version I can send it again. The program currently detects the target site once in 0.75 seconds (you can modify the interval directly), and crawls all available appointment information from the site and writes the content to init_availble.txt and know_availble.txt respectively after rearranging.





**Part 2: Refine the information and push the link**

> mon_refine_init.js refine the location of the initial
> mon_refine_know.js Refine the location of the initial

At the beginning of the program, enter the time and location of the desired location. For example [0, "09/21/2022", "makebtn18615"] needs the location of BakersBasin on September 21.
The current program checks init_availble.txt and know_availble.txt separately for 50 milliseconds. If it detects a desired location, it will write the url of the location to init_target.txt and know_target.txt. 





**Part 3: Fill the form**

> mon_fillBot_init.js fills in the initial form
> mon_fillBot_know.js fills in the knowledge form

The program uses puppeteer. You need to install the files related to https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth before running it.
The program will check the init_target.txt or know_target.txt every 5 milliseconds, and if there is a URL, it will go directly to the link and start filling the form and sending it.
