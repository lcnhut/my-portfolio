# My first portfolio
### Check it out
https://lcnhut.github.io/my-portfolio/
### Design
This is an open source design on figma.com that I inspire for this project:
Source: https://www.figma.com/file/LI62tcuuABpF9lXgi6Lao0/Personal-portfolio-Website-landing-page-UX-UI-kit-(Community)?node-id=0%3A1


### Recommendation config
Build SASS to CSS:
- Install VSCode extension: Live Sass Compiler.
- Paste this config into your config.json file
  > "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/assets/css"
        }
    ],
    "liveSassCompile.settings.autoprefix": [
        "> 1%",
        "last 2 versions"
    ],
    "liveSassCompile.settings.generateMap": false,