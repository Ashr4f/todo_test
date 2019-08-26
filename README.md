### todo_test

### CLONE THE REPO
```bash 
git clone git@github.com:Flovermeer/todo_test.git
```

### CD INTO IT
```bash 
cd todo_test
```

### INSTALL COMPOSER
```bash 
composer update
```

### UPGRADE NPM GLOBALLY
```bash 
sudo npm install -g npm
```

### INSTALL NPM DEPENDENCIES IN THE REPO
```bash 
npm install
```

### CREATE THE .env FILE (REMEMBER TO FILL IT WITH YOUR REAL DB INFOS)
```bash 
cp -r .env.example .env
```

### CREATE THE database (optional)
```bash 
mysql -u root;
create database laravel;
exit;
```

### GENERATE APP KEY
```bash 
php artisan key:generate
```

### GENERATE JWT SECRET TOKEN
```bash 
php artisan jwt:secret
```

### MIGRATING TABLES AND DB STRUCTURE TO YOUR DB
```bash 
php artisan migrate:fresh
```

### COMPILE NPM DEPENDENCIES
```bash 
npm run watch
```

### RUN THE PHP-LARAVEL SERVER
```bash 
php artisan serve
```

Enjoy :wink:
