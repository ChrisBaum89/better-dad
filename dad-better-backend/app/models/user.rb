class User < ApplicationRecord
    has_many :children
    has_many :assigned_tasks
    has_many :completed_tasks
    has_many :earned_badges
    has_many :tasks, through: :assigned_tasks
    has_many :tasks, through: :completed_tasks
    has_many :badges, through: :earned_badges

end
