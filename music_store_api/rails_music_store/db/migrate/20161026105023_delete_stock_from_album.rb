class DeleteStockFromAlbum < ActiveRecord::Migration
  def change
    remove_column :albums, :stock
  end
end
