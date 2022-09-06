class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :password_digest, :birthday, :score, :beer_drinker
  has_many :children
  has_many :favorites
  has_many :badges, through: :achievements
  has_many :tasks, through: :completedtasks
end
