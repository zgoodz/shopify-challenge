class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :tag
end
