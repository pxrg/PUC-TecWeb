drop schema if exists crawler_politicos;
create schema if not exists crawler_politicos;

use crawler_politicos;

create table if not exists partidos(
    id integer not null auto_increment,
    nome varchar(255) not null,
    inclusao datetime default now(),
    modificacao datetime,
    link varchar(255),
    id_referencia varchar(255),
    imagem text,
    Primary key(id)
);

create table if not exists cargos_partidos(
    id integer not null auto_increment,
    nome varchar(255) not null,
    inclusao datetime default now(),
    Primary key(id)
);

create table if not exists politicos(
    id integer not null auto_increment,
    nome varchar(255) not null,
    inclusao datetime default now(),
    modificacao datetime,
    filiado_desde datetime,
    id_partido integer not null,
    id_cargo_partido integer,
    Primary key(id),
    constraint fk_politicos_part Foreign key (id_partido) references partidos(id),
    constraint fk_politicos_carg Foreign key (id_cargo_partido) references cargos_partidos(id)
);

create table if not exists fontes_info(
    id integer not null auto_increment,
    nome varchar(255) not null,
    inclusao datetime default now(),
    ultima_varredura datetime,
    palavras_chave text,
    Primary key(id)
);

create table if not exists classificacoes_info(
    id integer not null auto_increment,
    descricao varchar(255) not null,
    inclusao datetime default now(),
    Primary key(id)
);

create table if not exists informacoes(
    id integer not null auto_increment,
    conteudo text,
    inclusao datetime default now(),
    palavras_chave text,
    id_referencia varchar(255),
    referencia text,
    objeto_original text,
    id_classificacao_info integer,
    id_fonte_info integer not null,
    id_partido integer,
    Primary key(id),
    constraint fk_info_classif Foreign key (id_classificacao_info) references classificacoes_info(id),
    constraint fk_info_font Foreign key (id_fonte_info) references fontes_info(id),
    constraint fk_info_polit Foreign key (id_partido) references partidos(id)
);

create index idx_politico_part on politicos(id_partido);
create index idx_politico_car on politicos(id_cargo_partido);

create index idx_info_fonte on informacoes(id_fonte_info);
create index idx_info_part on informacoes(id_partido);
create index idx_info_classif on informacoes(id_classificacao_info);
