
# Basic usage 

follow steps:
https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda

## commands

```

aws cloudformation package \
  --template-file template.yaml \
  --output-template-file serverless-output.yaml \
  --s3-bucket sam-dz-sp-dev-lambda-websitebucket-1k4gv54br2gn1



aws cloudformation deploy \
  --template-file serverless-output.yaml \
  --stack-name apollo-server-lambda-demo \
  --capabilities CAPABILITY_IAM

```

goto: https://z0xcij9m6e.execute-api.ap-southeast-2.amazonaws.com/Prod/graphql

make query:
```
{
  posts{
    id
  }
}
```


## Run lambda in `sam cli`

Debug lambda on cloud is a pain in the ass. We will use sam cli to run and debug locally.

### install sam cli

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

### run command
```
sam local start-api --host localhost --port 4000
```
If no errors, you can test graphql endpoint at http://localhost:4000/graphql.






