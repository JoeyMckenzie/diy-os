default: dev

dev:
    php artisan serve & pnpm run dev

install:
    rm -rf node_modules/ package-lock.json vendor/ composer.lock; \
    npm install; \
    composer install;

ssr:
    find resources/ *.ts *.js | entr -s 'rm -rf bootstrap/ssr/ && npm run build && php artisan inertia:start-ssr'

lint:
    just lint-php & just lint-js

lint-php:
    find app/ resources/ routes/ database/ tests/ phpstan.neon | entr -s 'composer run lint'

lint-js:
    find resources/ *.ts *.js biome.json | entr -s 'npm run lint'

test:
    find app/ resources/ routes/ database/ tests/ phpstan.neon | entr -s 'composer run test'

remigrate:
    php artisan migrate:fresh --seed

ci:
    composer run check && npm run ci

prepare:
    git config core.hookspath .githooks
