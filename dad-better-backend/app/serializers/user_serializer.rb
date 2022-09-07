class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :password_digest, :birthday, :score
  has_many :children
  has_many :badges, through: :achievements
  has_many :tasks, through: :assigned_tasks
  has_many :tasks, through: :completed_tasks
end
