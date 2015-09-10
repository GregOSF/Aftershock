class SendlocController < ApplicationController

	def connection
		    
	    #move this into SERVICE
	    #app/service/logic.rb
	    current_user = User.find(session[:user_id])
	    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token
	    message = client.messages.create from: '+14152148299', to: current_user.contact_num, body: "Hey " + current_user.contact_name + ", " + "an earthquake just hit but Im okay. Im currently at " + current_user.meeting_place + " waiting for the dust to settle." 
	    redirect_to site_index_path
	end

end
