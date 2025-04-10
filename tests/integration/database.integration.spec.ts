import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from "../../src/config/database.config"

describe('Database Integration Test', () => {
  let dataSource: DataSource;

  beforeAll(async () => {
    // Inicializa a conexão com o banco de dados usando a configuração
    dataSource = new DataSource(databaseConfig as DataSourceOptions);
    await dataSource.initialize();
  });

  afterAll(async () => {
    // Fecha a conexão após os testes
    if (dataSource.isInitialized) {
      await dataSource.destroy();
    }
  });

  it('should connect to the database successfully', async () => {
    expect(dataSource.isInitialized).toBe(true);
  });

  it('should retrieve data from a test table', async () => {
    const queryResult = await dataSource.query('SELECT 1 AS result');
    expect(queryResult).toEqual([{ result: 1 }]);
  });
});