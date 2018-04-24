require 'pg'

if ENV['RACK_ENV'] != 'production'
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new :spec

  task :test_db do

    con = PG.connect(dbname: 'makersbnb_test')
    con.exec("TRUNCATE TABLE properties RESTART IDENTITY;")
    con.exec("TRUNCATE TABLE users RESTART IDENTITY;")

  end

  task :setup do
    con = PG.connect
    con.exec('CREATE DATABASE makersbnb;')
    con.exec('CREATE DATABASE makersbnb_test;')

    con = PG.connect(dbname: 'makersbnb')
    con.exec('CREATE TABLE properties (id SERIAL PRIMARY KEY, username VARCHAR(15), property VARCHAR(60), description VARCHAR(300), price SERIAL);')
    con.exec('CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(15), email VARCHAR(60), username VARCHAR(15), password VARCHAR(20));')

    con = PG.connect(dbname: 'makersbnb_test')
    con.exec('CREATE TABLE properties (id SERIAL PRIMARY KEY, username VARCHAR(15), property VARCHAR(60), description VARCHAR(300), price SERIAL);')
    con.exec('CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(15), email VARCHAR(60), username VARCHAR(15), password VARCHAR(20));')
  end

  # task :travis_setup do
  #   p "Creating test database..."
  #
  #   connection = PG.connect(dbname: 'chitter_test')
  #   connection.exec('CREATE TABLE peeps (id SERIAL PRIMARY KEY, username VARCHAR(15), message VARCHAR(150), time VARCHAR(60));')
  #   connection.exec('CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(15), email VARCHAR(60), username VARCHAR(15), password VARCHAR(20));')
  #
  # end
end
