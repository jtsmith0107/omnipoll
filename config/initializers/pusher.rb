require 'pusher'

Pusher.app_id = ENV["pusher_app_id"]
Pusher.key    = ENV["pusher_key"]
Pusher.secret = ENV["pusher_secret"]


Pusher.url = "http://97e5d6642eaad569dab5:04dbb664ac21ed31a067@api.pusherapp.com/apps/82873"
# Pusher.url = "http://#{Pusher.key}:#{Pusher.secret}@api.pusherapp.com/apps/#{Pusher.secret}"
Pusher.logger = Rails.logger