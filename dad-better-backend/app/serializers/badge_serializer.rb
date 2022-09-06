class BadgeSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :name :description :score_threshold :image
  has_many :users
end
