# REACT Initial App For Dev. @ITD PLC.

### FOR DEV

ADD SCRIPT

```javascript
<script>window.devport = 3000;</script>
<script>
  $(document).ready(()=>{
    loadScript("http://localhost:3000/static/js/bundle.js");
  });
</script>
```

ADD #root to html

```html
<div id="root"></div>
```

### FOR PRODUCTION

- Run script

```
yarn build
```

- Rename @xxxx.js to @xxx.js
- Add \*.js to your projects folder
- change script

```javascript
// <script>window.devport = 3000;</script>
// <script>
//   $(document).ready(()=>{
//     loadScript("http://localhost:3000/static/js/bundle.js");
//   });
// </script>
<script src="@scriptFile.js" />
```
