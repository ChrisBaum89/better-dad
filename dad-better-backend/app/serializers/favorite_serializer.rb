class FavoriteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :task_id
end