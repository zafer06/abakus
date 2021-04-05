#!/bin/bash

npm run build
cd dist && tar cvfz ../dist.tar.gz . && cd ..
ssh-keyscan  -H $DEPLOY_IP >> ~/.ssh/known_hosts
scp dist.tar.gz $DEPLOY_USER@$DEPLOY_IP:@DEPLOY_PATH
ssh $DEPLOY_USER@$DEPLOY_IP "cd $DEPLOY_PATH && tar xvzf dist.tar.gz --overwrite"
ssh $DEPLOY_USER@$DEPLOY_IP "cd $DEPLOY_PATH && rm -rf dist.tar.gz"