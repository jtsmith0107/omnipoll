require 'pusher'

Pusher.app_id = ENV["pusher_app_id"]
Pusher.key    = ENV["pusher_key"]
Pusher.secret = ENV["pusher_secret"]


Pusher.url = "http://6e17d501bab807030f9d:6101c01d57e57a694e96@api.pusherapp.com/apps/82873"
# Pusher.url = "http://#{Pusher.key}:#{Pusher.secret}@api.pusherapp.com/apps/#{Pusher.secret}"
Pusher.logger = Rails.logger