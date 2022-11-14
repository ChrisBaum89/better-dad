class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :score
  has_many :children
  has_many :earned_badges, through: :earned_badges
  has_many :assigned_tasks, through: :assigned_tasks
  has_many :completed_tasks, through: :completed_tasks
end
