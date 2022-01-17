class Item < ApplicationRecord

    validates :name, presence: true
    validates :quantity, presence: true, numericality: { only_integer: true }
    validates :type, presence: true
end
