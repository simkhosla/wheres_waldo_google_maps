require 'bundler'
Bundler.require

get '/' do

  erb :googlemaps

end

get '/WheresWaldo' do

  erb :googlemaps

end
