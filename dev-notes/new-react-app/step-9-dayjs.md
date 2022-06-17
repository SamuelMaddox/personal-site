# Step 9 - Day.js <!-- omit in toc -->

## Step 9-1 - Install Day.js <!-- omit in toc -->

- [Why Not Moment.js?](#why-not-momentjs)
- [Install Day.js](#install-dayjs)
- [Day.js Plugins](#dayjs-plugins)
- [Day.js and MUI Date/Time Pickers](#dayjs-and-mui-datetime-pickers)

### Why Not Moment.js?

Most existing JavaScript applications use `Moment.js` for manipulating and displaying Date/Time objects in JavaScript. However, in 2020 `Moment.js` declared itself a [legacy project in maintenance mode](https://momentjs.com/docs/#/-project-status/) and discourages developers from using the library in new projects going forward. Instead, `Moment.js` has provided a list of [recommended libraries](https://momentjs.com/docs/#/-project-status/recommendations/) instead. We chose to use Day.js and have provided installing instructions below. For more information see the [Day.js Documentation](https://day.js.org/docs/en/parse/now)

### Install Day.js

To install Day.js run the following command:

```shell
yarn add dayjs
```

### Day.js Plugins

> NOTE: As long as `dayjs` is installed, then all plugins are installed too. No further installs are required.

By default, Day.js comes with core code only and no installed plugins. Plugins can be added as needed. To add a plugin, `dayjs` will need to be extended:

```js
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);
```

For a list of plugins visit the [Day.js Plugin Documentation](https://day.js.org/docs/en/plugin/plugin)

TODO: include parts of this readme in sample readme

### Day.js and MUI Date/Time Pickers

[Material UI's Date/Time Pickers](https://mui.com/x/react-date-pickers/getting-started/#setup) are compatible with Day.js objects
