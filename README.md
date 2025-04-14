# GPlay Info (Nest.js implementation)

## Description

This project allows users to retrieve application information by appId from Google Play Store.

## Project Setup

```bash
$ npm install
```

## Prerequisites

### Environment Variables
Define `APP_KEY`, `DATABASE_URL` and `PORT` (optional) environment variables (e.g. in a `.env` file).

### SSL Certificates
Define or provide your certificate files (`key.pem` and `cert.pem`) in the `ssl` folder in the project root folder.

### Apply database migration
Development:
```bash
$ npm run prisma:migrate-dev
```
Production:
```bash
$ npm run prisma:migrate
```

## Compile and Run the Project
Development:
```bash
$ npm run start
```
Watch mode:
```bash
$ npm run start:dev
```
Production mode:
```bash
$ npm run start:prod
```

## Usage

### Sign Up
```http request
POST https://localhost:3000/auth/sign-up
Content-Type: application/json

{
  "username": "John Doe",
  "password": "changeme",
  "email": "john.doe@example.com"
}
```
Expected response
```
# Response Code: 200 OK
```
```json
{ "access_token": "1234567890abcdef" }
```
Get `access_token` from sign-up response or retrieve new one using sign-in request.

### Sign In
```http request
POST https://localhost:3000/auth/sign-in
Content-Type: application/json

{
  "username": "John Doe",
  "password": "changeme"
}
```
Expected response
```
# Response Code: 200 OK
```
```json
{ "access_token": "1234567890abcdef" }
```
### Get application info
Use previously retrieved `access_token` in `Authorization` header. `lang` and `country` query parameters are optional.
```http request
GET https://localhost:3000/info/{appId}?lang={lang}&country={country}
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
Expected response for appId=net.dinglisch.android.taskerm, lang=en, country=us
```json
{
  "title": "Tasker",
  "description": "⚙No repetitive tasks for you, let your Android device handle it!⚙ Total Automation, From Settings to SMS.\n\nHere are only some of the things you could do with Tasker. Its real power is the flexibility to combine contexts and tasks however you wish: https://tasker.joaoapps.com/exampleuses.html\n\n☑ Automations\nMake your phone a true smart phone! Why remember to change the volume every day when you leave home when your phone can do it for you?\nAutomate stuff based on the app you're in, the time of day, your location, your Wi-Fi network, Received SMS or Calls, the currently playing song and many other (130+) states and events!\nCheck out how easy it is to create an automation: https://www.youtube.com/watch?v=s6EAbLW5WSk\n\n☑ Actions\n350+ actions allow you to truly customize your phone like never before! Send SMS, create notifications, change almost any system setting like Wifi Tether, Dark Mode, Always On Display, change any volume, control Do Not Disturb, open apps, file manipulation, control music playback, get your location... you get the idea. If you can think of it, Tasker can probably do it for you!\nNote: root is NOT (I repeat NOT) required for majority of the functions. However, a few of the actions (like the Kill App and Mobile Data action on some devices) require root. This is because of Android security policies that developers cannot work around.\n\n☑ Automatic File Backups\nIf you set it up to do so, Tasker can automatically backup your files to a specific folder on the device, SD card, USB key or even Google Drive! This is useful if you want to keep your files safe even if you lose your phone. \n\n☑ Download and Install APKs directly\nBy your request (if you set up a task to do so), Tasker can automatically check a website for updated APKs, receive those APKs from said websites and initiate installation of any files!\n\n☑ Other Triggers\nManually trigger your actions via launcher shortcuts, quick setting tiles, widgets, long-pressing volume buttons, media buttons (like the ones on your BT headsets or headphones), Bixby button, Navigation Bar, Notifications and more!\n\n☑ Join - Remote Tasker\nAdding Join (https://play.google.com/store/apps/details?id=com.joaomgcd.join) to the mix will even allow you to trigger tasks from another Android device or PC!\n\n☑ Scenes\nDesign your own UI and use it to display any info you want or trigger any task!\n\n☑ App Creation\nCreate your own standalone apps to share or sell with the Tasker App Factory : https://play.google.com/store/apps/details?id=net.dinglisch.android.appfactory\n\n☑ Developer Friendly\nMany 3rd party developers already allow you to perform actions in their apps and listen to their events/states through Tasker!\nCheck out some of them: https://tasker.joaoapps.com/pluginlist.html\nYou can also call most of the Web APIs from Tasker with the powerful HTTP Auth and HTTP Request actions! Check out an example Video of HTTP Auth and Request: https://youtu.be/yAt2D1XmgUI.\n\n☑ 7 day trial - one time payment to unlock\nGet it here: https://tasker.joaoapps.com/download.html\n\n\n☑ Useful Links\nPrivacy Policy: https://tasker.joaoapps.com/privacy.html\nStarter Guides: https://tasker.joaoapps.com/guides.html\nPre-made projects: https://forum.joaoapps.com/index.php?resources/\nOfficial Support Forum: https://groups.google.com/forum/#!forum/tasker\nTasker Community: https://www.reddit.com/r/tasker/\n\nIt's not possible to fix problems reported via Play Store Comments so please use the \"Report Issue To Developer\" option in the app > Menu to do so.\n\nNote 1: Tasker uses the BIND_DEVICE_ADMIN permission in order to provide the System Lock functionality\n\nNote 2: Tasker uses an accessibility service for some of its features like closing the notification tray, checking which app is currently opened and more.",
  "descriptionHTML": "<b>⚙No repetitive tasks for you, let your Android device handle it!⚙</b> Total Automation, From Settings to SMS.<br><br>Here are only <b>some</b> of the things you could do with Tasker. Its real power is the flexibility to combine contexts and tasks however you wish: https://tasker.joaoapps.com/exampleuses.html<br><br>☑ <b>Automations</b><br>Make your phone a true <b>smart</b> phone! Why remember to change the volume every day when you leave home when your phone can do it for you?<br>Automate stuff based on the <b>app you&#39;re in</b>, the <b>time of day</b>, your <b>location</b>, your <b>Wi-Fi network</b>, <b>Received SMS or Calls</b>, the currently playing <b>song</b> and many other (130+) states and events!<br>Check out how easy it is to create an automation: https://www.youtube.com/watch?v=s6EAbLW5WSk<br><br>☑ <b>Actions</b><br>350+ actions allow you to truly customize your phone like never before! Send SMS, create notifications, change almost any system setting like Wifi Tether, Dark Mode, Always On Display, change any volume, control Do Not Disturb, open apps, file manipulation, control music playback, get your location... you get the idea. If you can think of it, Tasker can probably do it for you!<br><b>Note: root is NOT (I repeat NOT) required for majority of the functions.</b> However, a few of the actions (like the Kill App and Mobile Data action on some devices) require root. This is because of Android security policies that developers cannot work around.<br><br>☑ <b>Automatic File Backups</b><br>If you set it up to do so, Tasker can automatically backup your files to a specific folder on the device, SD card, USB key or even Google Drive! This is useful if you want to keep your files safe even if you lose your phone. <br><br>☑ <b>Download and Install APKs directly</b><br>By your request (if you set up a task to do so), Tasker can automatically check a website for updated APKs, receive those APKs from said websites and initiate installation of any files!<br><br>☑ <b>Other Triggers</b><br>Manually trigger your actions via launcher shortcuts, quick setting tiles, widgets, long-pressing volume buttons, media buttons (like the ones on your BT headsets or headphones), Bixby button, Navigation Bar, Notifications and more!<br><br>☑ <b>Join - Remote Tasker</b><br>Adding Join (https://play.google.com/store/apps/details?id=com.joaomgcd.join) to the mix will even allow you to trigger tasks from another Android device or PC!<br><br>☑ <b>Scenes</b><br>Design your own UI and use it to display any info you want or trigger any task!<br><br>☑ <b>App Creation</b><br>Create your own standalone apps to share or sell with the Tasker App Factory : https://play.google.com/store/apps/details?id=net.dinglisch.android.appfactory<br><br>☑ <b>Developer Friendly</b><br>Many 3rd party developers already allow you to perform actions in their apps and listen to their events/states through Tasker!<br>Check out some of them: https://tasker.joaoapps.com/pluginlist.html<br>You can also call most of the Web APIs from Tasker with the powerful HTTP Auth and HTTP Request actions! Check out an example Video of HTTP Auth and Request: https://youtu.be/yAt2D1XmgUI.<br><br>☑ <b>7 day trial - one time payment to unlock</b><br>Get it here: https://tasker.joaoapps.com/download.html<br><br><br>☑ <b>Useful Links</b><br>Privacy Policy: https://tasker.joaoapps.com/privacy.html<br>Starter Guides: https://tasker.joaoapps.com/guides.html<br>Pre-made projects: https://forum.joaoapps.com/index.php?resources/<br>Official Support Forum: https://groups.google.com/forum/#!forum/tasker<br>Tasker Community: https://www.reddit.com/r/tasker/<br><br>It&#39;s not possible to fix problems reported via Play Store Comments so please use the &quot;Report Issue To Developer&quot; option in the app &gt; Menu to do so.<br><br><b>Note 1</b>: Tasker uses the BIND_DEVICE_ADMIN permission in order to provide the System Lock functionality<br><br><b>Note 2</b>: Tasker uses an accessibility service for some of its features like closing the notification tray, checking which app is currently opened and more.",
  "summary": "Automate everything from settings to photos, SMS to speech. ADC2 prize winner.",
  "installs": "1,000,000+",
  "minInstalls": 1000000,
  "maxInstalls": 2365013,
  "score": 4.3829455,
  "scoreText": "4.4",
  "ratings": 54896,
  "reviews": 6752,
  "histogram": {
    "1": 5105,
    "2": 1361,
    "3": 2636,
    "4": 4084,
    "5": 41702
  },
  "price": 3.49,
  "free": false,
  "currency": "USD",
  "priceText": "$3.49",
  "available": true,
  "offersIAP": false,
  "androidVersion": "5.0",
  "androidVersionText": "5.0",
  "androidMaxVersion": "VARY",
  "developer": "joaomgcd",
  "developerId": "8102570190170276456",
  "developerEmail": "support@joaoapps.com",
  "developerWebsite": "https://tasker.joaoapps.com/dl",
  "developerAddress": "Rua Elias Garcia n17 4A\n2700-310 Amadora\nPortugal",
  "developerLegalName": "KITXOO",
  "developerLegalEmail": "support@joaoapps.com",
  "developerLegalAddress": "Rua Elias Garcia, n17 4A, 2700-310 Amadora, Portugal",
  "developerLegalPhoneNumber": "+351 969 390 591",
  "privacyPolicy": "https://tasker.joaoapps.com/privacy.html",
  "developerInternalID": "8102570190170276456",
  "genre": "Tools",
  "genreId": "TOOLS",
  "categories": [
    {
      "name": "Motor assistance",
      "id": null
    }
  ],
  "icon": "https://play-lh.googleusercontent.com/8IkkhPNnxNVYhnUxcidu0-Yp72aSb3H0gQJ1U-_ImQ7SCGLz1zgXtV7wi2Hpd6Odghg",
  "headerImage": "https://play-lh.googleusercontent.com/gEY0LpfO-rjhmuXcPhaoSR5kaleS7AseU-4-txNavVxE8Q5KxVozNAKcmxkQVukkWXQ",
  "screenshots": [
    "https://play-lh.googleusercontent.com/8nNwri_wRvZKzzAqNITddWhiW_9ArzoFGdYYl5yOV5c90CkkaSUb9_FRmMEFEet6WO8",
    "https://play-lh.googleusercontent.com/iXJf9SdhZS7bN_4g80yyMpxMk4QP-jRfTcRzoypkIvS9DZXQCAHLmxOJieHeKKmwsZWl",
    "https://play-lh.googleusercontent.com/TdvGBYb8zW9L9Zf-9CBqvddDYUXP1Ow6-GYRc3hkhK2GAft9WTZBoeCvwptsTjZdUGI",
    "https://play-lh.googleusercontent.com/IiGZ_cy8a68oMZsFCmxxXrSsOSZQJEydDii9ziHEJq-SsNeeCWT59U7cL4MQ8IhtCZY",
    "https://play-lh.googleusercontent.com/-YY7zGqTRRAAShz33ufnpH09qt2vXxZBIXZhrKj3kCnrBfgRCnKQ88FxEG5IBNBSNQ",
    "https://play-lh.googleusercontent.com/gSDcAhFwhSweGvaOVaS4xMQKNOzebHkee4Z_5NeIDUa6sOOzUo1BVllJ7ZudJrDQqhA",
    "https://play-lh.googleusercontent.com/k-sMfUTORzJAVebR08qt2NQJrntauZWcfgZLd3bdmb3WZgm-mlGSQCxT0AkTJ3ab_ME",
    "https://play-lh.googleusercontent.com/Wj7bgrYzaSAJnzC9oLtlet-LZSTFLO09twDk_hVx_1Xl1HDiFb8h1zuvPKrYLj3QiKYV"
  ],
  "contentRating": "Everyone",
  "adSupported": false,
  "released": "Jul 3, 2010",
  "updated": "2025-03-05T09:46:00.000Z",
  "version": "6.4.15",
  "recentChanges": "Release Video: https://bit.ly/tasker6_4_video<br>Comment/More: https://bit.ly/tasker6_4_comment<br>- Widget v2: revolutionize your home screen<br>- Remote Action Execution: automate your life remotely<br>- More Talkback Support<br>- Instant External Drive Renames<br>- Material You Design Tokens",
  "comments": [],
  "preregister": false,
  "earlyAccessEnabled": false,
  "isAvailableInPlayPass": true,
  "appId": "net.dinglisch.android.taskerm",
  "url": "https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en&gl=us"
}
```
## License

The project is [MIT licensed](LICENSE).

## Credits
This project utilizes the following libraries:

- [Nest.js](https://nestjs.com/): A progressive Node.js framework for building efficient, scalable, and enterprise-grade applications.
- [google-play-scraper](https://www.npmjs.com/package/google-play-scraper): A Node.js module for scraping application data from the Google Play Store.
- [Prisma](https://www.prisma.io/): A next-generation ORM for efficient and secure database management, ensuring strong type safety and developer productivity.
- [bcrypt](https://www.npmjs.com/package/bcrypt): A library for secure password hashing and salting in JavaScript, widely used for enhancing application security.
