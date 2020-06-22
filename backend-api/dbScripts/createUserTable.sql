create table users
(
    id int auto_increment primary key,
    name varchar(195) not null,
    surname varchar(195) not null,
    password varchar(1000) not null,
    created_at timestamp default current_timestamp not null on update current_timestamp,
    updated_at timestamp default current_timestamp not null on update current_timestamp,
    email varchar(195) not null,
    remember_token varchar(100) null,
);
