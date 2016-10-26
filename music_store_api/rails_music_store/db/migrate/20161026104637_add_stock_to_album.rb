class AddStockToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :stock, :string
  end
end
