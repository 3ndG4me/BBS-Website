Black Box Society Site
======================

How to Install:

1. Shove this in the apache directory. Put the website and wiki in the html folder, and the-box in www

2. Make sure you configure Apache correctly for CTFd and Doku Wiki (apache2.conf not included for security reasons)
    -make sure ownership for www is configured correctly VERY important
    -most other setup can be followed from originally CTFd and Doku Wiki docs

3. Setup CTFd at blackboxsociety.org/the-box (or whatever route you configured in apache)

4. Setup Doku Wiki at blackboxsociety.org/wiki/install.php
    -place Doku Wiki files in the directory called wiki
    -after you run install.php, delete it
    -follow doku wiki readme in the wiki directory

5. Setup SSL in Apache (optional but recommended)
