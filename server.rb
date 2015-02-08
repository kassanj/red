require 'sinatra'

get '/' do
  File.read(File.join('public', 'red.html'))
end