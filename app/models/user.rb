class User < ActiveRecord::Base
	has_secure_password
	has_many :prequake_todos, dependent: :destroy
	has_many :postquake_tods, dependent: :destroy
end
