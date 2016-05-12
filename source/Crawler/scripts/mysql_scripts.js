var sql = {};
sql.create_tables = [
    ''
];
sql.init_partidos = [
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PSDB');",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PSDB Jovem')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('Juventude PSDB-SP')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PSDB-SP')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PSDB-MG')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('Partido Verde')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('Partido Verde-SC')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PT')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PT-CE')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PT-SP')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('Juvetude Democratas')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PTB')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PPS')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PR-SP')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PC do B')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PC do B-Curitiba')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PRB')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PRB-SP')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PRB-MG')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PMDB')",
    "INSERT INTO crawler_politicos.partidos ( nome ) VALUES('PMDB-SP')",

];
sql.init_fontes_info = [
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PSDB'), 'http://twitter.com/Rede45/';",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PSDB Jovem', 'http://twitter.com/psdbjovem/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('Juventude PSDB-SP', 'http://twitter.com/jpsdbsaopaulo/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PSDB-SP', 'http://twitter.com/psdbsp/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PSDB-MG', 'http://twitter.com/psdbmg/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('Partido Verde', 'http://twitter.com/partidoverde/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('Partido Verde-SC', 'http://twitter.com/partidoverdesc/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PT', 'http://twitter.com/PTBrasil/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PT-CE', 'http://twitter.com/ptceara/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PT-SP', 'http://twitter.com/ptpaulista/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('Juvetude Democratas', 'http://twitter.com/juventudedem/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PTB', 'http://twitter.com/ptb14/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PPS', 'http://twitter.com/pps23/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PR-SP', 'http://twitter.com/pr22sp/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PC do B', 'http://twitter.com/PCdoB_Oficial/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PC do B-Curitiba', 'http://twitter.com/PCdoB_Ctba/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PRB', 'http://twitter.com/prb10/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PRB-SP', 'http://twitter.com/prb10sp/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PRB-MG', 'http://twitter.com/prb10mg/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PMDB', 'http://twitter.com/pmdb_nacional/')",
    "INSERT INTO crawler_politicos.fontes_info (nome, link)  VALUES('PMDB-SP', 'http://twitter.com/pmdb_sp/')",
];
module.exports = sql;
