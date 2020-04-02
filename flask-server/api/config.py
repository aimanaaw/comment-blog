class DevelopmentConfig:
  # Development Configuration
  url = ('postgresql://postgres:password@localhost/testdb1')

  SQLALCHEMY_DATABASE_URI = url


class DockerDevConfig:
  # Docker Development Configuration
  url = ('postgresql://postgres:password@localhost/testdb1')

  SQLALCHEMY_DATABASE_URI = url


config = {"dev": DevelopmentConfig, "docker": DockerDevConfig}