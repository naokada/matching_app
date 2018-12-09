class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.text :place_url, null: false
      t.column 'point', 'point', null: false
      t.text :image_url
      t.timestamps
    end
  end
end
