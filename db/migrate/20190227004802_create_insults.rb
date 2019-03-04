class CreateInsults < ActiveRecord::Migration[5.2]
  def change
    create_table :insults do |t|
      t.text :phrase
      t.string :contributor

      t.timestamps
    end
  end
end
