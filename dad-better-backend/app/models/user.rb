class User < ApplicationRecord
    has_many :children
    has_many :achievements
    has_many :completedtasks
    has_many :favorites
    has_many :tasks, through: :assigned_tasks
    has_many :badges, through: :achievements

end
