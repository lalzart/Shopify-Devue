# Shopify Vue Mini Cart

Vue shopping cart component for Shopify

## Setup

Run zip command and create new theme in Shopify from theme.zip.

```
yarn run zip
```

Add a config.yml file with your theme settings.

```
development:
  password: [DEV_PASSWORD]
  theme_id: [DEV_THEME]
  store: [DEV_SHOP]
  ignore_files:
    - settings_data.json
```

Run start command and local changes will be pushed.

```
yarn start
```

## Development

If your Shopify theme is up to date with you local project, run the watch command instead of start.

```
yarn watch
```


## Resources

This repo utilizes the awesome library [vue-custom-element](https://github.com/karol-f/vue-custom-element).
