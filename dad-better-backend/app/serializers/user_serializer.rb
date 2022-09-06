class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email
  has_many :children
end
