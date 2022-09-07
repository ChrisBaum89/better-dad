class Badge < ApplicationRecord
    has_many :user_badge
    has_many :users, through: :earned_badges

end
