class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email
end
