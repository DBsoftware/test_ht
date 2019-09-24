class Record < ApplicationRecord
    validates :names, presence: true
    validates :lastnames, presence: true
    validates :phone, presence: true
end
