
## Setup Authentication

Create a `.env.local` file based on `.env.local.example` and add your Sisense instance url and an authentication method. Inside `main.tsx`, the specified instance url and authentication are passed to the `SisenseContextProvider` component.

It is recommended to use SSO, Web Access Token, or API token for authentication when using a production Sisense instance.

```bash
# Specify the sisense instance URL.
VITE_APP_SISENSE_URL=https://xxxxxxxxxxxxxxxx

# use one of the following authentication method
# and remove the others or leave others blank

## Web Access Token
VITE_APP_SISENSE_WAT=xxxxxxxxxxxxxxxxxx

## API Token
VITE_APP_SISENSE_API_TOKEN=

## SSO Enabled
VITE_APP_SISENSE_SSO_ENABLED=
```

