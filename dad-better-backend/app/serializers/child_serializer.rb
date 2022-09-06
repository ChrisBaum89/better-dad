class ChildSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :birthday, :gender, :user_id
  belongs_to :user
end
