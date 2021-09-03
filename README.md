## CHRO_UI SCSS UI-Designlibrary

## 🎉Information

This Package is a SCSS UI-Designlibrary. It is meant to be used in a VueJs Application.
We're looking further to bring more Designtemplates and a stable Version 1.0.0 in the future :).

## 🎨Installation

Use the package manager [npm](https://nodejs.org/en/) to install.
We strongly recommend NodeJs Version 14.17.5 LTS. You also need node-sass & sass-loader dependency's.

```bash
npm install chro_ui
```


## Examples (VueJs)

```python
<style lang="scss">
import "chro_ui/lib/buttons/button.scss";
import "chro_ui/lib/alerts/alerts.scss";
import "chro_ui/lib/inputfields/inputfield.scss";
</style>

<template>
<div>
    # Style a Button
    <button class="primaryButton">Primary Button</button>

    # Style an Inputfield
    <input class="input" disabled="disabled" id="test" placeholder="A Disabled Inputfield">

    #Style an Alert
    <div class="alert error">Error</div>
</div>    
</template>
```

## 📖Preview
Some Preview Images
![Buttons](https://github.com/DevChrisRoth/chro_ui/blob/3d6900ed9ceeb9775d24b9e92567a54fdb6e1258/Buttons.png?raw=true)
![Alerts](https://github.com/DevChrisRoth/chro_ui/blob/3d6900ed9ceeb9775d24b9e92567a54fdb6e1258/Alerts.png?raw=true)
![NotificationCard](https://github.com/DevChrisRoth/chro_ui/blob/3d6900ed9ceeb9775d24b9e92567a54fdb6e1258/NotificationCard.png?raw=true)
![Table](https://github.com/DevChrisRoth/chro_ui/blob/3d6900ed9ceeb9775d24b9e92567a54fdb6e1258/Table.png?raw=true)

## 📢Releasenotes

| Version     | Notes                                 |
| ----------- |:-------------------------------------:|
| 1.0.3       | Changed Readme File                   | 
| 1.0.2       | Add Preview Image                     | 
| 1.0.1       | Add Preview Image                     | 
| 1.0.0       | Released stable Version               | 
| 0.1.0       | SCSS Files combined into one file     |
| 0.0.9       | Added more colors to the color palette|
| 0.0.5       | First full release of UI-Kit          | 

## Contributing
If you have any suggestions for improvement, don't hesitate to write to us by [E-mail](mailto:chrisrothbog@gmail.com). 


## License
[MIT](https://choosealicense.com/licenses/mit/)
