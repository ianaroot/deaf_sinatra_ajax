get '/' do
  # @grandma = params[:user_input]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  # p "it's just printing whatever the fuck we type"
# @grandma = params[:user_input]
  if params[:user_input] == params[:user_input].upcase
    @grandma = "NO, NOT SINCE 1938!"
  else
    @grandma = "HUH? SPEAK UP, SONNY!"
  end


# erb :grandma_says, :layout => false
  if request.xhr?
    @grandma
  else
    erb :index
  end
  # "Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
end
