class AddStockAsIntegerToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :stock, :integer
  end
end
