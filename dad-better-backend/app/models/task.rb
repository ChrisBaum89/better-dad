class Task < ApplicationRecord
    has_many :completed_tasks
    has_many :assigned_tasks
    has_many :users, through: :assigned_tasks
    has_many :users, through: :completed_tasks
end
