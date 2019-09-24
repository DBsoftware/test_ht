class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string :names, null: false
      t.string :lastnames, null: false
      t.string :phone, null: false

      t.timestamps
    end
  end
end
