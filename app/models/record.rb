class Record < ApplicationRecord
    validates :names, presence: true
    validates :lastnames, presence: true
    validates :phone, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 7, maximum: 10 }   
end
