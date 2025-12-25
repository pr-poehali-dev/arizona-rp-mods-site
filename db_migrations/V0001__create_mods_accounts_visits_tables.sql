-- Создание таблицы модов
CREATE TABLE mods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    version VARCHAR(50) NOT NULL,
    file_url TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    downloads INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы аккаунтов
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Создание таблицы посещений
CREATE TABLE site_visits (
    id SERIAL PRIMARY KEY,
    visitor_ip VARCHAR(45),
    user_agent TEXT,
    page_url TEXT,
    visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    account_id INTEGER REFERENCES accounts(id)
);

-- Создание индексов для оптимизации
CREATE INDEX idx_mods_status ON mods(status);
CREATE INDEX idx_mods_category ON mods(category);
CREATE INDEX idx_mods_created_at ON mods(created_at);
CREATE INDEX idx_accounts_username ON accounts(username);
CREATE INDEX idx_visits_date ON site_visits(visited_at);
CREATE INDEX idx_visits_account ON site_visits(account_id);