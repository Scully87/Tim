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

get '/amex_nov_enewsletter' do
  erb :amex_nov_enewsletter
end

get '/amex_invites' do
  erb :amex_invites
end

get '/bt_spring_t2' do
  erb :bt_spring_t2
end

get '/bt_mobile_xmas' do
  erb :bt_mobile_xmas
end

get '/bt_amc' do
  erb :bt_amc
end

get '/amex_mob_asset' do
  erb :amex_mob_asset
end

get '/amex_cashflow' do
  erb :amex_cashflow
end

get '/amex_planes' do
  erb :amex_planes
end

get '/philips_mb' do
  erb :philips_mb
end
