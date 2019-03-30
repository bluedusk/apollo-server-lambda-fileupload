
# Apollo Server File upload with Lambda

Currently `apollo-server-lambda` does not support file upload with multipart request.    
This repo is a demo for file upload using [charleswong28's PR](https://github.com/apollographql/apollo-server/pull/1739) for `apollo-server-lambda`.

# Usage 

- install & build

```
// install packages
npm i
// compile apollo-server-lambda, to use tsc you might need to install typescript globally
npm run build

```

- run with sam cli

Debug lambda on cloud is a pain in the ass. You can use sam cli to run and debug locally.

To install sam cli (make sure you have docker installed):
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

After install run:

```
npm start

```

Now you can use POSTMAN to test graphql api at `http://localhost:4000/graphql`

## POSTMAN TEST

- install postman
https://www.getpostman.com/

- import `postman.json`

- Two tests you an run
  - query files
  - file upload

for `file upload`, before request, go to `Body` select a file for `Key = 1`.




# Test on AWS

If you want to test on lambda. Make sure you have your aws cli & sam cli configured before run any command. 

- package 

```

aws cloudformation package \
  --template-file template.yaml \
  --output-template-file serverless-output.yaml \
  --s3-bucket <YOUR_BUCKET>

```

- deploy

```

aws cloudformation deploy \
  --template-file serverless-output.yaml \
  --stack-name apollo-server-lambda-demo \
  --capabilities CAPABILITY_IAM

```

- test

change your postman endpoint to apigateway you just create and run test.







