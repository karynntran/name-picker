require 'bundler'
Bundler.require
require 'sinatra/activerecord/rake'

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'babynames_db'
)