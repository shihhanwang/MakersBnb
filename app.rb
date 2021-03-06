require 'sinatra'
require './lib/property'


class Makersbnb < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/properties' do
    @properties = Property.all
    erb :properties
  end

  get '/addproperty' do
    erb :addproperty
  end

  post '/adding' do
    p params
    Property.create(username: params[:username], property: params[:property], description: params[:description], price: params[:price])
    redirect '/properties'
  end

  get '/property/:id' do
    @property = Property.find(params[:id])
    erb :property
  end



  run! if app_file == $0
end
