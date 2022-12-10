aws dynamodb create-table --table-name totem-chess-dev-games         --attribute-definitions AttributeName=gameId,AttributeType=S --key-schema AttributeName=gameId,KeyType=HASH --billing-mode PAY_PER_REQUEST --endpoint http://localhost:8000
aws dynamodb create-table --table-name totem-chess-dev-public-queue  --attribute-definitions AttributeName=gameId,AttributeType=S --key-schema AttributeName=gameId,KeyType=HASH --billing-mode PAY_PER_REQUEST --endpoint http://localhost:8000
aws dynamodb create-table --table-name totem-chess-dev-private-queue --attribute-definitions AttributeName=gameId,AttributeType=S --key-schema AttributeName=gameId,KeyType=HASH --billing-mode PAY_PER_REQUEST --endpoint http://localhost:8000
