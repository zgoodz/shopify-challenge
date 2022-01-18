class Item < ApplicationRecord

    validates :name, presence: true
    validates :quantity, presence: true, numericality: { only_integer: true }
    validates :tag, presence: true
end
