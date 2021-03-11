# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    attr_reader :password

    after_initialize :ensure_session_token

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password=password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = find_by_username(username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.update!(session_token: SecureRandom.urlsafe_base64) && self.session_token
    end

end
