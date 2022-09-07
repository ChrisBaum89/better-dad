class Badge < ApplicationRecord
    has_many :achievements
    has_many :earned_badges
    has_many :users, through: :earned_badges

end
