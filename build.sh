# Front-end
cd postcode-web

npm run-script build --silent

docker build -t postcode-web .

# Back-end
cd ../postcode-api

docker build -t postcode-api .

# Database

cd ../postcode-db

docker build -t postcode-db .