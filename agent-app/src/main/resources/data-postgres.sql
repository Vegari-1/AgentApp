insert into authority (name) values ('ROLE_USER');
insert into authority (name) values ('ROLE_ADMIN');

insert into company (industry_sector, company_name, company_email, company_website, company_info)
values ('IT', 'NN', 'n@n.com', 'www.n-n.com', 'Not knowN');

-- password = perapera
insert into users (username, password, name, surname, enabled, last_password_reset_date, company_id)
values ('pera', '$2a$12$qfKA4lNc8j31w4U7auFpEOlqvlWs8/Wa51773ZzB1XrjgmVXLaahi', 'Pera', 'Peric', true, null, 1);

insert into user_authority (user_id, authority_id) values (1, 1);
