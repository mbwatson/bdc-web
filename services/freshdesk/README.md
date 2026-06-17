# Freshdesk Proxy

This is the source of truth for the AWS Lambda function that proxies requests between the site and the Freshdesk API. The Lambda handles CORS, reCAPTCHA verification, and authenticated forwarding to Freshdesk.

The site references this proxy via the `FRESHDESK_PROXY_URL` environment variable (with a fallback to the production Lambda URL), so **most site development does not require running this service locally**.

## Local Development

The local server is only needed when working on the Lambda function itself. It wraps `handler.py` in a standard HTTP server so changes can be tested without redeploying to AWS.

### Setup

```bash
pip install -r requirements.txt
```

Copy `.env` and fill in your credentials:

```
FRESHDESK_API_KEY=
FRESHDESK_DOMAIN=
RECAPTCHA_SECRET_KEY=
```

### Run

```bash
python server.py
```

The server starts on `http://localhost:8787`.

To route the site through the local proxy, set `FRESHDESK_PROXY_URL=http://localhost:8787` in `apps/site/.env`.

## Deployment

Deployment is ZIP-based and uses `handler.py` as the Lambda entrypoint.

### Build ZIP locally

```bash
python3 package_lambda.py
```

This writes `services/freshdesk/dist/freshdesk-proxy.zip`.

### Deploy ZIP locally with AWS CLI

```bash
python3 deploy_lambda.py \
  --function-name <your-lambda-function-name> \
  --region us-east-1 \
  --publish
```

The deploy script rebuilds the ZIP by default, uploads it with `aws lambda update-function-code`, and waits for the update to finish.

### GitHub Actions deployment

`.github/workflows/deploy-freshdesk-lambda.yaml` automatically deploys on pushes to `main` when files in `services/freshdesk/` change, and also supports manual runs via `workflow_dispatch`.

Set these repository values before using the workflow:

- Variable: `FRESHDESK_LAMBDA_FUNCTION_NAME`
- Variable (optional): `FRESHDESK_AWS_REGION` (defaults to `us-east-1`)
- Secret: `FRESHDESK_AWS_DEPLOY_ROLE_ARN` (OIDC-assumable role for Lambda deployment)
