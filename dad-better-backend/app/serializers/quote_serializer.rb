class QuoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :category, :active
end
