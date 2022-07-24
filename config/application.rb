require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Saintlaurentdumaroni
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
config.action_cable.disable_request_forgery_protection = true

config.action_cable.worker_pool_size = 4
config.action_cable.url = "ws://localhost:3000/cable"
    config.load_defaults 6.0
config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address:              'smtp.gmail.com',
  port:                 587,
  domain:               'example.com',
  user_name:            'cleo.ordioni',
  password:             '97@marie',
  authentication:       'plain',
  enable_starttls_auto: true,
  open_timeout:         5,
  read_timeout:         5 }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
