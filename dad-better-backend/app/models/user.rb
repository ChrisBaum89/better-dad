class User < ApplicationRecord
    has_many :children
    has_many :achievements
    has_many :completedtasks
    has_many :favorites
    has_many :tasks, through: :favorites
    has_many :badges, through: :achievements
    has_many :tasks, through: 

end
