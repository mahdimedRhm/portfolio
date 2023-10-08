# portfolio

you need mysql and node js > 16 

# node js:
```
sudo apt install curl

curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/nodesource-archive-keyring.gpg] https://deb.nodesource.com/node_16.x $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt update
sudo apt install nodejs
```

Clone the project 
```
git clone https://github.com/mahdimedRhm/portfolio.git 
```

# MySQL:
dont forget to change db.js file

```
sudo apt install mysql-server
mysql -u root -p
source <path-to-portfolio>/database.sql
```
# Run the portfolio
```
cd <path-to-portfolio>
npm install
node app.js
```

open the portfolio on localhost:3000
