require 'bundler'
Bundler.require

require './controllers/application_controller'

map('/'){ run ApplicationController }