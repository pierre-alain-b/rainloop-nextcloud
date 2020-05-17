# rainloop-nextcloud

rainloop-nextcloud is a plugin for Nextcloud to use the excellent Rainloop webmail (http://www.rainloop.net/).

## Which branch for which version of Nextcloud?

- The master branch corresponds to the latest stable version of the plugin that is suitable for Nextcloud 19 and upwards.
- The 'up-to-nc18' corresponds to the working version of the plugin for Nextcloud 14 to 18.
- The 'nc14' branch corresponds to a beta version of the plugin for Nextcloud 14. All the changes of 'nc14' branch were merged into master when it was deemed suitable for production.
- The 'nc13' branch corresponds to the working version of the plugin for Nextcloud 10 to Nextcloud 13.


Thank you to all contributors to Rainloop for nextcloud:
- Rainloop Team, who initiated it
- Tab Fitts (@tabp0le)
- Nextgen Networks (@nextgen-networks)

## How to Install

Start within Nextcloud, and click on the "+ Apps" button in the upper-left corner dropdown menu:

![Image1](https://github.com/pierre-alain-b/rainloop-nextcloud/blob/master/screenshots/help_a1.png)

Then, enable the Rainloop plugin that you will find in the "Social & communication" section:

![Image2](https://github.com/pierre-alain-b/rainloop-nextcloud/blob/master/screenshots/help_a2.png)

After a quick wait, Rainloop is installed. Now you should configure it before use: open the Nextcloud admin panel (upper-right corner dropdown menu) and go to "Additionnal settings". There, click on the "Go to RainLoop Webmail admin panel" link.

![Image3](https://github.com/pierre-alain-b/rainloop-nextcloud/blob/master/screenshots/help_a3.png)

To enter Rainloop admin area, the default login is "admin" and the default password is "12345". Don't forget to change it once in the admin panel!

From that point, all instance-wide Rainloop settings can be tweaked as you wish. One important point is the "Domains" section where you should set up the IMAP/SMTP parameters that will be associated with the email adresses of your users. Basically, if a user of the Nextcloud instance starts Rainloop and puts "firstname@domain.tld" as an email address, then Rainloop should know how to connect to the IMAP & SMTP of domain.tld. You can fill in this information in the "Domains" section of the Rainloop admin settings.

![Image4](https://github.com/pierre-alain-b/rainloop-nextcloud/blob/master/screenshots/help_a4.png)

## Rainloop Settings, Where Are They?

Rainloop for Nextcloud is highly configurable. But settings are available in multiple places and this can be misleading for first-time users.

### Rainloop admin settings
Rainloop admin settings can be reached only by the Nextcloud administrator. Open the Nextcloud admin panel ("Admin" in the upper-right corner dropdown menu) and go to "Additionnal settings". There, click on the "Go to RainLoop Webmail admin panel" link. Alternatively, you may use the following link: https://path.to.nextcloud/index.php/apps/rainloop/app/?admin.

Rainloop admin settings include all settings that will apply to all Rainloop users (default login rules, branding, management of plugins, security rules and domains).

### Rainloop user settings
Each user of Rainloop can also change user-specific behaviors in the Rainloop user settings. Rainloop user settings are found within Rainloop by clicking on the user button (in the upper-right corner of Rainloop) and then choosing "Settings" in the dropdown menu.

Rainloop user settings include management of contacts, of email accounts, of folders, appearance and OpenPGP.

### The specificity of Rainloop user accounts
The plugin passes the login information of the user to the Rainloop app which then creates and manages the user accounts. Accounts in Rainloop are based soley on the authenticated email accounts, and do not take into account the nextcloud user which created them in the first place. If two or more Nextcloud users have the same email account in additional settings, they will in fact share the same 'email account' in Rainloop including any additional email accounts that they may have added subsequently to their main account.
This is to be kept in mind for the use case where multiple users shall have the same email account but may be also tempted to add additionnal acounts to their Rainloop.

## How to auto-connect to Rainloop?

### Auto-connection for all Nextcloud users
If your Nextcloud users base is synchronized with an email system, then it is possible that Nextcloud credentials could be used right away to access the centralized email system. In the Rainloop admin settings, the Nextcloud administrator can then tick the "Automatically login with Nextcloud/Nextcloud user credentials" checkbox.

Beware, if you tick this box, all Nextcloud users will *not* be able to use the override it with the setting below.

### Auto-connection for one user at a time
Except if the above setting is activated, any Nextcloud user can have Nextcloud and Rainloop keep in mind the default email/password to connect to Rainloop. There, logging in Nextcloud is sufficient to then access Rainloop within Nextcloud.

To fill in the default email address and password to use, each Nextcloud user should go in the personal settings: choose "Personal" in the upper-right corner dropdown menu. Then select the "Rainlopp webmail" section. You can also use this direct link: https://path.to.nextcloud/index.php/settings/personal#rainloop-webmail.


## How to Activate Rainloop Logging and then Find Logs

You can activate Rainloop logging here: `/path/to/nextcloud/data/rainloop-storage/_data_/_default_/configs/application.ini`
```
[logs]
enable = On
```
And then logs are then available in `/path/to/nextcloud/data/rainloop-storage/_data_/_default_/logs/`
