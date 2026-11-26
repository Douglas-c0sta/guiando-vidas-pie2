CREATE TABLE turma (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    horario VARCHAR(50) NOT NULL,
    faixa_etaria VARCHAR(50) NOT NULL
);

CREATE TABLE aluno (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    data_nascimento DATE NOT NULL,
    endereco VARCHAR(255),
    responsavel VARCHAR(150) NOT NULL,
    telefone_responsavel VARCHAR(20),
    observacoes TEXT,
    id_turma INT NOT NULL,
    FOREIGN KEY (id_turma) REFERENCES turma(id_turma)
);

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    perfil VARCHAR(50) NOT NULL
);

CREATE TABLE frequencia (
    id_frequencia INT AUTO_INCREMENT PRIMARY KEY,
    data_aula DATE NOT NULL,
    presenca BOOLEAN NOT NULL,
    id_aluno INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);