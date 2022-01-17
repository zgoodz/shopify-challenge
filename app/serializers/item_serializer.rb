class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :type
end
