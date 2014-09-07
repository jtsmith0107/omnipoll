# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :email, uniqueness: true
  
  has_many :memberships
  
  attr_reader :password
  after_initialize :ensure_session_token
  
  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email]);
    user.try(:is_password?, user_params[:password]) ? user : nil
  end
  
  def gravatar_url
    "http://www.gravatar.com/avatar/#{ Digest::MD5.hexdigest(email) }"
  end
  
  def password=(secret)
    @password = secret
    self.password_digest = BCrypt::Password.create(secret)
  end
  
  def is_password?(secret)
    BCrypt::Password.new(self.password_digest).is_password?(secret);
  end
  
  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
  
  
  
  protected
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
  
end
