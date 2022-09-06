class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email
  has_many :children
  has_many :badges, through: :achievements
end
