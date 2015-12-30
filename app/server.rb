require 'sinatra'
require 'sinatra/partial'

set :partial_template_engine, :erb
set :public_folder, Proc.new { File.join(root, '..', 'public') }

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/portfolio' do
  erb :portfolio
end

get '/contact' do
  erb :contact
end

get '/bt_black_friday' do
  erb :bt_black_friday
end

get '/phe_sugar_smart' do
  erb :phe_sugar_smart
end
